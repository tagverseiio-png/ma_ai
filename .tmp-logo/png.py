"""Minimal dependency-free PNG decode/encode (8/16-bit, non-interlaced)."""
import struct, zlib


def _paeth(a, b, c):
    p = a + b - c
    pa, pb, pc = abs(p - a), abs(p - b), abs(p - c)
    if pa <= pb and pa <= pc:
        return a
    if pb <= pc:
        return b
    return c


def decode(path):
    raw = open(path, 'rb').read()
    assert raw[:8] == b'\x89PNG\r\n\x1a\n', 'not a png'
    pos, idat, plte, trns, ihdr = 8, bytearray(), None, None, None
    while pos < len(raw):
        (ln,) = struct.unpack('>I', raw[pos:pos + 4])
        ctype = raw[pos + 4:pos + 8]
        data = raw[pos + 8:pos + 8 + ln]
        pos += 12 + ln
        if ctype == b'IHDR':
            ihdr = struct.unpack('>IIBBBBB', data)
        elif ctype == b'IDAT':
            idat += data
        elif ctype == b'PLTE':
            plte = data
        elif ctype == b'tRNS':
            trns = data
        elif ctype == b'IEND':
            break

    w, h, depth, ctyp, comp, filt, interlace = ihdr
    assert interlace == 0, 'interlaced not supported'
    assert depth in (8, 16), 'depth %d not supported' % depth

    channels = {0: 1, 2: 3, 3: 1, 4: 2, 6: 4}[ctyp]
    if ctyp == 3:
        depth_bits = depth
        assert depth_bits == 8, 'sub-byte palette not supported'
    sample = depth // 8
    bpp = channels * sample
    stride = w * bpp

    buf = zlib.decompress(bytes(idat))
    out = bytearray(h * stride)
    prev = bytearray(stride)
    p = 0
    for y in range(h):
        ft = buf[p]
        p += 1
        line = bytearray(buf[p:p + stride])
        p += stride
        if ft == 1:
            for i in range(bpp, stride):
                line[i] = (line[i] + line[i - bpp]) & 0xFF
        elif ft == 2:
            for i in range(stride):
                line[i] = (line[i] + prev[i]) & 0xFF
        elif ft == 3:
            for i in range(stride):
                a = line[i - bpp] if i >= bpp else 0
                line[i] = (line[i] + ((a + prev[i]) >> 1)) & 0xFF
        elif ft == 4:
            for i in range(stride):
                a = line[i - bpp] if i >= bpp else 0
                c = prev[i - bpp] if i >= bpp else 0
                line[i] = (line[i] + _paeth(a, prev[i], c)) & 0xFF
        out[y * stride:(y + 1) * stride] = line
        prev = line

    # normalise to 8-bit RGBA
    px = bytearray(w * h * 4)
    for i in range(w * h):
        base = i * bpp
        if sample == 2:
            vals = [out[base + c * 2] for c in range(channels)]
        else:
            vals = [out[base + c] for c in range(channels)]
        if ctyp == 0:
            r = g = b = vals[0]; a = 255
        elif ctyp == 4:
            r = g = b = vals[0]; a = vals[1]
        elif ctyp == 2:
            r, g, b = vals; a = 255
        elif ctyp == 6:
            r, g, b, a = vals
        else:
            idx = vals[0]
            r, g, b = plte[idx * 3], plte[idx * 3 + 1], plte[idx * 3 + 2]
            a = trns[idx] if trns and idx < len(trns) else 255
        px[i * 4:i * 4 + 4] = bytes((r, g, b, a))
    return w, h, px


def _chunk(ctype, data):
    return struct.pack('>I', len(data)) + ctype + data + struct.pack(
        '>I', zlib.crc32(ctype + data) & 0xFFFFFFFF)


def encode(path, w, h, px):
    """Write 8-bit RGBA png, picking the cheapest filter per scanline."""
    stride, bpp = w * 4, 4
    raw = bytearray()
    prev = bytearray(stride)
    for y in range(h):
        line = px[y * stride:(y + 1) * stride]
        best, best_cost = None, None
        for ft in range(5):
            cand = bytearray(stride)
            for i in range(stride):
                a = line[i - bpp] if i >= bpp else 0
                b = prev[i]
                c = prev[i - bpp] if i >= bpp else 0
                if ft == 0:
                    v = line[i]
                elif ft == 1:
                    v = line[i] - a
                elif ft == 2:
                    v = line[i] - b
                elif ft == 3:
                    v = line[i] - ((a + b) >> 1)
                else:
                    v = line[i] - _paeth(a, b, c)
                cand[i] = v & 0xFF
            cost = sum(x if x < 128 else 256 - x for x in cand)
            if best_cost is None or cost < best_cost:
                best, best_cost = (ft, cand), cost
        raw.append(best[0])
        raw += best[1]
        prev = bytearray(line)

    body = zlib.compress(bytes(raw), 9)
    out = b'\x89PNG\r\n\x1a\n'
    out += _chunk(b'IHDR', struct.pack('>IIBBBBB', w, h, 8, 6, 0, 0, 0))
    out += _chunk(b'IDAT', body)
    out += _chunk(b'IEND', b'')
    open(path, 'wb').write(out)
    return len(out)
