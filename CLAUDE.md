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

## CÁCH LÀM VIỆC
- Trước khi sửa dữ liệu sản phẩm: đối chiếu với file verified hoặc catalog-temp trước.
- Việc lớn (đổi data, đổi cấu trúc): in bảng/log rồi DỪNG chờ tôi duyệt, chưa commit vội.
- Test jsdom chỉ chứng minh JS chạy — KHÔNG chứng minh dữ liệu đúng. Đừng dựa vào nó
  để kết luận "data chuẩn".

## GIT
- Branch website: claude/epic-knuth-rtyfc5
- Workflow: git add . -> git commit -m "..." -> git push (chỉ sau khi tôi duyệt)
