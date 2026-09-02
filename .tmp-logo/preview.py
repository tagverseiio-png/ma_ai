"""Composite previews so the variants can be eyeballed on real theme backgrounds."""
import sys
sys.path.insert(0, r'C:\Games\work\vambadiye_vanth_vela\ma_ai\.tmp-logo')
import png

ASSETS = r'C:\Games\work\vambadiye_vanth_vela\ma_ai\src\assets'
TMP = r'C:\Games\work\vambadiye_vanth_vela\ma_ai\.tmp-logo'
LIGHT_BG = (0xF4, 0xF4, 0xF0)   # --site-bg :root
DARK_BG = (0x0B, 0x0B, 0x13)    # --site-bg .dark


def over(px, w, h, bg, multiply=False):
    out = bytearray(w * h * 4)
    for i in range(w * h):
        o = i * 4
        r, g, b, a = px[o:o + 4]
        if multiply:  # emulate mix-blend-multiply against an opaque backdrop
            r, g, b = r * bg[0] // 255, g * bg[1] // 255, b * bg[2] // 255
        f = a / 255
        out[o + 0] = round(r * f + bg[0] * (1 - f))
        out[o + 1] = round(g * f + bg[1] * (1 - f))
        out[o + 2] = round(b * f + bg[2] * (1 - f))
        out[o + 3] = 255
    return out


def stack(tiles, pad=10):
    """tiles: list of (w, h, rgba, bg) stacked vertically, left aligned."""
    W = max(t[0] for t in tiles) + pad * 2
    H = sum(t[1] for t in tiles) + pad * (len(tiles) + 1)
    canvas = bytearray(b'\x80\x80\x80\xff' * (W * H))
    y = pad
    for w, h, px, bg in tiles:
        for row in range(h):
            for col in range(w):
                s = (row * w + col) * 4
                d = ((y + row) * W + pad + col) * 4
                canvas[d:d + 4] = px[s:s + 4]
        # fill the rest of the strip with the backdrop colour
        for row in range(h):
            for col in range(w, W - pad * 2):
                d = ((y + row) * W + pad + col) * 4
                canvas[d:d + 4] = bytes(bg) + b'\xff'
        y += h + pad
    return W, H, canvas


for label, light_src, dark_src in (
        ('nav', 'Ma_footer_logo_132x33.png', 'Ma_nav_logo_dark.png'),
        ('footer', 'Ma_footer_logo_200x160.png', 'Ma_footer_logo_dark.png')):
    lw, lh, lpx = png.decode(ASSETS + '\\' + light_src)
    dw, dh, dpx = png.decode(ASSETS + '\\' + dark_src)
    tiles = [
        # what light theme shows today (multiply over #F4F4F0) - unchanged
        (lw, lh, over(lpx, lw, lh, LIGHT_BG, multiply=True), LIGHT_BG),
        # the bug: old asset + multiply over the dark backdrop
        (lw, lh, over(lpx, lw, lh, DARK_BG, multiply=True), DARK_BG),
        # the fix: dark variant, normal blending, over the dark backdrop
        (dw, dh, over(dpx, dw, dh, DARK_BG), DARK_BG),
    ]
    W, H, canvas = stack(tiles)
    png.encode('%s\\preview_%s.png' % (TMP, label), W, H, canvas)
    print('preview_%s.png  %dx%d  (light-now / dark-before / dark-after)' % (label, W, H))
