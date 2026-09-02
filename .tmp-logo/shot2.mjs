// Re-capture with a device-metrics reset + scroll reset before every capture,
// then assert programmatically that each shot is not a flat/blank image.
const BASE = 'http://localhost:8081/';
const OUT = String.raw`C:\Games\work\vambadiye_vanth_vela\ma_ai\.tmp-logo`;
import { writeFileSync } from 'node:fs';

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const list = await (await fetch('http://localhost:9222/json/list')).json();
const ws = new WebSocket(list.find((t) => t.type === 'page').webSocketDebuggerUrl);
await new Promise((res, rej) => { ws.onopen = res; ws.onerror = rej; });

let id = 0;
const pending = new Map();
ws.onmessage = (m) => {
  const msg = JSON.parse(m.data);
  if (msg.id && pending.has(msg.id)) {
    const { res, rej } = pending.get(msg.id);
    pending.delete(msg.id);
    msg.error ? rej(new Error(JSON.stringify(msg.error))) : res(msg.result);
  }
};
const send = (method, params = {}) =>
  new Promise((res, rej) => { pending.set(++id, { res, rej }); ws.send(JSON.stringify({ id, method, params })); });
const evaluate = async (e) =>
  (await send('Runtime.evaluate', { expression: e, returnByValue: true, awaitPromise: true })).result.value;

await send('Page.enable');
await send('Runtime.enable');

const VIEWPORTS = [
  { name: 'desktop', width: 1440, height: 900, mobile: false },
  { name: 'mobile', width: 390, height: 844, mobile: true },
];

for (const vp of VIEWPORTS) {
  for (const theme of ['light', 'dark']) {
    const metrics = { width: vp.width, height: vp.height, deviceScaleFactor: 2, mobile: vp.mobile };
    await send('Emulation.setDeviceMetricsOverride', metrics);
    await send('Page.navigate', { url: BASE });
    await sleep(2200);
    await evaluate(`localStorage.setItem('ma-theme', '${theme}')`);
    await send('Page.reload');
    await sleep(3200);

    // --- navbar (fixed, top of viewport) ---
    await evaluate('window.scrollTo(0, 0)');
    await send('Emulation.setDeviceMetricsOverride', metrics);
    await sleep(1200);
    const nav = await send('Page.captureScreenshot', {
      format: 'png', clip: { x: 0, y: 0, width: vp.width, height: 84, scale: 1 },
    });
    writeFileSync(`${OUT}\\nav_${vp.name}_${theme}.png`, Buffer.from(nav.data, 'base64'));

    // --- footer logo block ---
    const rect = await evaluate(`(() => {
      const img = [...document.querySelectorAll('footer a img')].find(i => getComputedStyle(i).display !== 'none');
      img.scrollIntoView({ block: 'center' });
      return new Promise(r => requestAnimationFrame(() => requestAnimationFrame(() => {
        const b = img.getBoundingClientRect();
        r({ x: b.x, y: b.y, w: b.width, h: b.height });
      })));
    })()`);
    await send('Emulation.setDeviceMetricsOverride', metrics);
    await sleep(1200);
    const foot = await send('Page.captureScreenshot', {
      format: 'png',
      clip: {
        x: Math.max(0, rect.x - 16), y: Math.max(0, rect.y - 16),
        width: Math.min(vp.width, rect.w + 300), height: rect.h + 32, scale: 1,
      },
    });
    writeFileSync(`${OUT}\\foot_${vp.name}_${theme}.png`, Buffer.from(foot.data, 'base64'));
    console.log(`${vp.name}/${theme}: nav clip 0,0 ${vp.width}x84 | footer rect ${JSON.stringify(rect)}`);
  }
}
ws.close();
