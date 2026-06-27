# Sonic-web — Hướng dẫn cho Claude Code

## Dự án là gì
Website TĨNH dạng CATALOG TRƯNG BÀY cho đại lý chính hãng Sonic Equipment tại VN. Khách B2B (gara, xưởng) xem sản phẩm rồi "Yêu cầu báo giá". KHÔNG tồn kho, KHÔNG giá công khai, KHÔNG giỏ hàng, KHÔNG đặt hàng.

## LUẬT CỨNG (không được vi phạm)
- KHÔNG bịa dữ liệu. Mã SKU, số chi tiết, kích thước, specs PHẢI khớp catalog thật. Không chắc -> đánh verified:false, để trống. TUYỆT ĐỐI không điền số "nghe hợp lý".
- KHÔNG merge branch catalog-temp vào branch website/main (tránh phình repo: PDF + 2788 ảnh nằm ở đó). Chỉ đọc bằng `git show origin/catalog-temp:<path>` — KHÔNG checkout, KHÔNG merge.
- KHÔNG copy thông số của model/biến thể này sang cái khác.
- KHÔNG cào ảnh web, KHÔNG bịa ảnh cho biến thể không có ảnh riêng.
- KHÔNG để lộ giá / tồn kho / nút đặt hàng ở bất cứ đâu.

## RÀNG BUỘC KỸ THUẬT (quan trọng)
- Site mở qua giao thức `file://` → KHÔNG fetch() được JSON (Safari chặn). Mọi dữ liệu PHẢI export dạng JS const trong file `.js`, KHÔNG dùng fetch/XHR/import JSON động.

## KIẾN TRÚC FILE (dòng NEXT)
- `data/products_next_verified.json` — canonical đã verify (có `_source_page`). KHÔNG bao giờ để Claude Code tự sửa.
- `data/data-next.js` — export `const NEXT_DATA = <nội dung verified JSON>`. Renderer đọc DUY NHẤT từ đây. Là `.js` vì lý do file:// ở trên.
- `data/next-trays.js` — data khay foam, TÁCH RIÊNG khỏi verified JSON. Cũng là `.js`.
- `assets/js/product-next.js` — renderer trang chi tiết, đọc thuần từ NEXT_DATA.
- `assets/js/products.js` — card listing ở products.html. Bản CŨ từng chứa data BỊA — đã thay, đừng tin data cũ.

## NGUỒN DỮ LIỆU
- Data NEXT đã verify: `data/products_next_verified.json`.
- Catalog gốc + data đầy đủ (502 SKU) nằm ở branch catalog-temp: `git show origin/catalog-temp:data/products.json` — KHÔNG checkout, KHÔNG merge.

## MÀU TỦ NEXT (ground-truth do chủ dự án cung cấp)
- Catalog KHÔNG in màu. Màu xác định theo VỊ TRÍ trong dãy 3 tủ xếp ngang: TRÁI = xám, GIỮA = đen, PHẢI = đỏ. Áp cho MỌI dãy 3 tủ NEXT.
- Render dùng index `skus[]`: 0=Xám, 1=Đen, 2=Đỏ. Icon màu Xám = `#474A51` (RAL 7024 Graphite Grey).
- Khi gán màu cho mã SKU: verify thứ tự mã ↔ vị trí (toạ độ x) trước. KHÔNG suy màu từ catalog, KHÔNG đoán nếu không đọc được dãy.
- Gộp biến thể: cùng (pieces + dimensions) khác màu -> 1 mục trong selector, nhưng giữ ĐỦ `skus[]` trong data (không mất mã màu nào).

## LAYOUT TRANG CHI TIẾT (product.html?id=next-xx)
- Cột trái (trên→dưới): 1) Ảnh hero (tủ đơn nền trắng) 2) Ảnh dimension (bản vẽ kỹ thuật) 3) Ảnh banner (nghệ thuật/cận cảnh). Ảnh trần, không border/khung (bo góc ≤ 8px nếu cần).
- Cột phải: subtitle "Tủ đồ nghề chính hãng dòng Sonic NEXT" (16px, xám, KHÔNG nhỏ hơn) → tên model (lớn, đậm) → bảng spec tiếng Việt → selector cấu hình (số chi tiết) → mã SKU theo màu → grid khay foam (nếu có) → CTA (Yêu cầu báo giá + Chat Zalo).

## PIPELINE ẢNH (dòng NEXT)
- Nguồn: PDF catalog trên branch catalog-temp, đọc bằng `git show origin/catalog-temp:<đường-dẫn-PDF>` — KHÔNG checkout, KHÔNG merge. [Đường dẫn PDF: `assets/Sonic Catalogue 2026.pdf`]
- Mỗi model: trang ĐẦU giới thiệu model = tủ trống (nguồn ảnh hero + banner). Trang(các trang) SAU = trang cấu hình, chứa lưới khay foam.
- KHÔNG ghi số trang cứng — tự tìm trang mỗi lần (số trang giữa các tài liệu cũ không đáng tin).
- Hero: crop tủ đơn nền trắng → `assets/products/next/<model>-hero.png`
- Banner: crop ảnh nghệ thuật/cận cảnh trang đầu → `assets/products/next-banners/<model>-banner.png`
- Dimension: crop bản vẽ kỹ thuật → `assets/products/next-dims/<model>-dim.png`. PADDING TRÁI đủ rộng để mũi tên + số đo không bị cụt (lỗi đã gặp ở S9).
- Khay foam: crop từ trang cấu hình (lưới ô, nhãn mã ĐỎ góc trên-trái mỗi ô) → `assets/products/next-trays/<ma_khay>.png`. Mã đã có → DÙNG LẠI, không crop lại. Nhãn không đọc rõ → WARNING, KHÔNG đoán mã.

