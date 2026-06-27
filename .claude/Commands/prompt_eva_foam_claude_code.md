# Prompt cho Claude Code — Module "Hệ EVA Foam Sonic"

> Dán toàn bộ nội dung bên dưới vào Claude Code (VS Code extension).

---

Repo Sonic-web, branch claude/epic-knuth-rtyfc5. Đọc CLAUDE.md trước khi làm.
Tham khảo cấu trúc next-mss.html (Codex đã làm xong, đã push) để kế thừa pattern header/footer/layout.

═══════════════════════════════════════════════════════
NHIỆM VỤ: Xây module "Hệ EVA Foam Sonic" → trang eva-foam.html
═══════════════════════════════════════════════════════

Sonic Foam System (SFS) = bộ khay foam đựng dụng cụ. Đây là ACCESSORY,
KHÔNG phải toolbox → KHÔNG variants màu, KHÔNG dimension drawing.
Mỗi bộ gồm: mã SKU, tên VN, số món, kích thước (S/M/L/XL).

4 kích thước:
- S  190×370 mm   (trang catalog 68–71, ~59 bộ)
- M  570×370 mm   (trang 72–73, ~30 bộ)
- L  745×435 mm   (trang 74, ~18 bộ)
- XL 745×570 mm   (trang 75, ~15 bộ)
Tổng dự kiến ~122 bộ. ĐƯA HẾT lên, không lọc bỏ bộ nào.

─────────────────────────────────────────
NGUỒN DỮ LIỆU & ẢNH
─────────────────────────────────────────
- Catalog (CHỈ ĐỌC):
  git show origin/catalog-temp:"assets/Sonic Catalogue 2026.pdf"
  → TUYỆT ĐỐI KHÔNG checkout, KHÔNG merge catalog-temp.
- Trang SFS: 66–67 (intro + ảnh hero), 68–75 (sản phẩm).
- Mỗi SKU có ảnh riêng trên trang catalog → crop từng ảnh nét cao từ PDF.
- Ảnh tham khảo BỐ CỤC (chỉ để xem layout, KHÔNG crop sản phẩm từ đây
  vì là ảnh chụp web độ phân giải thấp):
  /Users/lucatxtruong/Downloads/screenshot EVA foam.png

─────────────────────────────────────────
LAYOUT TRANG (2 phần, mô phỏng trang SFS của sonic-equipment.com)
─────────────────────────────────────────

