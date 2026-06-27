# Prompt Fix 4 thẻ size — Claude Code (VS Code extension)

⚙️ THIẾT LẬP: Model Claude Opus 4.8 — Effort High.

---

Repo Sonic-web, branch claude/epic-knuth-rtyfc5. Đọc CLAUDE.md trước khi làm.

Fix phần "4 thẻ size" trong eva-foam.html (section phía trên grid sản phẩm).
KHÔNG đụng: grid sản phẩm, data JS, nav, các file khác.

═══════════════════════════════════════════════════════
2 LỖI CẦN FIX
═══════════════════════════════════════════════════════

LỖI 1 — ẢNH ĐẠI DIỆN THẺ S VÀ XL BỊ SPLIT
Thẻ S và thẻ XL đang hiển thị ảnh 2 mảnh rời.
Thẻ M và L đã đúng — giữ nguyên, không đụng.

LỖI 2 — KHUNG ẢNH 4 THẺ SIZE NỀN XÁM
Cả 4 thẻ đang có nền xám nhạt trong khung ảnh.
Yêu cầu: đồng bộ với card sản phẩm bên dưới —
nền trắng #fff, chỉ giữ đường viền mảnh 1px #e5e5e5.

═══════════════════════════════════════════════════════
QUY TRÌNH
═══════════════════════════════════════════════════════

════ BƯỚC 1 — KIỂM TRA BRANCH ════

git branch --show-current
Phải là claude/epic-knuth-rtyfc5. Branch lạ → báo ngay, dừng hẳn.

════ BƯỚC 2 — XÁC ĐỊNH CẤU TRÚC HTML (DỪNG, chờ tôi duyệt) ════

2a. Tìm trong eva-foam.html: 4 thẻ size dùng class/element gì?
    In đoạn HTML của 1 thẻ (ví dụ thẻ S) để tôi thấy cấu trúc.

2b. Tìm trong file CSS hiện tại: selector nào đang style khung ảnh
    của 4 thẻ size này? In ra các rule liên quan.

2c. Xác định: ảnh đại diện 4 thẻ size đang lấy từ file nào?
    (tên file, đường dẫn, SKU nào được chọn làm đại diện mỗi size)

DỪNG. Báo tôi xem trước khi làm bất cứ thứ gì.

════ BƯỚC 3 — RECROP ẢNH THẺ S VÀ XL (sau khi tôi duyệt) ════

Pipeline bắt buộc:
  git show origin/catalog-temp:"assets/Sonic Catalogue 2026.pdf"
  TUYỆT ĐỐI KHÔNG checkout, KHÔNG merge catalog-temp.
  KHÔNG dùng screenshot, KHÔNG dùng ảnh web.

3a. Xác định SKU đại diện của thẻ S và thẻ XL (từ BƯỚC 2c).

3b. Tìm đúng ô của SKU đó trong catalog, render trang ở 300 DPI.
    In tọa độ đề xuất (x, y, w, h px). DỪNG, chờ tôi xác nhận.

3c. Crop theo tọa độ đã duyệt.
    Lưu đè lên file ảnh cũ, định dạng .jpg quality 90.
    Báo kích thước file output (px + KB).

════ BƯỚC 4 — FIX CSS KHUNG ẢNH 4 THẺ SIZE ════

Thêm/sửa vào file CSS hiện tại (KHÔNG tạo file mới):
Áp dụng đúng selector của khung ảnh 4 thẻ size (tìm được ở BƯỚC 2b):
- background: #fff
- border: 1px solid #e5e5e5
- overflow: hidden
- display: flex
- align-items: center
- justify-content: center

Ảnh bên trong:
- max-width: 90%
- max-height: 90%
- object-fit: contain

Mục tiêu: 4 thẻ size trông đồng bộ với card sản phẩm bên dưới.

════ BƯỚC 5 — KIỂM TRA ════

Mở eva-foam.html bằng file:// trong browser:
- Thẻ S và XL: ảnh liền, không bị split
- Cả 4 thẻ: khung trắng, viền mảnh, đồng đều
- Grid sản phẩm bên dưới: không bị ảnh hưởng

Báo kết quả. git diff --stat. CHƯA commit. DỪNG.

════ BƯỚC 6 — CHỜ LỆNH ════

Chỉ commit khi tôi nói "commit".
Chỉ push khi tôi nói "push".
