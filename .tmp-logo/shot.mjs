// Drive headless Chrome over CDP: for each viewport x theme, record which logo
// variant is actually painted and capture nav + footer screenshots.
const BASE = 'http://localhost:8081/';
const OUT = String.raw`C:\Games\work\vambadiye_vanth_vela\ma_ai\.tmp-logo`;
import { writeFileSync } from 'node:fs';

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function pageSocket() {
  for (let i = 0; i < 40; i++) {
    try {
      const list = await (await fetch('http://localhost:9222/json/list')).json();
      const page = list.find((t) => t.type === 'page');
      if (page) return page.webSocketDebuggerUrl;
    } catch {}
    await sleep(500);
  }
  throw new Error('no chrome debug target');
}

const url = await pageSocket();
const ws = new WebSocket(url);
await new Promise((res, rej) => { ws.onopen = res; ws.onerror = rej; });

let id = 0;
const pending = new Map();
const events = [];
ws.onmessage = (m) => {
  const msg = JSON.parse(m.data);
  if (msg.id && pending.has(msg.id)) {
    const { res, rej } = pending.get(msg.id);
    pending.delete(msg.id);
    msg.error ? rej(new Error(JSON.stringify(msg.error))) : res(msg.result);
  } else if (msg.method) events.push(msg.method);
};
const send = (method, params = {}) =>
  new Promise((res, rej) => { pending.set(++id, { res, rej }); ws.send(JSON.stringify({ id, method, params })); });

const evaluate = async (expression) =>
  (await send('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true })).result.value;

await send('Page.enable');
await send('Runtime.enable');

const PROBE = `(() => {
  const pick = (img) => {
    const cs = getComputedStyle(img);
    const r = img.getBoundingClientRect();
    return {
      file: (img.currentSrc || img.src).replace(/^data:image\\/png;base64,/, 'inline:').slice(-34),
      display: cs.display,
      blend: cs.mixBlendMode,
      box: Math.round(r.width) + 'x' + Math.round(r.height),
    };
  };
  const navImgs = [...document.querySelectorAll('nav a img')];
  const footImgs = [...document.querySelectorAll('footer a img')].filter(i => i.width || i.naturalWidth);
  return {
    theme: document.documentElement.classList.contains('dark') ? 'dark' : 'light',
    bg: getComputedStyle(document.body).backgroundColor,
    nav: navImgs.map(pick),
    footer: footImgs.slice(0, 2).map(pick),
  };
})()`;

const VIEWPORTS = [
  { name: 'desktop', width: 1440, height: 900, mobile: false },
  { name: 'mobile', width: 390, height: 844, mobile: true },
];

const report = [];
for (const vp of VIEWPORTS) {
  await send('Emulation.setDeviceMetricsOverride', {
    width: vp.width, height: vp.height, deviceScaleFactor: 2, mobile: vp.mobile,
  });
  for (const theme of ['light', 'dark']) {
    await send('Page.navigate', { url: BASE });
    await sleep(2500);
    await evaluate(`localStorage.setItem('ma-theme', '${theme}')`);
    await send('Page.reload');
    await sleep(3000);

    const probe = await evaluate(PROBE);
    report.push({ viewport: vp.name, want: theme, ...probe });

    // nav sits fixed at the top of the viewport
    const nav = await send('Page.captureScreenshot', {
      format: 'png',
      clip: { x: 0, y: 0, width: vp.width, height: 90, scale: 2 },
    });
    writeFileSync(`${OUT}\\shot_nav_${vp.name}_${theme}.png`, Buffer.from(nav.data, 'base64'));

    // footer logo: scroll it into view, then clip in page coordinates
    const rect = await evaluate(`(() => {
      const img = [...document.querySelectorAll('footer a img')].find(i => getComputedStyle(i).display !== 'none');
      img.scrollIntoView({ block: 'center' });
      const r = img.getBoundingClientRect();
      return { x: r.x, y: r.y + window.scrollY, w: r.width, h: r.height };
    })()`);
    await sleep(900);
    const foot = await send('Page.captureScreenshot', {
      format: 'png',
      captureBeyondViewport: true,
      clip: {
        x: Math.max(0, rect.x - 20), y: Math.max(0, rect.y - 20),
        width: rect.w + 260, height: rect.h + 40, scale: 2,
      },
    });
    writeFileSync(`${OUT}\\shot_footer_${vp.name}_${theme}.png`, Buffer.from(foot.data, 'base64'));
  }
}

for (const r of report) {
  console.log(`\n[${r.viewport} / requested ${r.want}] html.dark=${r.theme}  body bg=${r.bg}`);
  for (const i of r.nav) console.log(`   nav    display=${i.display.padEnd(5)} blend=${i.blend.padEnd(8)} box=${i.box.padEnd(9)} src=...${i.file}`);
  for (const i of r.footer) console.log(`   footer display=${i.display.padEnd(5)} blend=${i.blend.padEnd(8)} box=${i.box.padEnd(9)} src=...${i.file}`);
}
ws.close();