## CẤU TRÚC data/next-trays.js
- Khoá: `NEXT_TRAYS[<id>][<pieces dạng chuỗi>]` → `{ config_source_page, trays: [...] }`.
- Mỗi khay: `{ drawer, sku, name, pieces, image, image_source, confidence, retail_page }`.
- Cấu hình nhiều khay/ngăn: thêm field `module` (1/2/3) để phân biệt các khay cùng `drawer`.
- `name`/`pieces`: chỉ điền nếu khay có trang BÁN LẺ riêng trong catalog; không có → `null` (KHÔNG bịa).
- KHÔNG bao giờ ghi data khay vào `products_next_verified.json`.

## CÁCH LÀM VIỆC
- Data trước, UI sau — KHÔNG hardcode spec trong HTML/JS.
- Trước khi sửa dữ liệu sản phẩm: đối chiếu file verified hoặc catalog-temp trước.
- Pilot 1 slice → retest → mới nhân rộng.
- Việc lớn (đổi data/cấu trúc): in bảng/log rồi DỪNG chờ duyệt, chưa commit.
- Claude Code tự khai nguồn (trang catalog nào) — chủ dự án verify độc lập.
- Test jsdom chỉ chứng minh JS chạy — KHÔNG chứng minh dữ liệu đúng.

## GIT
- Branch website: `claude/epic-knuth-rtyfc5`. Branch dữ liệu (chỉ đọc): `catalog-temp`.
- Workflow: `git add .` → `git commit -m "..."` → `git push` (chỉ sau khi chủ dự án duyệt).
- Commit cập nhật CLAUDE.md TÁCH RIÊNG khỏi commit feature.

## HOMEPAGE (index.html) — HOÀN CHỈNH (Chat 8)

