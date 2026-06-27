# Prompt cho Claude Code — Module "Hệ EVA Foam Sonic"



Repo Sonic-web, branch claude/epic-knuth-rtyfc5. Đọc CLAUDE.md trước khi làm.
Tham khảo cấu trúc next-mss.html (Codex đã làm xong, đã push) để kế thừa
pattern header/footer/layout.

═══════════════════════════════════════════════════════
NHIỆM VỤ: Xây module "Hệ EVA Foam Sonic" → trang eva-foam.html
═══════════════════════════════════════════════════════

Sonic Foam System (SFS) = bộ khay foam đựng dụng cụ. Đây là ACCESSORY,
KHÔNG phải toolbox → KHÔNG variants màu, KHÔNG dimension drawing.
Mỗi bộ gồm: mã SKU, tên VN, số món, kích thước (S/M/L/XL).

4 kích thước:
- S  190×370 mm  (trang catalog 68–71, ~59 bộ)
- M  570×370 mm  (trang 72–73, ~30 bộ)
- L  745×435 mm  (trang 74, ~18 bộ)
- XL 745×570 mm  (trang 75, ~15 bộ)
Tổng dự kiến ~122 bộ. ĐƯA HẾT lên, không lọc bỏ bộ nào.

─────────────────────────────────────────
NGUỒN ẢNH — 2 NGUỒN RIÊNG BIỆT, DÙNG ĐÚNG CHỖ
─────────────────────────────────────────

NGUỒN A — 3 ảnh layout lớn (hero + 2 block giới thiệu):
  File local: /Users/lucatxtruong/Downloads/screenshot EVA foam.png
  Đây là screenshot trang sonic-equipment.com/sonic-foam-system/
  → Crop bằng Python + Pillow.
  → Kiểm tra Pillow trước: python3 -c "from PIL import Image; print('OK')"
     Nếu lỗi: pip3 install Pillow trước khi crop.

  Crop 3 vùng sau:

  A1 → eva-foam-hero.png
       Vùng: phần trên cùng của screenshot — ảnh ngăn kéo tủ đang mở với
       khay foam đầy dụng cụ, có bàn tay đang lấy socket, nền xám sáng.
       Crop toàn bộ chiều ngang, từ top đến hết phần ảnh hero (dừng trước
       khi xuất hiện nền trắng nav bar của Sonic).
       Lưu: assets/products/eva-foam/eva-foam-hero.png

  A2 → eva-foam-intro.png
       Vùng: ảnh vuông bên TRÁI trong section "NEXT level efficiency" —
       cận cảnh nhìn từ trên xuống, nhiều tua vít cán đỏ-đen cắm trong
       foam đen, logo Sonic trên cán.
       Lưu: assets/products/eva-foam/eva-foam-intro.png

  A3 → eva-foam-saving.png
       Vùng: ảnh bên PHẢI trong section "Achieve serious savings" —
       góc chụp chéo từ trên, tủ đen nhiều ngăn kéo đang mở, mỗi ngăn
       có khay foam, có bàn tay đang thao tác.
       Lưu: assets/products/eva-foam/eva-foam-saving.png

  Workflow crop bắt buộc:
  (1) In kích thước ảnh gốc (width × height px) + mô tả ngắn từng vùng thấy.
  (2) DỪNG — chờ tôi xác nhận tọa độ trước khi crop.
  (3) Crop → báo kích thước output (px + KB).
  (4) git add assets/products/eva-foam/eva-foam-*.png ngay sau khi crop xong.

NGUỒN B — Ảnh từng bộ foam sản phẩm:
  Pipeline: git show origin/catalog-temp:"assets/Sonic Catalogue 2026.pdf"
  TUYỆT ĐỐI KHÔNG checkout, KHÔNG merge catalog-temp.
  Crop từng SKU từ trang 68–75 (mỗi ô sản phẩm có ảnh foam riêng).
  Lưu: assets/products/eva-foam/<sku-bỏ-dấu-#>.png  (vd: 600823.png)
  Mã không đọc rõ → verified:false, image:null. KHÔNG đoán.

─────────────────────────────────────────
LAYOUT TRANG (2 phần)
─────────────────────────────────────────

