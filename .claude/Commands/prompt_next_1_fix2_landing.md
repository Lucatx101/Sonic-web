# Prompt 1-FIX-2 — Tủ NEXT: nút hero + ảnh S9 đỏ + dịch đầy đủ text (Claude Code)


---

Repo Sonic-web, branch claude/epic-knuth-rtyfc5. Đọc CLAUDE.md trước khi làm.

═══════════════════════════════════════════════════════
NHIỆM VỤ: Fix tiếp 3 khối landing phần TRÊN của products.html
═══════════════════════════════════════════════════════

Phạm vi: CHỈ phần trên (3 khối landing). KHÔNG đụng grid sản phẩm phần dưới,
data JS, nav, eva-foam.*, product.html, module khác.

Có 4 việc: (1) nút hero, (2) recrop 1 ảnh, (3) text khối 2, (4) text khối 3.

─────────────────────────────────────────
VIỆC 1 — NÚT ĐỎ TRÊN HERO (khối 1)
─────────────────────────────────────────
Hiện tượng lỗi: nút đứng yên thì che được nút "LEARN MORE" trong ảnh, NHƯNG
khi rê chuột vào (hover) nút bị NHẢY khỏi vị trí → lộ nút "LEARN MORE" bên dưới.

Sửa:
- Nguyên nhân gần như chắc chắn: nút có transform/translate/scale hoặc đổi
  margin/vị trí khi :hover (hoặc :active/:focus). Tìm và BỎ HẾT.
- Quy tắc cứng: ở MỌI trạng thái (normal, :hover, :active, :focus) nút phải
  ĐỨNG YÊN TUYỆT ĐỐI — không transform, không translate, không scale, không
  đổi vị trí/margin/padding làm xê dịch nút. Hover CHỈ được đổi màu nền (vd
  đỏ đậm hơn). Nhờ vậy nút luôn phủ kín nút "LEARN MORE".
- Đổi chữ trong nút: "Xem các mẫu tủ" → "XEM MẪU TỦ" (IN HOA toàn bộ).
- Khung nút: làm GIỐNG nút đỏ tiếng Anh "LEARN MORE" trong ảnh hero gốc —
  nền đỏ, BO TRÒN dạng viên thuốc (pill), CÓ ĐƯỜNG VIỀN TRẮNG bao quanh.
- Bấm nút vẫn cuộn xuống phần grid.

─────────────────────────────────────────
VIỆC 2 — RECROP ẢNH TỦ S9 ĐỎ (khối 3)
─────────────────────────────────────────
Vì sao phải recrop: file next-landing-s9red.jpg hiện tại đã DÍNH chữ tiếng Anh
nung trong ảnh (đuôi chữ "...D" của "RED" lòi ra ở mép trái). Giữ nguyên thì
lòi chữ Anh; cắt đi thì mất mép → phải crop lại MỘT vùng SẠCH.

Nguồn: /Users/lucatxtruong/Downloads/ScreenShot next.png (screenshot local).
Crop bằng Python + Pillow.

Yêu cầu vùng crop:
- Lấy trọn tủ NEXT S9 màu ĐỎ + đủ bối cảnh xung quanh để ảnh cân đối.
- TRÁNH mọi chữ tiếng Anh và nút trong vùng đó (ví dụ "GET S9 RED",
  "NEXT S9 RED", "SHOP NOW"). Mở ảnh xem chính xác có chữ gì rồi tránh.
- Ghi đè file: assets/products/next-landing/next-landing-s9red.jpg (.jpg q90).
Sau recrop: hiển thị TRỌN ảnh (không cắt mép, không méo, giữ tỉ lệ gốc) —
theo đúng ràng buộc ảnh đã áp ở lần trước (<img>, height auto, cấm cover/fill,
cấm cắt). Khối 1 và khối 2 KHÔNG recrop, giữ nguyên ảnh.