PHẦN TRÊN (above the fold + giới thiệu):

  1. HERO full-width ~75vh:
     - Ảnh foam-drawer đẹp nhất (crop trang 66–67) → overlay tối rgba(0,0,0,0.55)
     - Tiêu đề: "HỆ FOAM SONIC" (trắng, uppercase, in nghiêng đậm, font lớn)
     - Sub: "Hơn 200 bộ foam định vị dụng cụ — lấy nhanh, không tìm kiếm"

  2. Block "Hiệu suất NEXT-level" (ảnh trái, text phải):
     - Ảnh: crop cận cảnh foam + dụng cụ từ trang 66–67
     - Tiêu đề: "Hiệu suất NEXT-level"
     - Đoạn văn + bullet list (dùng nguyên câu VN bên dưới)

  3. Hàng 3 badge đỏ (#C0392B) — số liệu nghiên cứu (dùng câu VN bên dưới)

  4. Block "Tiết kiệm thời gian & chi phí" (text trái, ảnh phải):
     - Ảnh: crop ảnh tủ đang mở ngăn kéo foam từ trang 66–67
     - Tiêu đề + bullet list (dùng câu VN bên dưới)

  5. Hàng 4 thẻ size (S / M / L / XL), mỗi thẻ:
     - 1 ảnh đại diện = ảnh của 1 SKU tiêu biểu đã crop trong BƯỚC 3
       (chọn bộ nhiều món/ảnh rõ đẹp nhất của size đó, dùng LẠI ảnh đã
        crop, KHÔNG crop ảnh mới cho thẻ này — ghi rõ SKU nào được chọn)
     - Nhãn kích thước: "SFS Nhỏ (S) · 190×370 mm"
     - Click → cuộn xuống #products, filter tự động chọn size đó

PHẦN DƯỚI (id="products", scroll xuống để thấy):

  6. Filter bar sticky dưới header:
     [Tất cả]  [S — 190×370]  [M — 570×370]  [L — 745×435]  [XL — 745×570]
     Active tab: đỏ #C0392B, chữ trắng. Inactive: xám.

  7. Grid sản phẩm: 3 cột desktop / 2 cột tablet / 1 cột mobile.
     Mỗi card gồm:
     - Ảnh bộ foam (assets/products/eva-foam/<sku>.png)
     - Badge size góc trên phải: S / M / L / XL (đỏ #C0392B, chữ trắng)
     - Mã SKU: #xxxxxx (xám nhỏ)
     - Tên tiếng Việt (đậm)
     - Số lượng: "X món" (ẩn dòng này nếu pieces = null)
     - Nút "Yêu cầu báo giá" → href="contact.html"
     KHÔNG giá. KHÔNG tồn kho. KHÔNG nút đặt hàng.

─────────────────────────────────────────
CÂU CHỮ TIẾNG VIỆT (dùng NGUYÊN, không tự dịch lại)
─────────────────────────────────────────

Block 2 — "Hiệu suất NEXT-level":
  Đoạn văn:
  "Cùng với dòng tủ NEXT, Sonic đã nâng cấp toàn bộ dải khay foam đựng dụng cụ,
  mang lại hiệu suất vượt trội cho thợ chuyên nghiệp trên toàn thế giới. Mọi khay
  foam đều được rà soát, thiết kế lại và cập nhật với dụng cụ, công nghệ mới nhất.
  Tận hưởng bộ dụng cụ hoàn hảo — dễ lấy, đúng vị trí cần có."
  Bullets:
  • Tương thích với mọi tủ đồ nghề và giải pháp lưu trữ Sonic
  • Trang bị dụng cụ tay chất lượng cao
  • Có 4 kích thước: S, M, L, XL
  • Foam hai lớp (2 màu tương phản)
  • Kháng hầu hết dung dịch và hóa chất thông dụng
  • Mã sản phẩm khắc trực tiếp trên khay foam

Block 3 — 3 badge số liệu:
  • "+78% NHANH HƠN — Kiểm kê tủ dụng cụ — An tâm tuyệt đối"
  • "-80% GIẢM — Thất lạc dụng cụ — Rủi ro vs lợi ích"
  • "+20% NHANH HƠN — Lấy & cất dụng cụ — Thời gian là tiền bạc"

Block 4 — "Tiết kiệm thời gian & chi phí":
  Tiêu đề: "Tiết kiệm đáng kể thời gian và chi phí"
  Đoạn văn:
  "Nghiên cứu độc lập cho thấy làm việc với Hệ Foam Sonic mang lại khoản tiết kiệm
  đáng kể về cả thời gian lẫn chi phí."
  Bullets:
  • Lấy & cất dụng cụ nhanh hơn 20%
  • Kiểm kê trọn bộ dụng cụ nhanh hơn tới 78%
  • Tăng 80% khả năng giữ bộ dụng cụ luôn đầy đủ

Block 5 — nhãn 4 thẻ size:
  SFS Nhỏ (S)  ·  SFS Vừa (M)  ·  SFS Lớn (L)  ·  SFS Rất lớn (XL)

─────────────────────────────────────────
DỊCH TÊN SẢN PHẨM — GLOSSARY (đối chiếu khi điền name_vi)
─────────────────────────────────────────
Screwdriver set             → Bộ tua vít
Long screwdriver set        → Bộ tua vít dài
Screwdriver and TX set      → Bộ tua vít và Torx
Go through screwdriver set  → Bộ tua vít xuyên cán
Screwdriver set VDE         → Bộ tua vít cách điện VDE
Socket screwdriver          → Tua vít khẩu
Hex ball grip key set       → Bộ lục giác bi đầu cầu
Hex key wrench set          → Bộ lục giác chữ L
Key wrench set TX t-handle  → Bộ chữ T đầu Torx
Key wrench set TX adjustable T-handle → Bộ T-handle Torx điều chỉnh được
Flank socket set            → Bộ khẩu (tuýp) Flank
Bit socket set              → Bộ đầu bit gắn khẩu
Deep socket set             → Bộ khẩu sâu (tuýp dài)
Combination set             → Bộ tổng hợp
Wrench set                  → Bộ cờ lê
Hammer set                  → Bộ búa
Pliers set                  → Bộ kìm
Pliers and cutting set      → Bộ kìm và kìm cắt
Impact socket set           → Bộ khẩu chịu lực (khẩu súng)
Impact socket and torque wrench set → Bộ khẩu chịu lực và cờ lê lực
Pry removal master kit      → Bộ nạy tháo chuyên dụng
Aluminium oil filter cup wrench set → Bộ cốc tháo lọc dầu (nhôm)
Oil filter set              → Bộ tháo lọc dầu
Flare nut wrench set        → Bộ cờ lê đầu chuồng
Hinged socket wrench set    → Bộ cờ lê khẩu bản lề
Ratcheting wrench set       → Bộ cờ lê tự động (tay quay)
Reversible ratcheting wrench set → Bộ cờ lê tự động đảo chiều
Flexible ratcheting wrench set   → Bộ cờ lê tự động cần dẻo
Flat ring ratchet set       → Bộ cờ lê vòng tự động
75° Offset ring wrench set  → Bộ cờ lê vòng offset 75°
Double open wrench set      → Bộ cờ lê hai đầu hở
Snap ring pliers set        → Bộ kìm phe
Gripped chisel and punch set → Bộ đục và đột có tay cầm
File set                    → Bộ giũa
Hook set                    → Bộ móc
Foam spacer                 → Tấm đệm foam
Socket screwdriver and hex set → Bộ tua vít khẩu và lục giác
Chisel, hammer and pliers set → Bộ đục, búa và kìm
Chisel, hammer and impact set → Bộ đục, búa và khẩu chịu lực
Hammer and chisel set       → Bộ búa và đục
Socket set                  → Bộ khẩu
Screwdriver and bit socket set → Bộ tua vít và đầu bit khẩu
Combination set SFS-M/L/XL  → Bộ tổng hợp

Quy ước bắt buộc:
- "X-pcs." → "X món"
- Giữ nguyên: 1/4" · 3/8" · 1/2" · 3/4"
- Nhãn phụ giữ nguyên kèm chú thích trong ngoặc:
    SAE → (hệ SAE)   |   AVIATION → (dòng Aviation)   |   HEAVY DUTY → (hạng nặng)
- Tên nào không chắc → dịch tạm + đánh dấu (?) trong bảng BƯỚC 1. KHÔNG bịa.

─────────────────────────────────────────
RÀNG BUỘC KỸ THUẬT
─────────────────────────────────────────
- Site chạy file:// → KHÔNG fetch / XHR / import JSON động.
- Data export: data/eva-foam.js → const EVA_FOAM_DATA = [...]
- Cấu trúc mỗi entry:
  {
    sku:        "#600823",
    name_vi:    "Bộ tua vít SFS-S",
    name_en:    "Screwdriver set SFS-S",   // chỉ để đối chiếu, không render
    pieces:     8,                          // null nếu không có số món
    size:       "S",                        // "S" | "M" | "L" | "XL"
    dimensions: "190x370",
    image:      "assets/products/eva-foam/600823.png", // null nếu chưa crop
    verified:   true
  }
- Mã không đọc rõ → verified:false, image:null. KHÔNG đoán mã.
- Ảnh sản phẩm: assets/products/eva-foam/<sku-bỏ-dấu-#>.png (vd: 600823.png)
- Ảnh hero:     assets/products/eva-foam/eva-foam-hero.png
- Filter: JS thuần, data-size attribute trên mỗi card, toggle class "hidden".
- Click thẻ size ở phần trên → scrollIntoView('#products') + kích hoạt filter size đó.
- Header/nav: copy y hệt từ products.html (đã có dropdown 2 cấp đầy đủ).
- CSS: thêm vào file CSS hiện tại, KHÔNG tạo file CSS mới.
- #47613 Foam spacer SFS-S: đưa vào grid như sản phẩm bình thường,
  name_vi:"Tấm đệm foam SFS-S", pieces:null → card ẩn dòng số món.

─────────────────────────────────────────
FILE TẠO / SỬA
─────────────────────────────────────────
TẠO MỚI:
  eva-foam.html
  data/eva-foam.js
  assets/products/eva-foam/         ← thư mục ảnh

SỬA (tất cả file .html có header — dropdown nav):
  "Hệ EVA Foam Sonic": xóa style/class disabled, màu xám → thêm href="eva-foam.html"

KHÔNG ĐỤNG:
  products.html, product.html, data-next.js, next-trays.js,
  products_next_verified.json, mss-product.html, next-mss.html

═══════════════════════════════════════════════════════
QUY TRÌNH GATE-BASED — BẮT BUỘC
(mỗi BƯỚC có thể là 1 session riêng nếu cần reset token)
═══════════════════════════════════════════════════════

════ BƯỚC 1 — LẬP BẢNG (DỪNG, chờ tôi duyệt) ════

1a. Đọc catalog trang 66–75 qua git show. Lập bảng TẤT CẢ SKU:
    | size | sku | name_en | pieces | name_vi (đề xuất) | trang | nhãn phụ | (?) |
    In tổng count từng size + tổng cộng. So sánh với ~122.

1b. Xác nhận tên file CSS đang dùng cho nav/layout chính.

1c. Liệt kê tất cả file .html trong root cần sửa nav.

DỪNG. Đưa tôi xem bảng + danh sách file trước khi làm bất cứ thứ gì.

════ BƯỚC 2 — TẠO data/eva-foam.js (sau khi tôi duyệt bảng) ════

Điền đủ tất cả entry theo bảng đã duyệt. image: null tạm (chưa crop).
In 5 entry đầu + tổng count. DỪNG, chờ xác nhận.

════ BƯỚC 3 — CROP ẢNH (chạy TỪNG NHÓM SIZE, tránh hết token) ════

3a. Hero + ảnh block 2 + ảnh block 4 (trang 66–67):
    - eva-foam-hero.png    ← ảnh drawer foam đẹp nhất
    - eva-foam-intro.png   ← cận cảnh foam + dụng cụ (dùng cho block 2)
    - eva-foam-saving.png  ← ảnh tủ mở ngăn kéo (dùng cho block 4)
    Với 4 thẻ size: mỗi size chọn 1 SKU tiêu biểu (ảnh đẹp/bộ nhiều món),
    dùng LẠI ảnh sản phẩm đã crop của SKU đó → KHÔNG crop ảnh mới.
    Ghi rõ SKU nào được chọn đại diện mỗi size.
    DỪNG sau 3a, báo danh sách file + kích thước.

3b. Crop nhóm S (trang 68–71):
    Log rõ từng SKU: đã crop / bỏ qua (nhãn mờ → verified:false).
    DỪNG sau 3b, git diff --stat.

3c. Crop nhóm M (trang 72–73). DỪNG, git diff --stat.

3d. Crop nhóm L (trang 74). DỪNG, git diff --stat.

3e. Crop nhóm XL (trang 75). DỪNG, git diff --stat.

Sau mỗi nhóm: cập nhật trường image trong data/eva-foam.js cho nhóm vừa crop.
KHÔNG cào ảnh web. Nhãn không đọc rõ → WARNING, KHÔNG đoán.

════ BƯỚC 4 — BUILD eva-foam.html + SỬA NAV ════

4a. Tạo eva-foam.html đầy đủ 2 phần theo layout ở trên.
4b. Sửa nav tất cả file .html (kích hoạt link Hệ EVA Foam Sonic).
git diff --stat. CHƯA commit. DỪNG.

════ BƯỚC 5 — CHỜ LỆNH ════

Chỉ commit khi tôi nói "commit". Push chỉ khi tôi nói "push".
