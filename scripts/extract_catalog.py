#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Bóc ảnh nhúng + text có cấu trúc từ Sonic Catalogue 2026.pdf
   - Ảnh: assets/img/products/page{page:03d}_img{idx:02d}.png  (tất cả ảnh nhúng)
   - Text: data/products.json (mã, tên, mô tả, kích thước, trang, ảnh) + data/catalog_pages.json
"""
import fitz, re, json, os, datetime

PDF = "assets/Sonic Catalogue 2026.pdf"
IMG_DIR = "assets/img/products"
DATA_DIR = "data"
os.makedirs(IMG_DIR, exist_ok=True)
os.makedirs(DATA_DIR, exist_ok=True)

doc = fitz.open(PDF)

# ---------- BƯỚC 3: bóc tất cả ảnh nhúng theo từng trang ----------
page_images = {}          # page_no(1-based) -> [filename,...]
img_records = []          # manifest từng ảnh
fail = 0
for i in range(doc.page_count):
    pno = i + 1
    imgs = doc[i].get_images(full=True)
    files = []
    for idx, im in enumerate(imgs, start=1):
        xref = im[0]
        fname = f"page{pno:03d}_img{idx:02d}.png"
        fpath = os.path.join(IMG_DIR, fname)
        w = h = None
        try:
            pix = fitz.Pixmap(doc, xref)
            if pix.n - pix.alpha >= 4:          # CMYK -> RGB
                pix = fitz.Pixmap(fitz.csRGB, pix)
            w, h = pix.width, pix.height
            pix.save(fpath)
            pix = None
        except Exception:
            # Dự phòng: ghi bytes gốc ra file .png nếu Pixmap lỗi
            try:
                info = doc.extract_image(xref)
                with open(fpath, "wb") as f:
                    f.write(info["image"])
                w, h = info.get("width"), info.get("height")
            except Exception:
                fail += 1
                continue
        files.append(fname)
        img_records.append({"file": fname, "page": pno, "idx": idx,
                             "xref": xref, "w": w, "h": h})
    page_images[pno] = files

# ---------- BƯỚC 2: parse text có cấu trúc ----------
CODE_LINE = re.compile(r'^#\s*(\d{4,6})\b(.*)$')
DIMS = re.compile(r'(\d{2,4}\s*[x×]\s*\d{2,4}(?:\s*[x×]\s*\d{1,4})?\s*mm)', re.I)
DIM_CM = re.compile(r'(\d{2,3}\s*cm)', re.I)
SPEC_HINT = re.compile(r'(kg|cm|mm|drawer|caster|slide|capacity|steel|TOOLS|PCS|"|inch)', re.I)
TOOLS = re.compile(r'(\d{2,4})\s*(?:TOOLS|-?PCS)', re.I)

products = {}     # code -> record
pages_out = []

for i in range(doc.page_count):
    pno = i + 1
    lines = [l.strip() for l in doc[i].get_text("text").split("\n")]
    lines = [l for l in lines if l != ""]

    # Thông số & tools cấp trang (dùng để tham chiếu)
    specs = [l for l in lines if SPEC_HINT.search(l) and not l.startswith("#")]
    tools = sorted({int(m) for l in lines for m in TOOLS.findall(l)})
    page_skus = []

    for j, line in enumerate(lines):
        m = CODE_LINE.match(line)
        if not m:
            continue
        code = m.group(1)
        rest = m.group(2).strip(" -–—:")
        # Mô tả: phần còn lại trên cùng dòng, hoặc dòng kế nếu trống
        desc = rest
        if not desc and j + 1 < len(lines) and not lines[j + 1].startswith("#"):
            desc = lines[j + 1].strip()
        desc = re.sub(r'\s+', ' ', desc).strip()
        # Tên gọn: bỏ phần kích thước phía sau
        name = DIMS.sub('', desc).strip(" -–—,") or desc
        if len(name) > 70:
            name = name[:70].rsplit(' ', 1)[0]
        dm = DIMS.search(desc) or DIM_CM.search(desc)
        dims = dm.group(1) if dm else ""

        page_skus.append(code)
        if code not in products:
            products[code] = {
                "code": code, "name": name, "description": desc,
                "dimensions": dims, "page": pno, "pages": [pno],
                "images": page_images.get(pno, []),
            }
        else:
            rec = products[code]
            if pno not in rec["pages"]:
                rec["pages"].append(pno)
            if len(desc) > len(rec["description"]):
                rec["description"], rec["name"] = desc, name
            if dims and not rec["dimensions"]:
                rec["dimensions"] = dims

    pages_out.append({"page": pno, "skus": page_skus,
                      "tools": tools, "specs": specs[:25]})

doc.close()

prod_list = sorted(products.values(), key=lambda r: (r["page"], r["code"]))
out = {
    "meta": {
        "source": os.path.basename(PDF),
        "pages": len(pages_out),
        "products_extracted": len(prod_list),
        "images_extracted": len(img_records),
        "generated_at": datetime.datetime.now().isoformat(timespec="seconds"),
        "note": "Mã có tiền tố # là SKU bán hàng. 'images' liệt kê ảnh cùng trang để map thủ công. "
                "'specs' cấp trang nằm trong catalog_pages.json.",
    },
    "products": prod_list,
}
with open(os.path.join(DATA_DIR, "products.json"), "w", encoding="utf-8") as f:
    json.dump(out, f, ensure_ascii=False, indent=2)
with open(os.path.join(DATA_DIR, "catalog_pages.json"), "w", encoding="utf-8") as f:
    json.dump({"pages": pages_out}, f, ensure_ascii=False, indent=2)
with open(os.path.join(DATA_DIR, "images_manifest.json"), "w", encoding="utf-8") as f:
    json.dump({"images": img_records}, f, ensure_ascii=False, indent=2)

print("Ảnh đã bóc :", len(img_records), "(lỗi:", fail, ")")
print("SKU (#)    :", len(prod_list))
print("Trang      :", len(pages_out))
