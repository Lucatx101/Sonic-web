# PROMPT — Trang chủ + đồng bộ toàn site · Phần 4: 7 điểm sửa



```
⚠️ Nếu là SESSION MỚI: KHÔNG có context chat trước. Prompt này là nguồn chân lý DUY NHẤT.
KHÔNG suy đoán, KHÔNG tự thêm element/nội dung ngoài những gì ghi ở đây.

Repo Sonic-web, branch claude/epic-knuth-rtyfc5. Đọc CLAUDE.md trước.
git branch --show-current ; git log --oneline -8.
Đường dẫn/chuỗi có dấu cách → bọc nháy kép khi thao tác shell.

⚠️ ĐIỀU PHỐI: 2 file mss-product.html và next-mss.html do Codex sở hữu. Lượt này CÓ sửa chúng
NHƯNG CHỈ ở vùng dùng chung (top bar / footer / nút nổi) — TUYỆT ĐỐI KHÔNG đụng nội dung sản phẩm MSS.

═══════════════════════════════════════════════════════════════════
PHÂN LOẠI — 7 việc
═══════════════════════════════════════════════════════════════════
[MỌI TRANG]  Việc 1 (top bar) · Việc 4 (xóa nút nổi) · Việc 6-footer (thêm Zalo) · Việc 7 (footer logo→text)
[CHỈ INDEX]  Việc 2 (hero) · Việc 3 (USP) · Việc 5 (header +Instagram) · Việc 6-box (Zalo trong box báo giá)

DANH SÁCH FILE HTML (xác minh lại ở BƯỚC 0):
   index.html, products.html, product.html, contact.html, eva-foam.html,
   mss-product.html (Codex), next-mss.html (Codex)

═══════════════════════════════════════════════════════════════════
CHI TIẾT TỪNG VIỆC
═══════════════════════════════════════════════════════════════════
[VIỆC 1 — TOP BAR]  (MỌI TRANG)
- Căn hàng: cụm icon đồng hồ + "Thứ 2 – Thứ 7: 8:00 – 17:30" đang bị xuống dòng / lệch dưới icon
  → đưa text lên CÙNG DÒNG với icon đồng hồ, và thẳng hàng ngang với cụm Hotline + Địa chỉ.
  (align-items: center; tránh wrap — white-space: nowrap nếu cần). Verify CSS thật trước khi sửa.
- Đổi text bên phải: "Đại lý chính hãng Sonic Equipment" → "Sonic Equipment Vietnam".
  Chữ "Vietnam" màu đỏ #E2231A; phần "Sonic Equipment" giữ màu hiện tại.

[VIỆC 4 — XÓA NÚT NỔI]  (MỌI TRANG)
- Xóa HẲN 2 nút nổi góc phải: "Zalo" (xanh) và "0888 23 23 66" (đỏ).
- Xóa markup; nếu có JS/CSS RIÊNG cho chúng → gỡ trong phạm vi không ảnh hưởng chỗ khác.
  Nếu JS/CSS dùng chung → chỉ gỡ markup, BÁO lại nếu có rủi ro.

[VIỆC 6 — THÊM ZALO + SỐ 0843 55 55 66]
   (footer: MỌI TRANG · box "Bạn cần báo giá nhanh?": CHỈ INDEX)
- Số Zalo 0843 55 55 66 → link href="https://zalo.me/0843555566".
- Icon: inline SVG logo Zalo (đơn sắc, hợp tông các dòng liên hệ hiện có). KHÔNG tải file ngoài.
- FOOTER "Liên hệ" (mọi trang): thêm 1 dòng [icon Zalo] 0843 55 55 66 (link zalo.me),
  cùng nhóm với điện thoại/email/địa chỉ. GIỮ số 0888 23 23 66 hiện có (THÊM, không thay).
- BOX "Bạn cần báo giá nhanh?" (chỉ index): thêm dòng [icon Zalo] Zalo: 0843 55 55 66 (link zalo.me)
  ngay dưới/cạnh dòng "Hoặc gọi 0888 23 23 66...". GIỮ dòng gọi 0888 hiện có.

[VIỆC 7 — FOOTER: ĐỔI KHỐI LOGO THÀNH TEXT]  (MỌI TRANG)
- XÓA khối cột đầu footer: icon "S" đỏ + chữ "SONIC / VIỆT NAM" + đoạn
  "Đại lý phân phối chính thức dụng cụ và tủ đồ nghề Sonic Equipment tại Việt Nam."
- THAY bằng 2 dòng:
   • Dòng 1 (chữ đậm/khối — font heading Be Vietnam Pro Black, chữ trắng trên nền tối):
     "Sonic Equipment Vietnam"
   • Dòng 2 (tagline, chữ xám nhạt): "Thương hiệu dụng cụ chuyên nghiệp từ Hà Lan."
     (ĐỀ XUẤT — chờ tôi duyệt ở bước nếu muốn câu khác)

[VIỆC 2 — HERO]  (CHỈ INDEX)
- 2 dòng "SẮP XẾP THÔNG MINH / LÀM VIỆC HIỆU QUẢ": GIẢM THÊM 35–40% cỡ chữ so với hiện tại.
  Giữ neo ở góc dưới-trái.
- Nút "Khám phá hệ MSS+": GIỮ NGUYÊN cỡ chữ + font; chỉ THU NHỎ khung nút (giảm padding mọi phía)
  để oval ôm sát chữ hơn. Giữ viền trắng + link MSS+ + hover chỉ đổi màu (cấm transform).

[VIỆC 3 — USP]  (CHỈ INDEX)
- "Bảo hành chính hãng" → "Bảo hành chính hãng 10 năm". Giữ nguyên subline + icon.

[VIỆC 5 — HEADER: THÊM ICON INSTAGRAM]  (CHỈ INDEX)
- Thêm icon Instagram (inline SVG, cùng style Search/Facebook) đặt CẠNH icon Facebook.
- href → https://www.instagram.com/sonic.equipment/  (target="_blank", rel="noopener").
- Hover icon chỉ đổi màu (đen → đỏ #E2231A), không phóng to/xê dịch.

═══════════════════════════════════════════════════════════════════
RÀNG BUỘC KỸ THUẬT
═══════════════════════════════════════════════════════════════════
- Site chạy file:// — KHÔNG fetch/XHR/import động.
- KHÔNG tạo file CSS mới — sửa CSS hiện tại.
- VERIFY SELECTOR trước khi sửa từng vùng → BÁO class/selector thật → rồi mới sửa. KHÔNG assume.
- VÙNG SHARED (top bar / footer / nút nổi): giữ markup ĐỒNG NHẤT giữa các file.
  Nếu 1 file có cấu trúc khác (vd trang header cũ) → adapt cẩn thận + BÁO khác biệt.
- 2 FILE CODEX (mss-product.html, next-mss.html): CHỈ sửa vùng shared. KHÔNG đụng nội dung sản phẩm MSS.
- Icon (Instagram / Zalo): inline SVG đơn sắc, KHÔNG tải file ngoài.

═══════════════════════════════════════════════════════════════════
FILE TẠO / SỬA / KHÔNG ĐỤNG
═══════════════════════════════════════════════════════════════════
SỬA (mọi trang — việc 1,4,6-footer,7): index.html, products.html, product.html, contact.html,
     eva-foam.html, mss-product.html, next-mss.html  (2 file cuối: CHỈ vùng shared).
SỬA (chỉ index — việc 2,3,5,6-box): index.html.
SỬA CSS: file CSS hiện tại (thêm style, không tạo mới).
KHÔNG ĐỤNG: mọi file data/, ảnh assets/*, nội dung sản phẩm MSS trong 2 file Codex.

═══════════════════════════════════════════════════════════════════
QUY TRÌNH GATE (mỗi bước xong: git diff --stat + mô tả ngắn → DỪNG chờ "tiếp tục")
═══════════════════════════════════════════════════════════════════
BƯỚC 0 — branch, CLAUDE.md. Liệt kê tất cả file .html. grep định vị 3 khối shared
   (top bar / footer / nút nổi) trong TỪNG file → BÁO file nào có, cấu trúc ĐỒNG NHẤT hay KHÁC.
   Xác nhận phạm vi gồm 2 file Codex. DỪNG chờ tôi duyệt.

BƯỚC 1 — VIỆC 1 (top bar: căn hàng + đổi text) — MỌI TRANG. DỪNG.
BƯỚC 2 — VIỆC 4 (xóa 2 nút nổi) — MỌI TRANG. DỪNG.
BƯỚC 3 — VIỆC 7 (footer: logo → 2 dòng text) — MỌI TRANG. DỪNG.
BƯỚC 4 — VIỆC 6 (footer thêm Zalo: mọi trang ; box báo giá thêm Zalo: chỉ index). DỪNG.
BƯỚC 5 — VIỆC 2 (hero: giảm chữ 35–40% + thu nhỏ khung nút) — chỉ index. DỪNG.
BƯỚC 6 — VIỆC 3 (USP text) + VIỆC 5 (header +Instagram) — chỉ index. DỪNG.

Token gần hết → dừng ở bước an toàn, báo đã làm tới đâu.

═══════════════════════════════════════════════════════════════════
Chỉ commit khi tôi nói "commit". Chỉ push khi tôi nói "push".
═══════════════════════════════════════════════════════════════════
```

---

## 🔎 GHI CHÚ CHO NGƯỜI DÙNG (Lucatx)
- **TẠM DỪNG Codex** khi chạy prompt này (nó sửa mss-product.html & next-mss.html ở vùng shared) — tránh conflict.
- **Soát BƯỚC 0** (danh sách file + cấu trúc 3 khối shared đồng nhất hay khác) rồi mới cho chạy tiếp.
- Hai chỗ **đề xuất, duyệt ở bước**: tagline footer "Thương hiệu dụng cụ chuyên nghiệp từ Hà Lan" và cách
  hiển thị dòng "Sonic Equipment Vietnam" (chữ khối). Không ưng thì chỉnh tại chỗ.
- Hero giảm **35–40%** đúng yêu cầu; nút MSS+ chỉ giảm padding, giữ cỡ chữ.
- Đã giữ song song 2 số: 0888 23 23 66 (hotline cũ) + 0843 55 55 66 (Zalo mới).
