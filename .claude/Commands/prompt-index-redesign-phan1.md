# PROMPT — Tái thiết kế Trang chủ (index.html) · Phần 1: Header → Showcase C

> File này là prompt hoàn chỉnh để dán vào **một session Claude Code mới**.
> Phần ⚙️ THIẾT LẬP nằm NGOÀI khối prompt — chỉ để người dùng đọc, KHÔNG dán vào Claude Code.


---

## 📋 PROMPT (dán nguyên khối bên dưới vào Claude Code)

```
⚠️ SESSION MỚI — KHÔNG có context chat trước. Prompt này là nguồn chân lý DUY NHẤT.
Mọi quyết định về layout / nội dung / đường dẫn lấy từ chính prompt này + CLAUDE.md.
KHÔNG suy đoán, KHÔNG tự chế thêm element/nội dung ngoài những gì ghi ở đây.

Repo Sonic-web, branch claude/epic-knuth-rtyfc5. Đọc CLAUDE.md trước.
Chạy: git branch --show-current (xác nhận đúng branch) và git log --oneline -5.

═══════════════════════════════════════════════════════════════════
MỤC TIÊU
═══════════════════════════════════════════════════════════════════
Tái thiết kế PHẦN TRÊN của index.html theo ngôn ngữ thị giác của sonic-equipment.com:
chữ đậm/IN HOA/IN NGHIÊNG, nền tối, ảnh full-bleed tràn viền, CTA pill đỏ duy nhất,
showcase ảnh lớn — thay cho giao diện "template SaaS" hiện tại (card bo tròn xám, font mảnh).

Phạm vi lượt này: từ HEADER xuống hết SHOWCASE C.
KHÔNG đụng các khối bên dưới (Sản phẩm nổi bật, Về chúng tôi, CTA đỏ cuối, Footer).

LƯU Ý ĐƯỜNG DẪN: mọi path nguồn có dấu cách / ký tự đặc biệt (vd "Tủ đồ", "+", "…")
→ LUÔN bọc trong dấu nháy kép khi thao tác shell/Pillow.

═══════════════════════════════════════════════════════════════════
NGUỒN DỮ LIỆU (ảnh local — KHÔNG cào web, KHÔNG lấy từ PDF catalog)
═══════════════════════════════════════════════════════════════════
1. Logo:        "/Users/lucatxtruong/Desktop/Business/2. Tủ đồ/Sonic logo.png"
2. Hero (tối):  thư mục "/Users/lucatxtruong/Desktop/Business/2. Tủ đồ/2026-01 January/20260115_MSS+_HBEST/"
                → đường dẫn người dùng đưa kết thúc bằng "Hero." (CHƯA đủ tên file).
                → ls -la cả thư mục để xác định đúng file hero. Nếu có nhiều ứng viên → liệt kê, để tôi chọn.
3. Showcase A:  "/Users/lucatxtruong/Desktop/Business/2. Tủ đồ/2026-03 March/WTR paddock/Small/S9.jpg"
4. Showcase B:  "/Users/lucatxtruong/Desktop/Business/2. Tủ đồ/2026-01 January/20260108_S9/Frame 2.png"
5. Showcase C:  "/Users/lucatxtruong/Desktop/Business/2. Tủ đồ/2026-01 January/20260115_MSS+_HBEST/mss.png"
6. Icon USP:    tự nhúng inline SVG (kiểu Lucide, nét stroke, màu đỏ #E2231A) — KHÔNG cần file ngoài.

═══════════════════════════════════════════════════════════════════
LAYOUT & NỘI DUNG (copy đề xuất — GIỮ NGUYÊN, KHÔNG tự chế thêm)
═══════════════════════════════════════════════════════════════════
Thứ tự từ trên xuống: HEADER → HERO → USP → SHOWCASE A|B → SHOWCASE C.

[HEADER]
  - Thay logo "S đỏ trong ô vuông" hiện tại bằng logo wordmark "sonic" thật (file #1).
  - Nav lên cân chữ (bold grotesque đen, đậm hơn hiện tại). Giữ nguyên 4 mục
    (Trang chủ | Sản phẩm ▾ | Về chúng tôi | Liên hệ) + 2 nút phải (Xem sản phẩm / Yêu cầu báo giá).
  - Giữ top utility bar (hotline / địa chỉ / giờ / "đại lý chính hãng") như hiện tại.

[HERO]  (thay hoàn toàn hero cũ)
  - Ảnh nền tối FULL-BLEED (file #2).
  - Tiêu đề IN HOA, đậm, IN NGHIÊNG (font mới), 2 dòng:
        "SẮP XẾP THÔNG MINH —"
        "LÀM VIỆC HIỆU QUẢ."
  - Subline (chữ thường):
        "Tủ đồ nghề & hệ thống lưu trữ Sonic chính hãng cho xưởng chuyên nghiệp."
  - 1 nút pill đỏ DUY NHẤT: "Xem dòng tủ NEXT ›"  → link products.html
  - BỎ kiểu split chữ-trái / SVG-phải cũ. BỎ dải stats "S7–S15 / SFS / 100%". BỎ SVG placeholder tủ.

[USP]  (3 cột — gộp thành dải trust DUY NHẤT)
  Mỗi cột: 1 inline SVG icon đỏ + tiêu đề đỏ + 1 dòng phụ (chữ thường):
    • icon shield-check — "Hàng chính hãng 100%" / "Nhập khẩu trực tiếp, đầy đủ chứng từ (CO/CQ)."
    • icon badge-check  — "Bảo hành chính hãng"  / "Chế độ bảo hành & hỗ trợ kỹ thuật tận nơi."
    • icon truck        — "Giao hàng toàn quốc"  / "Vận chuyển an toàn đến tận xưởng trên cả nước."

[SHOWCASE A | B]  (2 cột cạnh nhau, ảnh full-bleed + overlay chữ + CTA)
  A (file #3):
    eyebrow "DÒNG TỦ NEXT" / title "Tủ đồ nghề trên bánh xe"
    / sub "Giải pháp di động cho xưởng của bạn." / CTA "Khám phá NEXT ›" → products.html
  B (file #4):
    eyebrow "SONIC FOAM SYSTEM" / title "Khay mút định hình SFS"
    / sub "Làm việc hiệu quả, bộ dụng cụ luôn đầy đủ." / CTA "Khám phá SFS ›" → eva-foam.html

[SHOWCASE C]  (1 khối ngang full-bleed, ảnh + overlay + CTA)
  (file #5):
    eyebrow "STORAGE · MSS" / title "Giải pháp lưu trữ xưởng"
    / sub "Kiến tạo không gian làm việc hoàn hảo." / CTA "Khám phá ›" → mss-product.html

═══════════════════════════════════════════════════════════════════
RÀNG BUỘC KỸ THUẬT
═══════════════════════════════════════════════════════════════════
- Site chạy file:// — KHÔNG fetch / XHR / import động. Lượt này chỉ ảnh + CSS + HTML.
- KHÔNG tạo file CSS mới — thêm style vào file CSS hiện tại mà index.html đang dùng.
- VERIFY SELECTOR TRƯỚC KHI SỬA: đọc HTML + CSS thật của header & hero hiện tại, BÁO đúng
  class/selector đang dùng, RỒI mới sửa. KHÔNG assume tên class.

- ĐỊNH DẠNG ẢNH:
    • Hero + 3 showcase → xuất .jpg quality 90.
    • Logo → giữ PNG nền trong suốt (ưu tiên .svg nếu nguồn là vector).

- NGOẠI LỆ object-fit (QUAN TRỌNG — đọc kỹ):
    • Ảnh nền HERO + 3 SHOWCASE là ảnh CẢNH / lifestyle full-bleed
      → ĐƯỢC dùng object-fit: cover + overflow:hidden CHỈ trên container có chiều cao cố định.
    • NHƯNG chỉ áp 'cover' SAU KHI Bước 1 xác nhận ảnh đó là CẢNH.
    • Nếu một ảnh thực chất là SẢN PHẨM TRÊN NỀN TRẮNG (vd S9.jpg có thể là tủ trên nền trắng)
      → 'cover' sẽ CẮT MẤT sản phẩm. Trường hợp đó: BÁO LẠI ở Bước 1, KHÔNG tự cover;
      chờ tôi quyết (đổi sang nền có chủ đích / dùng contain / chọn ảnh khác).

- TƯƠNG PHẢN CHỮ: chữ trắng overlay trên ảnh → thêm lớp gradient/overlay tối nhẹ phía sau
  để đảm bảo đọc rõ ở mọi vùng ảnh.

- CTA pill đỏ #E2231A: hover CHỈ đổi màu (đỏ đậm hơn).
  CẤM transform / translate / scale khi :hover, :active, :focus (nút phải đứng yên tuyệt đối).
  Tái dùng class nút chuẩn của site nếu đã có.

- TYPOGRAPHY heading:
    • Font: Be Vietnam Pro (hỗ trợ ĐẦY ĐỦ dấu tiếng Việt — KHÔNG dùng Anton/Bebas vì vỡ dấu).
    • Weight: ExtraBold/Black (800/900), italic, IN HOA cho tiêu đề hero + showcase.
    • SELF-HOST: tải các weight cần (800/900 + bản italic) dạng .woff2 vào assets/fonts/,
      khai báo @font-face, kèm fallback hệ thống.
    • SCOPE: chỉ áp qua class RIÊNG cho các section homepage lượt này.
      TUYỆT ĐỐI KHÔNG đổi h1/h2 global (tránh ảnh hưởng products.html / eva-foam.html đã hoàn chỉnh).
    • Nếu KHÔNG tải được .woff2 (mạng chặn) → DỪNG, báo lại, KHÔNG tự thay font khác.

- LOGO trên nền tối: kiểm tra màu chữ logo. Nếu chữ đen → GHI CHÚ lại rằng footer (nền tối)
  sẽ cần một bản logo trắng. KHÔNG build footer lượt này — chỉ ghi chú để xử lý sau.

═══════════════════════════════════════════════════════════════════
FILE TẠO / SỬA / KHÔNG ĐỤNG
═══════════════════════════════════════════════════════════════════
SỬA:
  - index.html (CHỈ từ header → hết Showcase C).
  - File CSS hiện tại mà index.html đang dùng (thêm style, không tạo file mới).
TẠO:
  - assets/img/logo-sonic.png   (+ ghi chú bản trắng nếu cần cho footer)
  - assets/img/home/hero.jpg
  - assets/img/home/showcase-next.jpg
  - assets/img/home/showcase-sfs.jpg
  - assets/img/home/showcase-mss.jpg
  - assets/fonts/   (woff2 Be Vietnam Pro)
  (Tên/đường dẫn đích có thể đề xuất lại ở Bước 1 nếu repo có quy ước khác.)
KHÔNG ĐỤNG:
  - products.html, product.html, eva-foam.html, mss-product.html, next-mss.html, contact.html
  - mọi file trong data/
  - ảnh trong assets/products/next*, assets/products/eva-foam/
  - mọi khối index.html NẰM DƯỚI Showcase C
  - mọi CSS global đang dùng chung với các trang khác

═══════════════════════════════════════════════════════════════════
QUY TRÌNH GATE  (mỗi bước build xong: git diff --stat + mô tả ngắn → DỪNG chờ tôi nói "tiếp tục")
═══════════════════════════════════════════════════════════════════
BƯỚC 0 — Xác nhận branch, đọc CLAUDE.md, git log --oneline -5.

BƯỚC 1 — GATE KIỂM TRA ẢNH NGUỒN  (DỪNG sau bước này, CHỜ tôi duyệt — KHÔNG tự đi tiếp):
   • ls -la từng đường dẫn nguồn; riêng Hero ls cả thư mục để tìm đúng file.
   • Mở từng ảnh, in: dimension (px), tỉ lệ khung, dung lượng, định dạng.
   • Phân loại từng ảnh: CẢNH/lifestyle  HAY  SẢN PHẨM-TRÊN-NỀN-TRẮNG?
   • Kiểm tra từng ảnh: có chữ tiếng Anh nung sẵn / watermark / logo dính trong ảnh không?
   • Logo: nền có trong suốt không? màu chữ? có hợp đặt trên header nền trắng không?
     có cần bản trắng cho footer không?
   • Với mỗi ảnh, ĐỀ XUẤT: tên file đích + format + chiến lược fit (cover/contain) + có cần crop.
   • IN BẢNG tổng hợp tất cả. DỪNG.

BƯỚC 2 — (sau khi tôi duyệt Bước 1) Xử lý ảnh bằng Pillow:
   • copy vào repo, xuất .jpg q90, resize hợp lý (hero ~1920w; showcase ~1200–1600w).
   • KHÔNG crop nặng trừ khi đã được duyệt cụ thể ở Bước 1.
   • git diff --stat, báo, DỪNG.

BƯỚC 3 — Font:
   • tải .woff2 Be Vietnam Pro (800/900 + italic) → assets/fonts/, khai báo @font-face,
     tạo class scope riêng cho homepage. Không tải được → DỪNG báo.
   • git diff --stat, báo, DỪNG.

BƯỚC 4 — HEADER:
   • verify selector → BÁO class/selector thật → thay logo wordmark + tăng cân chữ nav. DỪNG.

BƯỚC 5 — HERO:
   • ảnh tối full-bleed + tiêu đề IN HOA đậm nghiêng + subline + 1 CTA pill đỏ. DỪNG.

BƯỚC 6 — USP band:
   • 3 cột, inline SVG icon đỏ, copy đúng như mục LAYOUT. DỪNG.

BƯỚC 7 — SHOWCASE:
   • A|B (2 cột) + C (full ngang): ảnh full-bleed + overlay (eyebrow/title/sub) + CTA, link đúng. DỪNG.

Token gần hết → dừng ở bước an toàn gần nhất, báo rõ đã làm tới đâu để mở session mới tiếp.

═══════════════════════════════════════════════════════════════════
Chỉ commit khi tôi nói "commit". Chỉ push khi tôi nói "push".
═══════════════════════════════════════════════════════════════════
```

---

## 🔎 GHI CHÚ CHO NGƯỜI DÙNG (Lucatx — không dán vào Claude Code)

- **Soát kỹ nhất ở BƯỚC 1**, đặc biệt cột *"cảnh hay sản phẩm-nền-trắng"* và *"có chữ Anh nung không"*.
  Đây là chỗ session mới dễ sai (không có trí nhớ về lỗi ảnh S9 dính chữ "RED" trước đây).
- Nghi ngờ **Showcase A** (`S9.jpg` từ thư mục "WTR paddock/Small") — có thể là ảnh tủ trên nền
  trắng/paddock chứ không phải cảnh tối. Nếu Bước 1 báo vậy → cân nhắc đổi ảnh hoặc đổi cách bố trí
  (không cover full-bleed).
- Sau **Bước 1**, paste bảng kết quả về chat để soát cùng trước khi cho qua Bước 2.
- Hai showcase B (`Frame 2.png`) và C (`mss.png`) là PNG → Bước 2 sẽ chuyển sang .jpg q90.
