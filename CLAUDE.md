# Sonic-web — Hướng dẫn cho Claude Code

## Dự án là gì
Website TĨNH dạng CATALOG TRƯNG BÀY cho đại lý chính hãng Sonic Equipment tại VN.
Khách B2B (gara, xưởng) xem sản phẩm rồi "Yêu cầu báo giá".
KHÔNG tồn kho, KHÔNG giá công khai, KHÔNG giỏ hàng, KHÔNG đặt hàng.

## LUẬT CỨNG (không được vi phạm)
- KHÔNG bịa dữ liệu. Mã SKU, số chi tiết, kích thước, specs PHẢI khớp catalog thật.
  Không chắc -> đánh verified:false, để trống. TUYỆT ĐỐI không điền số "nghe hợp lý".
- KHÔNG merge branch catalog-temp vào branch website/main (tránh phình repo:
  PDF 26MB + 2788 ảnh nằm ở đó).
- KHÔNG copy thông số của model/biến thể này sang cái khác.
- KHÔNG cào ảnh web, KHÔNG bịa ảnh cho biến thể không có ảnh riêng.
- KHÔNG để lộ giá / tồn kho / nút đặt hàng ở bất cứ đâu.

## NGUỒN DỮ LIỆU
- Data dòng NEXT đã verify: data/products_next_verified.json (bóc từ catalog, có _source_page).
- Catalog gốc + data đầy đủ nằm ở branch catalog-temp (đọc bằng:
  git show origin/catalog-temp:data/products.json — KHÔNG checkout, KHÔNG merge).
- File assets/js/products.js CŨ chứa dữ liệu BỊA — đang được thay thế, đừng tin.

## Màu tủ NEXT (ground-truth do chủ dự án cung cấp)
- Catalog KHÔNG in màu. Màu xác định theo VỊ TRÍ trong dãy 3 tủ xếp ngang:
  TRÁI = xám, GIỮA = đen, PHẢI = đỏ.
- Áp cho MỌI dãy 3 tủ NEXT.
- Khi gán màu cho mã SKU: phải verify thứ tự mã ↔ vị trí (toạ độ x) trước,
  KHÔNG suy màu từ catalog, KHÔNG đoán nếu không đọc được dãy.

## CÁCH LÀM VIỆC
- Trước khi sửa dữ liệu sản phẩm: đối chiếu với file verified hoặc catalog-temp trước.
- Việc lớn (đổi data, đổi cấu trúc): in bảng/log rồi DỪNG chờ tôi duyệt, chưa commit vội.
- Test jsdom chỉ chứng minh JS chạy — KHÔNG chứng minh dữ liệu đúng. Đừng dựa vào nó
  để kết luận "data chuẩn".

## PIPELINE ẢNH (dòng NEXT)
- Nguồn: `git show catalog-temp:assets/Sonic Catalogue 2026.pdf` — KHÔNG checkout, KHÔNG merge catalog-temp.
- Mỗi model: trang ĐẦU giới thiệu model = tủ trống (nguồn ảnh hero + banner). Trang SAU = trang cấu hình (nguồn ảnh khay foam).
- Hero: crop tủ đơn nền trắng → assets/products/next/<model>-hero.png
- Banner: crop ảnh nghệ thuật/cận cảnh trang đầu → assets/products/next-banners/<model>-banner.png
- Dimension: crop bản vẽ kỹ thuật → assets/products/next-dims/<model>-dim.png. Padding trái đủ rộng để mũi tên số đo không bị cụt (lỗi đã gặp ở S9).
- Khay foam: crop từ trang cấu hình (lưới ô, nhãn mã đỏ góc trên-trái) → assets/products/next-trays/<ma_khay>.png. Mã đã có → dùng lại, không crop lại.
- Data khay: data/next-trays.js — TÁCH RIÊNG khỏi products_next_verified.json. Cấu hình 1 khay/ngăn: {drawer, sku,...}. Nhiều khay/ngăn: thêm field "module" (1/2/3). name/pieces chỉ điền nếu có trang bán lẻ riêng, không có → null. Nhãn không rõ → WARNING, KHÔNG đoán.

## LAYOUT TRANG CHI TIẾT (product.html?id=next-xx)
Cột trái (từ trên xuống): 1) Ảnh hero (tủ đơn nền trắng) 2) Ảnh dimension (bản vẽ kỹ thuật) 3) Ảnh banner (nghệ thuật/cận cảnh).
Cột phải: subtitle "Tủ đồ nghề chính hãng dòng Sonic NEXT" (16px, xám) → tên model (lớn, đậm) → bảng spec tiếng Việt → selector cấu hình → mã SKU theo màu → grid khay foam → CTA (Yêu cầu báo giá + Chat Zalo).

## GIT
- Branch website: claude/epic-knuth-rtyfc5
- Workflow: git add . -> git commit -m "..." -> git push (chỉ sau khi tôi duyệt)