PHẦN TRÊN (above the fold + giới thiệu):

  1. HERO full-width ~75vh:
     - Ảnh: eva-foam-hero.png (Nguồn A1) + overlay rgba(0,0,0,0.55)
     - Tiêu đề: "HỆ FOAM SONIC" (trắng, uppercase, in nghiêng đậm, font lớn)
     - Sub: "Hơn 200 bộ foam định vị dụng cụ — lấy nhanh, không tìm kiếm"

  2. Block "Hiệu suất NEXT-level" (ảnh TRÁI, text PHẢI):
     - Ảnh: eva-foam-intro.png (Nguồn A2), tỉ lệ ~1:1, bo góc nhẹ
     - Tiêu đề + đoạn văn + bullets (dùng câu VN bên dưới)

  3. Hàng 3 badge đỏ — số liệu nghiên cứu (dùng câu VN bên dưới)

  4. Block "Tiết kiệm thời gian & chi phí" (text TRÁI, ảnh PHẢI):
     - Ảnh: eva-foam-saving.png (Nguồn A3), bo góc nhẹ
     - Tiêu đề + đoạn văn + bullets (dùng câu VN bên dưới)

  5. Hàng 4 thẻ size (S / M / L / XL), mỗi thẻ:
     - Ảnh đại diện = ảnh của SKU tiêu biểu đã crop ở BƯỚC 3
       (chọn bộ nhiều món nhất / ảnh rõ đẹp nhất của size đó,
        dùng LẠI ảnh đã crop — KHÔNG crop ảnh mới — ghi rõ SKU nào)
     - Nhãn: "SFS Nhỏ (S) · 190×370 mm"
     - Click → scrollIntoView('#products') + kích hoạt filter size đó

