import sys, colorsys
from collections import Counter
sys.path.insert(0, r'C:\Games\work\vambadiye_vanth_vela\ma_ai\.tmp-logo')
import png

for name in ('Ma_footer_logo_132x33.png', 'Ma_footer_logo_200x160.png'):
    p = r'C:\Games\work\vambadiye_vanth_vela\ma_ai\src\assets\\' + name
    w, h, px = png.decode(p)
    print('=' * 70)
    print(name, '->', w, 'x', h)

    alpha = Counter()
    colors = Counter()
    buckets = Counter()
    for i in range(w * h):
        r, g, b, a = px[i * 4:i * 4 + 4]
        alpha[a] += 1
        if a > 200:
            colors[(r, g, b)] += 1
            mx, mn = max(r, g, b), min(r, g, b)
            sat = 0 if mx == 0 else (mx - mn) / mx
            buckets[(round(sat, 1), mx // 32 * 32)] += 1

    print('alpha: fully opaque=%d, fully transparent=%d, partial=%d' % (
        alpha[255], alpha[0], w * h - alpha[255] - alpha[0]))
    print('distinct opaque colors:', len(colors))
    print('top 18 opaque colors (rgb, count, sat, val):')
    for (r, g, b), c in colors.most_common(18):
        mx, mn = max(r, g, b), min(r, g, b)
        sat = 0 if mx == 0 else (mx - mn) / mx
        print('   #%02X%02X%02X  n=%-7d sat=%.2f val=%d' % (r, g, b, c, sat, mx))

    print('sat/value buckets (sat_rounded, val_floor32) -> count:')
    for k, c in sorted(buckets.items()):
        print('   sat=%.1f val>=%-3d  n=%d' % (k[0], k[1], c))
