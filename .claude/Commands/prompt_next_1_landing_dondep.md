# Prompt 1 — Tủ NEXT: dựng landing + dọn dẹp (Claude Code, VS Code extension)


---

Repo Sonic-web, branch claude/epic-knuth-rtyfc5. Đọc CLAUDE.md trước khi làm.
Tham khảo eva-foam.html (đã push) để kế thừa pattern layout 2 phần + card sản phẩm.

═══════════════════════════════════════════════════════
NHIỆM VỤ: Tái cấu trúc products.html (trang "Tủ đồ nghề NEXT")
═══════════════════════════════════════════════════════

Biến products.html thành trang 2 phần như eva-foam.html:
- PHẦN TRÊN: landing quảng cáo dòng tủ NEXT — 3 khối, dựng từ screenshot local.
- PHẦN DƯỚI: grid sản phẩm CHỈ gồm tủ NEXT S7~S15.

PHẠM VI PROMPT NÀY = dựng layout + dọn dẹp.
KHÔNG xử lý việc đồng đều cỡ ảnh tủ trong grid — để prompt sau. Ở prompt này
ảnh tủ giữ nguyên cỡ hiện tại, chỉ sửa nền + viền khung.

─────────────────────────────────────────
NGUỒN ẢNH — 1 NGUỒN DUY NHẤT (screenshot local)
─────────────────────────────────────────
File: /Users/lucatxtruong/Downloads/ScreenShot next.png
(screenshot trang sonic-equipment.com phần NEXT toolboxes)

Crop bằng Python + Pillow.
Kiểm tra Pillow trước: python3 -c "from PIL import Image; print('OK')"
Nếu lỗi: pip3 install Pillow trước khi crop.

KHÔNG dùng PDF catalog trong prompt này. KHÔNG cào web.

3 khối cần crop. LƯU Ý: chữ trong ảnh gốc là TIẾNG ANH — KHÔNG lấy chữ,
chỉ lấy phần ẢNH. Chữ tiếng Việt tôi đã viết sẵn bên dưới, đặt bằng HTML.

KHỐI 1 → next-landing-hero.jpg
  Nội dung: 3 tủ NEXT đặt cạnh nhau (1 tủ ĐỎ ở giữa, 2 tủ đen hai bên),
  bối cảnh xưởng, có ô tô phía bên trái.
  Crop: ưu tiên vùng ẢNH 3 tủ. TRÁNH chữ "SONIC NEXT TOOLBOXES" và nút đỏ.
  Nếu không tránh hết được chữ → BÁO LẠI ở gate tọa độ, đừng tự quyết.

KHỐI 2 → next-landing-lifestyle.jpg
  Nội dung: ảnh lifestyle — người đứng thao tác cạnh tủ NEXT trong xưởng.

KHỐI 3 → next-landing-s9red.jpg
  Nội dung: tủ NEXT S9 màu ĐỎ, cận cảnh trong xưởng.
  TRÁNH chữ "GET S9 RED" / "SHOP NOW". Không tránh hết → báo lại.

Lưu cả 3 vào thư mục MỚI: assets/products/next-landing/
Định dạng .jpg quality 90.

─────────────────────────────────────────
CHỮ TIẾNG VIỆT — đặt bằng HTML, KHÔNG dịch lại, KHÔNG sửa
─────────────────────────────────────────

KHỐI 1 (hero, full-width):
  Nhãn nhỏ:  DÒNG TỦ ĐỒ NGHỀ CHUYÊN NGHIỆP
  Tiêu đề:   Sonic NEXT — Tủ đồ nghề cho xưởng chuyên nghiệp
  Mô tả:     Thiết kế chắc chắn, mặt bàn thép không gỉ, ngăn kéo trượt bi
             chịu tải nặng. Đầy đủ cấu hình từ S7 đến S15 cho mọi quy mô xưởng.
  Nút CTA:   Xem các mẫu tủ   (cuộn xuống phần grid bên dưới)

KHỐI 2 (ảnh + chữ cạnh nhau):
  Tiêu đề:   Sắp xếp gọn gàng, làm việc hiệu quả
  Mô tả:     Mỗi ngăn kéo tương thích hệ khay foam Sonic — dụng cụ luôn đúng
             vị trí, kiểm kê trong vài giây, hạn chế thất lạc và gián đoạn công việc.

KHỐI 3 (ảnh + chữ cạnh nhau):
  Tiêu đề:   NEXT S9 — Phiên bản màu đỏ
  Mô tả:     Cấu hình bán chạy nhất, cân bằng giữa kích thước và số lượng dụng cụ.
             Nổi bật với tông màu đỏ đặc trưng của Sonic.
  Nút CTA:   Yêu cầu báo giá