PHẦN DƯỚI (id="products"):

  6. Filter bar sticky dưới header:
     [Tất cả]  [S — 190×370]  [M — 570×370]  [L — 745×435]  [XL — 745×570]
     Active: đỏ #C0392B + chữ trắng. Inactive: xám.

  7. Grid: 3 cột desktop / 2 tablet / 1 mobile. Mỗi card:
     - Ảnh bộ foam
     - Badge size góc trên phải (đỏ #C0392B, chữ trắng)
     - Mã SKU: #xxxxxx (xám nhỏ)
     - Tên tiếng Việt (đậm)
     - "X món" (ẩn nếu pieces = null)
     - Nút "Yêu cầu báo giá" → href="contact.html"
     KHÔNG giá. KHÔNG tồn kho. KHÔNG nút đặt hàng.

─────────────────────────────────────────
CÂU CHỮ TIẾNG VIỆT (dùng NGUYÊN, không tự dịch lại)
─────────────────────────────────────────

Block 2:
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

Block 3 — 3 badge:
  Badge 1: "+78% NHANH HƠN" · "Kiểm kê tủ dụng cụ"  · "AN TÂM TUYỆT ĐỐI"
  Badge 2: "-80% GIẢM"      · "Thất lạc dụng cụ"     · "RỦI RO VS LỢI ÍCH"
  Badge 3: "+20% NHANH HƠN" · "Lấy & cất dụng cụ"    · "THỜI GIAN LÀ TIỀN BẠC"

Block 4:
  "Nghiên cứu độc lập cho thấy làm việc với Hệ Foam Sonic mang lại khoản tiết kiệm
  đáng kể về cả thời gian lẫn chi phí."
  Bullets:
  • Lấy & cất dụng cụ nhanh hơn 20%
  • Kiểm kê trọn bộ dụng cụ nhanh hơn tới 78%
  • Tăng 80% khả năng giữ bộ dụng cụ luôn đầy đủ

Block 5 — nhãn thẻ size:
  SFS Nhỏ (S)  ·  SFS Vừa (M)  ·  SFS Lớn (L)  ·  SFS Rất lớn (XL)

─────────────────────────────────────────
DỊCH TÊN SẢN PHẨM — GLOSSARY
─────────────────────────────────────────
Screwdriver set                        → Bộ tua vít
Long screwdriver set                   → Bộ tua vít dài
Screwdriver and TX set                 → Bộ tua vít và Torx
Go through screwdriver set             → Bộ tua vít xuyên cán
Screwdriver set VDE                    → Bộ tua vít cách điện VDE
Socket screwdriver and hex set         → Bộ tua vít khẩu và lục giác
Hex ball grip key set                  → Bộ lục giác bi đầu cầu
Hex key wrench set                     → Bộ lục giác chữ L
Key wrench set TX t-handle             → Bộ chữ T đầu Torx
Key wrench set TX adjustable T-handle  → Bộ T-handle Torx điều chỉnh được
Flank socket set                       → Bộ khẩu (tuýp) Flank
Bit socket set                         → Bộ đầu bit gắn khẩu
Deep socket set                        → Bộ khẩu sâu (tuýp dài)
Combination set                        → Bộ tổng hợp
Wrench set                             → Bộ cờ lê
Hammer set                             → Bộ búa
Pliers set                             → Bộ kìm
Pliers and cutting set                 → Bộ kìm và kìm cắt
Impact socket set                      → Bộ khẩu chịu lực (khẩu súng)
Impact socket and torque wrench set    → Bộ khẩu chịu lực và cờ lê lực
Pry removal master kit                 → Bộ nạy tháo chuyên dụng
Aluminium oil filter cup wrench set    → Bộ cốc tháo lọc dầu (nhôm)
Oil filter set                         → Bộ tháo lọc dầu
Flare nut wrench set                   → Bộ cờ lê đầu chuồng
Hinged socket wrench set               → Bộ cờ lê khẩu bản lề
Ratcheting wrench set                  → Bộ cờ lê tự động (tay quay)
Reversible ratcheting wrench set       → Bộ cờ lê tự động đảo chiều
Flexible ratcheting wrench set         → Bộ cờ lê tự động cần dẻo
Flat ring ratchet set                  → Bộ cờ lê vòng tự động
75° Offset ring wrench set             → Bộ cờ lê vòng offset 75°
Double open wrench set                 → Bộ cờ lê hai đầu hở
Snap ring pliers set                   → Bộ kìm phe
Gripped chisel and punch set           → Bộ đục và đột có tay cầm
File set                               → Bộ giũa
Hook set                               → Bộ móc
Foam spacer                            → Tấm đệm foam
Chisel, hammer and pliers set          → Bộ đục, búa và kìm
Chisel, hammer and impact set          → Bộ đục, búa và khẩu chịu lực
Hammer and chisel set                  → Bộ búa và đục
Socket set                             → Bộ khẩu
Screwdriver and bit socket set         → Bộ tua vít và đầu bit khẩu

Quy ước bắt buộc:
- "X-pcs." → "X món"
- Giữ nguyên: 1/4" · 3/8" · 1/2" · 3/4"
- Nhãn phụ: SAE→(hệ SAE) | AVIATION→(dòng Aviation) | HEAVY DUTY→(hạng nặng)
- Tên không chắc → dịch tạm + đánh dấu (?) trong bảng. KHÔNG bịa.

─────────────────────────────────────────
RÀNG BUỘC KỸ THUẬT
─────────────────────────────────────────
- Site chạy file:// → KHÔNG fetch / XHR / import JSON động.
- Data: data/eva-foam.js → const EVA_FOAM_DATA = [...]
- Cấu trúc entry:
  {
    sku:        "#600823",
    name_vi:    "Bộ tua vít SFS-S",
    name_en:    "Screwdriver set SFS-S",   // lưu để đối chiếu, không render
    pieces:     8,                          // null nếu không có số món
    size:       "S",
    dimensions: "190x370",
    image:      "assets/products/eva-foam/600823.png",
    verified:   true
  }
- #47613 Foam spacer: vào grid bình thường, pieces:null.
- Filter: JS thuần, data-size attr + toggle class "hidden".
- Click thẻ size → scrollIntoView('#products') + kích hoạt filter tương ứng.
- Header/nav: copy y hệt từ products.html.
- CSS: thêm vào file CSS hiện tại, KHÔNG tạo file CSS mới.

─────────────────────────────────────────
FILE TẠO / SỬA
─────────────────────────────────────────
TẠO MỚI:
  eva-foam.html
  data/eva-foam.js
  assets/products/eva-foam/

SỬA (tất cả .html có header):
  "Hệ EVA Foam Sonic" → bỏ disabled/style xám → thêm href="eva-foam.html"

KHÔNG ĐỤNG:
  products.html, product.html, data-next.js, next-trays.js,
  products_next_verified.json, mss-product.html, next-mss.html

═══════════════════════════════════════════════════════
QUY TRÌNH GATE-BASED — BẮT BUỘC
(Gate tồn tại để anh duyệt dữ liệu — KHÔNG phải để switch model/effort)
═══════════════════════════════════════════════════════

════ BƯỚC 1 — KIỂM TRA & LẬP BẢNG ════

1a. Kiểm tra branch: git branch --show-current
    Phải là claude/epic-knuth-rtyfc5. Branch lạ → báo ngay, dừng hẳn.

1b. Đọc catalog trang 66–75 qua git show. Lập bảng TẤT CẢ SKU:
    | size | sku | name_en | pieces | name_vi (đề xuất) | trang | nhãn phụ | (?) |
    In tổng count từng size + tổng cộng. So sánh với ~122.

1c. Xác nhận tên file CSS đang dùng cho nav/layout.

1d. Liệt kê tất cả file .html trong root cần sửa nav.

DỪNG. Không làm gì thêm cho đến khi tôi duyệt bảng.

════ BƯỚC 2 — TẠO data/eva-foam.js ════
(Chỉ chạy sau khi tôi duyệt bảng BƯỚC 1)

Populate đủ tất cả entry theo bảng đã duyệt. image: null tạm.
In 5 entry đầu + tổng count. DỪNG.

════ BƯỚC 3 — CROP ẢNH LAYOUT (Nguồn A) ════
(Có thể chạy song song BƯỚC 2 — không phụ thuộc nhau)

3a. Kiểm tra Pillow: python3 -c "from PIL import Image; print('OK')"
    Nếu lỗi: pip3 install Pillow

3b. Đọc /Users/lucatxtruong/Downloads/screenshot EVA foam.png
    In kích thước (width × height px) + mô tả ngắn từng vùng thấy được.
    DỪNG — chờ tôi xác nhận tọa độ.

3c. Crop 3 ảnh A1/A2/A3. Báo kích thước output (px + KB).
    git add assets/products/eva-foam/eva-foam-*.png
    DỪNG.

════ BƯỚC 4 — CROP ẢNH SẢN PHẨM (Nguồn B, từng nhóm size) ════
(Nếu token gần hết sau một nhóm → commit nhóm đó, mở session mới,
 dán lại header prompt + ghi "Tiếp BƯỚC 4 nhóm [M/L/XL]" rồi tiếp tục)

4a. Crop nhóm S (trang 68–71):
    - Crop từng SKU. Log: đã crop / bỏ qua (verified:false).
    - Chọn 1 SKU đại diện size S (nhiều món nhất / ảnh đẹp nhất).
    - Cập nhật trường image trong eva-foam.js cho nhóm S.
    - git add assets/products/eva-foam/ && git diff --stat. DỪNG.

4b. Crop nhóm M (trang 72–73). Chọn SKU đại diện M.
    Cập nhật JS + git diff --stat. DỪNG.

4c. Crop nhóm L (trang 74). Chọn SKU đại diện L.
    Cập nhật JS + git diff --stat. DỪNG.

4d. Crop nhóm XL (trang 75). Chọn SKU đại diện XL.
    Cập nhật JS + git diff --stat.
    In bảng tổng kết: 4 SKU đại diện được chọn cho 4 thẻ size.
    DỪNG.

════ BƯỚC 5 — BUILD eva-foam.html + SỬA NAV ════

5a. Tạo eva-foam.html đầy đủ 2 phần theo layout.
5b. Sửa nav tất cả file .html.
5c. Kiểm tra thủ công (mở file:// trong browser):
    - Filter [S]/[M]/[L]/[XL] ẩn/hiện card đúng.
    - Click thẻ size ở phần trên → cuộn xuống + filter đúng.
    - Nav dropdown "Hệ EVA Foam Sonic" → vào đúng trang.
    - Card không hiện giá, không hiện tồn kho.
    Báo kết quả kiểm tra.
git diff --stat. CHƯA commit. DỪNG.

════ BƯỚC 6 — CHỜ LỆNH ════

Chỉ commit khi tôi nói "commit".
Chỉ push khi tôi nói "push".
