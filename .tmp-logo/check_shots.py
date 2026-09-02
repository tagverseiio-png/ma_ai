import sys
from collections import Counter
sys.path.insert(0, r'C:\Games\work\vambadiye_vanth_vela\ma_ai\.tmp-logo')
import png

TMP = r'C:\Games\work\vambadiye_vanth_vela\ma_ai\.tmp-logo'


def luminance(r, g, b):
    def f(c):
        c /= 255
        return c / 12.92 if c <= 0.04045 else ((c + 0.055) / 1.055) ** 2.4
    return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b)


for f in ('nav_desktop_light', 'nav_desktop_dark', 'nav_mobile_light', 'nav_mobile_dark',
          'foot_desktop_light', 'foot_desktop_dark', 'foot_mobile_light', 'foot_mobile_dark'):
    w, h, px = png.decode('%s\\%s.png' % (TMP, f))
    cols = Counter()
    for i in range(w * h):
        cols[tuple(px[i * 4:i * 4 + 3])] += 1
    bg, bgn = cols.most_common(1)[0]
    lbg = luminance(*bg)
    # brightest and darkest pixels, and contrast of each vs the dominant bg
    best = max(cols, key=lambda c: abs(luminance(*c) - lbg))
    lb = luminance(*best)
    hi, lo = max(lb, lbg), min(lb, lbg)
    print('%-20s %3dx%-3d distinct=%-5d bg=#%02X%02X%02X (%.0f%%)  most-contrasting=#%02X%02X%02X  ratio=%.1f:1'
          % (f, w, h, len(cols), bg[0], bg[1], bg[2], 100 * bgn / (w * h),
             best[0], best[1], best[2], (hi + 0.05) / (lo + 0.05)))
