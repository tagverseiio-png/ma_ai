import sys
from collections import Counter
sys.path.insert(0, r'C:\Games\work\vambadiye_vanth_vela\ma_ai\.tmp-logo')
import png

for name in ('Ma_footer_logo_132x33.png', 'Ma_footer_logo_200x160.png'):
    p = r'C:\Games\work\vambadiye_vanth_vela\ma_ai\src\assets\\' + name
    w, h, px = png.decode(p)
    print('=' * 70)
    print(name, w, 'x', h)

    neutral_partial = Counter()
    colored_partial = 0
    neutral_all = Counter()
    for i in range(w * h):
        r, g, b, a = px[i * 4:i * 4 + 4]
        if a == 0:
            continue
        mx, mn = max(r, g, b), min(r, g, b)
        sat = 0 if mx == 0 else (mx - mn) / mx
        if sat < 0.20:
            neutral_all[(r, g, b)] += 1
            if a < 255:
                neutral_partial[((r, g, b), a // 32 * 32)] += 1
        elif a < 255:
            colored_partial += 1

    print('all neutral(sat<0.2) colors:', neutral_all.most_common(25))
    print('neutral count total:', sum(neutral_all.values()))
    print('colored partial-alpha px:', colored_partial)
    print('neutral partial-alpha (color, alpha_bucket) -> n:')
    for k, c in sorted(neutral_partial.items(), key=lambda kv: -kv[1])[:25]:
        print('   #%02X%02X%02X a>=%-3d n=%d' % (k[0][0], k[0][1], k[0][2], k[1], c))

    # where are the neutral pixels? bounding box
    xs, ys = [], []
    for i in range(w * h):
        r, g, b, a = px[i * 4:i * 4 + 4]
        if a == 0:
            continue
        mx, mn = max(r, g, b), min(r, g, b)
        sat = 0 if mx == 0 else (mx - mn) / mx
        if sat < 0.20:
            xs.append(i % w); ys.append(i // w)
    if xs:
        print('neutral bbox: x %d..%d  y %d..%d  (image %dx%d)' % (
            min(xs), max(xs), min(ys), max(ys), w, h))