### Kiến trúc section (từ trên xuống)
1. Utility bar (top bar): Hotline · Địa chỉ · Giờ làm việc (thẳng hàng, no wrap) · "Sonic Equipment **Vietnam**" (Vietnam = đỏ #E2231A)
2. Header: wordmark logo PNG (`assets/img/logo-sonic.png`) + nav 4 mục + 3 icon inline SVG bên phải (Search → products.html; Facebook → facebook.com/Sonictoolsvietnam/ _blank; Instagram → instagram.com/sonic.equipment/ _blank). KHÔNG có nút "Xem sản phẩm" hay "Yêu cầu báo giá" ở header.
3. Hero: ảnh tối full-bleed (`assets/img/home/hero.jpg`) + 2 dòng chữ IN HOA đậm nghiêng góc dưới-trái + nút pill đỏ viền trắng "Khám phá hệ MSS+" → mss-plus.html (trang landing MSS+; mss-product.html là trang chi tiết cần ?id)
4. USP band: 3 cột (Hàng chính hãng 100% · Bảo hành chính hãng 10 năm · Giao hàng toàn quốc)
5. Showcase A (trái): ảnh NEXT paddock → products.html
6. Showcase B (phải): ảnh SFS → eva-foam.html
7. Showcase C (full-width): ảnh MSS → next-mss.html
8. Gallery "Team Sonic": 9 ảnh masonry (team-01..09.jpg), giữ tỉ lệ gốc (ảnh người, không crop mặt)
9. Về chúng tôi + box báo giá (có thêm dòng Zalo 0843 55 55 66)
10. CTA đỏ cuối trang
11. Footer: "Sonic Equipment Vietnam" (chữ đậm) + "Thương hiệu dụng cụ chuyên nghiệp từ Hà Lan." (tagline xám) + cột Sản phẩm/Công ty/Liên hệ (có thêm Zalo 0843 55 55 66)

### Ảnh homepage (nguồn local, KHÔNG từ PDF catalog)
Tất cả ảnh homepage nằm trong `assets/img/home/`:
- `hero.jpg` — ảnh cảnh MSS+ showroom tối
- `showcase-next.jpg` — ảnh NEXT paddock/racing
- `showcase-sfs.jpg` — ảnh S9 lifestyle
- `showcase-mss.jpg` — ảnh MSS dãy tủ xưởng
- `team/team-01..09.jpg` — gallery Team Sonic (9 ảnh)

### Nút nổi (floating buttons)
ĐÃ XÓA hoàn toàn 2 nút nổi Zalo (xanh) và 0888 23 23 66 (đỏ) khỏi MỌI TRANG.

---

## DESIGN SYSTEM (ngôn ngữ thị giác — áp từ Chat 8)

### Font
- **Heading homepage**: Be Vietnam Pro Black/ExtraBold italic, IN HOA. Self-hosted: `assets/fonts/` (woff2). Scope qua class riêng (`.hp-display`, không đổi h1/h2 global để không phá products.html / eva-foam.html).
- **Body toàn site**: font hiện tại giữ nguyên.

### Màu
- Đỏ chính: `#E2231A`
- Đen text: `#1C1C1C`
- Trắng nền header: `#FFFFFF`

### Nút pill đỏ
- Hover: CHỈ đổi màu nền (đỏ đậm hơn). TUYỆT ĐỐI KHÔNG transform/translate/scale ở :hover/:active/:focus.
- Viền trắng: chỉ áp cho nút đè lên hero (không phải mọi nút đỏ).

### Ảnh landing/showcase/hero
- `object-fit: cover` CHỈ được dùng khi: container có chiều cao CỐ ĐỊNH + ảnh đã xác nhận là CẢNH/lifestyle (không phải sản phẩm nền trắng).
- Ảnh SẢN PHẨM NỀN TRẮNG (tủ đơn, foam...): TUYỆT ĐỐI KHÔNG cover — dùng `contain` hoặc auto height.
- Gate bắt buộc: trước khi crop/layout ảnh mới, xác nhận loại ảnh (cảnh vs sản phẩm) + kiểm tra chữ Anh nung.

### Icon header (inline SVG)
3 icon đơn sắc đen, hover → đỏ #E2231A, kích thước nhỏ gọn. Copy từ index.html khi đồng bộ trang khác.

---

## PHÂN CÔNG AGENT (cập nhật từ Chat 8)

| Agent | Sở hữu |
|---|---|
| Claude Code | index.html, products.html, product.html, eva-foam.html, contact.html |
| Codex | mss-product.html, next-mss.html |

**Quy tắc cứng**: Claude Code CHỈ ĐỌC 2 file Codex (để lấy URL/selector khi cần đồng bộ header/footer). TUYỆT ĐỐI KHÔNG sửa nội dung sản phẩm MSS trong 2 file đó.
Khi làm việc trên phần dùng chung (header/footer/top bar): TẠM DỪNG Codex để tránh conflict.

---

## CẤU TRÚC FILE (bổ sung sau Chat 8)

```
assets/
├── img/
│   ├── logo-sonic.png          ← wordmark PNG nền trong suốt
│   └── home/
│       ├── hero.jpg
│       ├── showcase-next.jpg
│       ├── showcase-sfs.jpg
│       ├── showcase-mss.jpg
│       └── team/
│           └── team-01..09.jpg
└── fonts/
    └── (woff2 Be Vietnam Pro Black/ExtraBold + italic)
```

---

## TRẠNG THÁI MODULE (cập nhật Chat 8)

| Module | File | Trạng thái |
|---|---|---|
| Trang chủ | index.html | ✅ HOÀN CHỈNH |
| Tủ NEXT S7–S15 | products.html + product.html | ✅ HOÀN CHỈNH |
| EVA Foam | eva-foam.html | ✅ HOÀN CHỈNH |
| Navigation dropdown | tất cả trang | ✅ HOÀN CHỈNH |
| Header đồng bộ | tất cả trang | ✅ HOÀN CHỈNH |
| MSS+ | mss-product.html | ✅ HOÀN CHỈNH (Codex) |
| NEXT MSS | next-mss.html | ✅ HOÀN CHỈNH (Codex) |
| Dụng cụ (Tools catalog) | tools.html (tên file tạm) | 🔄 Codex gần xong |

---

## KINH NGHIỆM BỔ SUNG (từ Chat 8 — Homepage)

### Tham chiếu thẩm mỹ
Học từ sonic-equipment.com: chữ IN HOA đậm nghiêng, ảnh tối full-bleed tràn viền, CTA pill đỏ duy nhất, tối giản — KHÔNG card bo tròn xám kiểu SaaS.

### Quy tắc viết prompt ảnh local (không từ PDF)
- Bọc mọi đường dẫn có dấu cách trong nháy kép khi thao tác shell.
- Gate BƯỚC 1: ls + dimension + phân loại cảnh/sản phẩm + kiểm tra chữ Anh nung → DỪNG chờ duyệt trước khi Pillow.
- Pillow: jpg quality 90; hero ~1920w; showcase ~1200–1600w; team gallery ~900–1200w.

### Quy tắc xóa section (thao tác phá hủy)
- Gate riêng: liệt kê TỪNG section trong vùng xóa + đánh [XÓA]/[GIỮ] → DỪNG chờ duyệt.
- KHÔNG xóa file ảnh sản phẩm (trang khác còn dùng).
- JS/CSS dùng chung → KHÔNG sửa file đó, BÁO lại.

### Quy tắc đồng bộ header toàn site
- Site file:// → header nhúng trực tiếp trong từng HTML, không fetch/include.
- Khi copy header: verify đường dẫn tương đối (href/src) đúng với vị trí file (root hay subdir).
- Nav active: set đúng class active cho từng trang (products → "Sản phẩm" đỏ, contact → "Liên hệ" đỏ...).
- Làm từng file 1 bước, có gate sau mỗi file.
