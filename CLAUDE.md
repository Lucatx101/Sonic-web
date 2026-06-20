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
