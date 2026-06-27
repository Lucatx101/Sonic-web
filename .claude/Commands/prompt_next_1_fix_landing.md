# Prompt 1-FIX — Tủ NEXT: sửa 3 khối landing phần trên (Claude Code)

⚙️ THIẾT LẬP: Model Claude Opus 4.8 — Effort High. Set trên UI trước khi chạy.
(Dòng ⚙️ này KHÔNG dán vào Claude Code. Dán từ dưới dòng kẻ trở xuống.)

---

Repo Sonic-web, branch claude/epic-knuth-rtyfc5. Đọc CLAUDE.md trước khi làm.

═══════════════════════════════════════════════════════
NHIỆM VỤ: Fix hiển thị 3 khối landing phần TRÊN của products.html
═══════════════════════════════════════════════════════

Đây là FIX CSS/HTML hiển thị. KHÔNG recrop ảnh.
Giữ nguyên 3 file ảnh trong assets/products/next-landing/
(next-landing-hero.jpg, next-landing-lifestyle.jpg, next-landing-s9red.jpg)
— TRỪ KHI recon ở BƯỚC 2 phát hiện file ảnh gốc đã thiếu nội dung, thì BÁO LẠI,
đừng tự ý recrop.

KHÔNG ĐỤNG: grid sản phẩm phần dưới, data JS, nav, eva-foam.*, product.html,
các module khác. Chỉ sửa 3 khối landing phần trên.

─────────────────────────────────────────
3 LỖI CẦN FIX
─────────────────────────────────────────

LỖI 1 — KHỐI 1 (HERO)
- XOÁ HẲN 3 dòng chữ tiếng Việt đang đặt chồng lên hero:
    • nhãn nhỏ "DÒNG TỦ ĐỒ NGHỀ CHUYÊN NGHIỆP"
    • tiêu đề "Sonic NEXT — Tủ đồ nghề cho xưởng chuyên nghiệp"
    • đoạn mô tả "Thiết kế chắc chắn, mặt bàn thép không gỉ..."
- GIỮ NGUYÊN ảnh hero. Ảnh gốc CÓ chữ Anh "SONIC NEXT TOOL BOXES" —
  KHÔNG cần che, để nguyên.
- Nút "Xem các mẫu tủ": đặt ĐÈ đúng vị trí nút "LEARN MORE" trong ảnh hero,
  phủ KÍN để che hẳn nút Learn more bên dưới.
- Nút phải dùng ĐÚNG style nút đỏ chuẩn của site (giống nút "Yêu cầu báo giá":
  cùng màu đỏ, cùng bo tròn, cùng padding, cùng font). Phải verify class nút
  chuẩn rồi tái dùng — KHÔNG tự chế style nút mới.
- Bấm nút vẫn cuộn xuống phần grid bên dưới.

LỖI 2 — KHỐI 2 (lifestyle, người + tủ)
Ảnh đang bị kéo giãn → méo. Sửa: giữ nguyên tỉ lệ chiều dài × chiều rộng gốc.

LỖI 3 — KHỐI 3 (S9 màu đỏ)
Ảnh đang bị kéo giãn (méo) VÀ bị cắt mất một phần mép TRÁI.
Sửa: giữ nguyên TOÀN BỘ ảnh (không cắt bất kỳ mép nào) + giữ đúng tỉ lệ gốc.

─────────────────────────────────────────
RÀNG BUỘC CỨNG CHO ẢNH LANDING — áp cho cả 3 khối
─────────────────────────────────────────
- Dùng thẻ <img> thật, KHÔNG dùng background-image cho ảnh sản phẩm landing.
- Giữ nguyên aspect-ratio gốc của ảnh. Cách an toàn: width 100% theo cột chứa,
  height: auto (để chiều cao tự co theo tỉ lệ).
- Nếu buộc dùng object-fit thì CHỈ object-fit: contain.
  CẤM object-fit: cover. CẤM object-fit: fill.
- CẤM set đồng thời cả width cố định VÀ height cố định lên ảnh (đó là nguyên
  nhân kéo méo).
- CẤM cắt ảnh: container chứa ảnh KHÔNG được overflow:hidden cắt mất mép ảnh.
- Cần khoảng trống để đặt chữ tiếng Việt (khối 2, 3) → bố trí layout 2 cột
  (grid/flex: một cột ảnh, một cột chữ), hoặc thu nhỏ ảnh.
  TUYỆT ĐỐI KHÔNG cắt hay giãn ảnh để lấy chỗ đặt chữ.

═══════════════════════════════════════════════════════
QUY TRÌNH GATE-BASED
═══════════════════════════════════════════════════════

════ BƯỚC 1 — KIỂM TRA BRANCH ════
git branch --show-current
Phải là claude/epic-knuth-rtyfc5. Branch lạ → báo ngay, dừng hẳn.

════ BƯỚC 2 — VERIFY (DỪNG, chờ tôi duyệt) ════
2a. In HTML + CSS hiện tại của cả 3 khối landing.
    Rõ selector đang dùng cho: khung/nền, thẻ ảnh, chữ, nút của từng khối.
2b. Nút đỏ chuẩn của site (vd "Yêu cầu báo giá") dùng class/style gì?
    In rule CSS để tái dùng cho nút "Xem các mẫu tủ".
2c. Mở next-landing-s9red.jpg: in dimension (w×h px) và xác nhận ảnh gốc trong
    FILE có đầy đủ không — mép trái bị thiếu sẵn trong file, hay chỉ do CSS cắt?
    (Nếu file thiếu thật → báo, đừng tự recrop.)
2d. Mở next-landing-hero.jpg: in dimension (w×h px) + toạ độ nút "LEARN MORE"
    trong ảnh (x, y, w, h px), quy ra % vị trí trong ảnh — để đặt nút
    "Xem các mẫu tủ" đè trùng lên, phủ kín nút Learn more.
DỪNG. Báo tôi xem trước khi sửa.

════ BƯỚC 3 — FIX (chỉ sau khi tôi duyệt BƯỚC 2) ════
- Khối 1: xoá 3 dòng chữ VN; đặt nút "Xem các mẫu tủ" đè vị trí Learn more
  (theo % ở 2d), dùng style nút đỏ chuẩn (ở 2b), phủ kín nút Learn more,
  bấm cuộn xuống grid.
- Khối 2 + 3: sửa CSS theo RÀNG BUỘC CỨNG (giữ tỉ lệ, không méo, không cắt).
Báo git diff --stat khi xong.

════ BƯỚC 4 — CHỜ LỆNH ════
Chỉ commit khi tôi nói "commit". Chỉ push khi tôi nói "push".