─────────────────────────────────────────
VIỆC 3 — KHỐI 2 (ảnh người + tủ): bỏ badge, đổi tiêu đề, thay nội dung
─────────────────────────────────────────
- XOÁ badge khoanh tròn oval đỏ "SONIC NEXT" phía trên tiêu đề.
- Đổi tiêu đề thành: Dòng tủ đồ nghề Sonic NEXT
  Dùng ĐÚNG style chữ của tiêu đề hiện tại ("Sắp xếp gọn gàng, làm việc hiệu
  quả") — cùng font, cùng độ đậm, cùng cỡ, cùng màu. CHỈ thay nội dung chữ.
  KHÔNG nhúng font mới, KHÔNG tự chế kiểu chữ khác.
- XOÁ nội dung cũ ("Sắp xếp gọn gàng..." + đoạn mô tả foam cũ).
- Nội dung mới (3 đoạn, đặt nguyên văn, KHÔNG sửa):

  Dòng tủ đồ nghề Sonic NEXT là thế hệ tủ được làm mới hoàn toàn, đi kèm các
  bộ dụng cụ chất lượng cao, mang lại phong cách và hiệu quả cho kỹ thuật viên
  chuyên nghiệp trên toàn thế giới.

  Dải sản phẩm trải từ bản nhỏ gọn NEXT S7 đến bản đầy đủ nhất NEXT S15. Tận
  hưởng không gian lưu trữ tối đa, di chuyển êm ái và độ bền vượt trội nhờ bánh
  xe chịu tải nặng cùng ray trượt ngăn kéo dạng ống lồng tải cao.

  Dòng tủ NEXT được thiết kế tương thích hoàn hảo với Hệ khay Foam Sonic. Khám
  phá các cấu hình bán chạy được sắp đặt sẵn, với bộ dụng cụ đầy đủ nhất cho
  đúng nhu cầu của bạn.

─────────────────────────────────────────
VIỆC 4 — KHỐI 3 (tủ S9 đỏ): thay nội dung text
─────────────────────────────────────────
- Tiêu đề giữ: NEXT S9 — Phiên bản màu đỏ
- XOÁ mô tả ngắn cũ. Nội dung mới (2 đoạn, đặt nguyên văn, KHÔNG sửa):

  Một góc lưu trữ dụng cụ tốt không chỉ cần tiện dụng — nó còn phải đẹp. Vì vậy
  dòng tủ NEXT được mở rộng thêm hai tông màu nổi bật: đỏ mạnh mẽ và đen tinh
  tế. Dù bạn dựng xưởng từ đầu hay muốn đồng bộ tủ với nhận diện thương hiệu,
  những mẫu tủ này giúp bạn sắp xếp gọn gàng và đầy phong cách.

  Có sẵn trên các bản chọn lọc: NEXT S9 nhỏ gọn, NEXT S12 linh hoạt và
  NEXT S12XD bản sâu mở rộng (chỉ có màu đen). Vẫn hiệu năng hàng đầu, nay với
  lớp hoàn thiện tạo dấu ấn — dành cho người làm nghề trân trọng công việc và
  không gian của mình.

═══════════════════════════════════════════════════════
QUY TRÌNH GATE-BASED
═══════════════════════════════════════════════════════

════ BƯỚC 1 — KIỂM TRA BRANCH ════
git branch --show-current → phải là claude/epic-knuth-rtyfc5. Lạ → dừng, báo.

════ BƯỚC 2 — VERIFY (DỪNG, chờ tôi duyệt) ════
2a. In HTML + CSS hiện tại của nút đỏ hero. Chỉ rõ: ở :hover/:active/:focus
    nút đang có transform/translate/scale/đổi vị trí gì? (Đây là chỗ gây nhảy.)
2b. In style tiêu đề hiện tại "Sắp xếp gọn gàng, làm việc hiệu quả" của khối 2
    (class + font/weight/size/màu) để tái dùng cho tiêu đề mới.
2c. In HTML của badge tròn "SONIC NEXT" khối 2 (để xoá đúng phần tử).
2d. Mở next-landing-s9red.jpg: in dimension + xác nhận đang dính chữ Anh gì.
DỪNG. Báo tôi xem trước khi sửa.

════ BƯỚC 3 — GATE TỌA ĐỘ RECROP ẢNH S9 ĐỎ (DỪNG, chờ tôi duyệt) ════
Mở ScreenShot next.png, in dimension (w×h px).
In bảng đề xuất vùng crop tủ S9 đỏ:
  | tọa độ (x, y, w, h px) | nội dung thấy | có dính chữ Anh không |
DỪNG. Chờ tôi xác nhận. KHÔNG crop trước khi duyệt.

════ BƯỚC 4 — RECROP (sau khi duyệt BƯỚC 3) ════
Crop theo tọa độ đã duyệt → ghi đè next-landing-s9red.jpg (.jpg q90).
Báo dimension + KB.

════ BƯỚC 5 — FIX HTML/CSS (sau khi duyệt BƯỚC 2) ════
- VIỆC 1: nút hero (đứng yên mọi trạng thái, "XEM MẪU TỦ", viền trắng pill).
- VIỆC 3: khối 2 — xoá badge tròn, đổi tiêu đề, thay 3 đoạn nội dung.
- VIỆC 4: khối 3 — thay 2 đoạn nội dung.
- Đảm bảo ảnh S9 đỏ mới hiển thị trọn, không cắt/méo.
Báo git diff --stat.

════ BƯỚC 6 — CHỜ LỆNH ════
Chỉ commit khi tôi nói "commit". Chỉ push khi tôi nói "push".
