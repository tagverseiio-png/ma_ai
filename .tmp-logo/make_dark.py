"""Generate dark-theme logo variants.

The two source logos are built from exactly two ingredients:
  * the purple/blue "M/MA" gradient mark (saturated, val 160-255)
  * the "ma.ai" wordmark, a single flat neutral #494949 with straight alpha
    carrying the anti-aliasing.

So the dark variant only has to remap that one neutral RGB triple to a light
tone and leave alpha (and therefore every anti-aliased edge) untouched. The
gradient is copied verbatim, so the branding cannot drift.
"""
import sys
sys.path.insert(0, r'C:\Games\work\vambadiye_vanth_vela\ma_ai\.tmp-logo')
import png

ASSETS = r'C:\Games\work\vambadiye_vanth_vela\ma_ai\src\assets'
SRC_NEUTRAL = (73, 73, 73)          # #494949 wordmark
DST_NEUTRAL = (240, 240, 240)       # #F0F0F0 == --site-fg in .dark

JOBS = [
    ('Ma_footer_logo_132x33.png', 'Ma_nav_logo_dark.png'),
    ('Ma_footer_logo_200x160.png', 'Ma_footer_logo_dark.png'),
]

for src, dst in JOBS:
    w, h, px = png.decode(ASSETS + '\\' + src)
    out = bytearray(px)
    swapped = 0
    for i in range(w * h):
        o = i * 4
        if out[o] == SRC_NEUTRAL[0] and out[o + 1] == SRC_NEUTRAL[1] \
                and out[o + 2] == SRC_NEUTRAL[2] and out[o + 3] != 0:
            out[o], out[o + 1], out[o + 2] = DST_NEUTRAL
            swapped += 1
    size = png.encode(ASSETS + '\\' + dst, w, h, out)
    print('%-28s -> %-24s %dx%d  %d px recoloured  %d bytes'
          % (src, dst, w, h, swapped, size))

    # verify round trip: same size, alpha untouched, gradient identical
    vw, vh, vpx = png.decode(ASSETS + '\\' + dst)
    assert (vw, vh) == (w, h), 'dimension drift'
    bad_alpha = bad_grad = bad_text = 0
    for i in range(w * h):
        o = i * 4
        sr, sg, sb, sa = px[o:o + 4]
        dr, dg, db, da = vpx[o:o + 4]
        if sa != da:
            bad_alpha += 1
        if (sr, sg, sb) == SRC_NEUTRAL and sa != 0:
            if (dr, dg, db) != DST_NEUTRAL:
                bad_text += 1
        elif (sr, sg, sb) != (dr, dg, db):
            bad_grad += 1
    print('   verify: alpha diffs=%d  gradient diffs=%d  wordmark misses=%d'
          % (bad_alpha, bad_grad, bad_text))
    assert bad_alpha == bad_grad == bad_text == 0