─────────────────────────────────────────
LAYOUT
─────────────────────────────────────────
PHẦN TRÊN:
- Khối 1: hero full-width, ảnh next-landing-hero.jpg làm nền, chữ VN đặt
  chồng lên. Thêm lớp phủ tối nhẹ (gradient đen mờ) để chữ trắng dễ đọc và
  làm chìm phần chữ Anh còn sót (nếu có). Nút "Xem các mẫu tủ" cuộn xuống grid.
- Khối 2, 3: layout ảnh + chữ cạnh nhau (ảnh một bên, chữ một bên), chữ VN
  nằm NGOÀI ảnh để không đụng chữ Anh trong ảnh gốc.
- Tông màu đỏ-đen nhất quán với eva-foam.html.

PHẦN DƯỚI (grid):
- Heading ngắn phía trên grid, ví dụ: "Các mẫu tủ NEXT".
- BỎ HẲN filter bar (dãy chip "Tất cả / Tủ đồ nghề / SFS / ...").
- Grid CHỈ gồm card tủ NEXT S7~S15.
- Card: nền TRẮNG #fff, giữ đường viền mảnh 1px (đồng bộ chuẩn đã dùng ở
  eva-foam — nền trắng + viền, KHÔNG nền xám).

─────────────────────────────────────────
RÀNG BUỘC KỸ THUẬT
─────────────────────────────────────────
- Site chạy file:// → data dạng JS const, KHÔNG fetch/XHR/import động.
- CSS: thêm/sửa trong file CSS hiện tại, KHÔNG tạo file CSS mới.
- Ảnh: .jpg quality 90. KHÔNG dùng PNG.

─────────────────────────────────────────
FILE
─────────────────────────────────────────
TẠO:
- assets/products/next-landing/next-landing-hero.jpg
- assets/products/next-landing/next-landing-lifestyle.jpg
- assets/products/next-landing/next-landing-s9red.jpg
SỬA:
- products.html (dựng phần trên, bỏ filter bar, lọc grid về NEXT-only)
- File CSS hiện tại (style landing + card nền trắng)
- File data sản phẩm của products.html (xoá hẳn entry không phải tủ NEXT)
KHÔNG ĐỤNG:
- eva-foam.html, data/eva-foam.js, assets/products/eva-foam/
- product.html (trang chi tiết), data/data-next.js, data/next-trays.js
- assets/products/next/, next-banners/, next-dims/, next-trays/
- mss-product.html, next-mss.html, các module khác
- Việc đồng đều cỡ ảnh tủ (để prompt sau)

═══════════════════════════════════════════════════════
QUY TRÌNH GATE-BASED
═══════════════════════════════════════════════════════

════ BƯỚC 1 — KIỂM TRA BRANCH ════
git branch --show-current
Phải là claude/epic-knuth-rtyfc5. Branch lạ → báo ngay, dừng hẳn.

════ BƯỚC 2 — RECON (DỪNG, chờ tôi duyệt) ════
2a. products.html: filter bar dùng HTML/JS/CSS gì? In selector + đoạn HTML
    + đoạn JS xử lý filter (nếu có).
2b. Card sản phẩm render từ đâu? Hardcode trong HTML hay data-driven từ
    file .js nào? In tên file data + cấu trúc 1 entry.
2c. Liệt kê TẤT CẢ sản phẩm products.html hiện có. Đánh dấu rõ: cái nào là
    tủ NEXT (GIỮ), cái nào không phải (XOÁ).
2d. Card hiện dùng class/selector gì cho nền + khung ảnh? In rule CSS liên quan.
2e. ls assets/products/next-landing/ (nếu chưa có thì sẽ tạo) và liệt kê
    nhanh next-banners/ để chắc không trùng tên file.
DỪNG. Báo tôi xem trước khi làm bất cứ gì.

════ BƯỚC 3 — GATE TỌA ĐỘ CROP (DỪNG, chờ tôi duyệt) ════
Mở /Users/lucatxtruong/Downloads/ScreenShot next.png.
In dimension ảnh gốc (width × height px).
In bảng đề xuất:
  | khối | tọa độ (x, y, w, h px) | nội dung nhìn thấy | có dính chữ Anh không |
DỪNG. Chờ tôi xác nhận tọa độ. TUYỆT ĐỐI KHÔNG crop trước khi tôi duyệt.

════ BƯỚC 4 — CROP (chỉ sau khi duyệt BƯỚC 3) ════
Crop 3 khối theo tọa độ đã duyệt → .jpg quality 90
→ assets/products/next-landing/
Báo kích thước output từng ảnh (px + KB).

════ BƯỚC 5 — DỰNG + DỌN (chỉ sau khi duyệt BƯỚC 2) ════
- Dựng phần trên: 3 khối landing với chữ VN ở trên.
- Bỏ filter bar.
- Xoá card + data không phải tủ NEXT.
- CSS card: nền trắng + viền mảnh.
Báo git diff --stat khi xong.

════ BƯỚC 6 — CHỜ LỆNH ════
Chỉ commit khi tôi nói "commit". Chỉ push khi tôi nói "push".
