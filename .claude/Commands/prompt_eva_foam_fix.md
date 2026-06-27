# Prompt Fix EVA Foam — Claude Code (VS Code extension)

⚙️ THIẾT LẬP: Model Claude Opus 4.8 — Effort Max. Giữ nguyên suốt session.

---

Repo Sonic-web, branch claude/epic-knuth-rtyfc5. Đọc CLAUDE.md trước khi làm.

Fix eva-foam.html + ảnh sản phẩm. KHÔNG đụng: data-next.js, next-trays.js,
products_next_verified.json, mss-product.html, next-mss.html, products.html.

═══════════════════════════════════════════════════════
5 LỖI CẦN FIX
═══════════════════════════════════════════════════════

LỖI 1 — BREADCRUMB ĐÈ LÊN HERO
Breadcrumb "Trang chủ / Sản phẩm / Hệ Foam Sonic" đang nằm bên trong
section hero → đè lên ảnh. Xóa breadcrumb khỏi eva-foam.html hoàn toàn.

LỖI 2 — ẢNH SẢN PHẨM CROP SAI + CHẤT LƯỢNG THẤP
Toàn bộ ảnh sản phẩm trong assets/products/eva-foam/ cần được crop lại
từ đầu từ PDF catalog. Đây là nguồn duy nhất hợp lệ — đúng pipeline
đã dùng cho module NEXT.

Pipeline bắt buộc:
  git show origin/catalog-temp:"assets/Sonic Catalogue 2026.pdf"
  TUYỆT ĐỐI KHÔNG checkout, KHÔNG merge catalog-temp.
  KHÔNG dùng screenshot, KHÔNG dùng ảnh web.

LỖI 3 — KHUNG CARD ẢNH NỀN XÁM
Khung chứa ảnh trong mỗi card đang có nền xám nhạt.
Yêu cầu: nền trắng #fff, chỉ giữ đường viền kẻ khung mảnh.

LỖI 4 — KÍCH THƯỚC ẢNH KHÔNG ĐỒNG ĐỀU
Các card ảnh to nhỏ khác nhau, không đồng đều.
Yêu cầu: tất cả khung ảnh cùng kích thước, ảnh canh giữa.

LỖI 5 — BADGE SIZE KHÔNG HIỆN TRÊN CARD
Badge S/M/L/XL chưa overlay đúng góc trên phải của khung ảnh.

═══════════════════════════════════════════════════════
QUY TRÌNH — GATE-BASED, BẮT BUỘC THEO THỨ TỰ
═══════════════════════════════════════════════════════

════ BƯỚC 1 — KIỂM TRA BRANCH ════

git branch --show-current
Phải là claude/epic-knuth-rtyfc5. Branch lạ → báo ngay, dừng hẳn.

════ BƯỚC 2 — FIX NGAY KHÔNG CẦN DUYỆT ════

2a. Xóa breadcrumb khỏi eva-foam.html (LỖI 1).

2b. Fix CSS card (LỖI 3 + 4 + 5) — thêm vào file CSS hiện tại,
    KHÔNG tạo file CSS mới:

    Khung ảnh:
    - background: #fff
    - border: 1px solid #e5e5e5
    - width: 100%
    - aspect-ratio: 4/3
    - display: flex
    - align-items: center
    - justify-content: center
    - overflow: hidden
    - position: relative   ← để badge absolute bên trong

    Ảnh bên trong khung:
    - max-width: 90%
    - max-height: 90%
    - object-fit: contain
    - display: block

    Badge size:
    - position: absolute
    - top: 8px
    - right: 8px
    - background: #C0392B
    - color: #fff
    - font-size: 11px
    - font-weight: 700
    - padding: 2px 7px
    - border-radius: 3px

git diff --stat sau bước này. DỪNG, báo tôi xem trước khi recrop.

════ BƯỚC 3 — LẬP BẢNG TỌA ĐỘ CROP (DỪNG, chờ tôi duyệt) ════

Đây là bước quan trọng nhất — KHÔNG được bỏ qua.

3a. Đọc catalog trang 68–75 qua git show.

3b. Với MỖI TRANG (68, 69, 70, 71, 72, 73, 74, 75):
    - Render trang đó ra ảnh (dpi đủ cao để nhìn rõ từng ô)
    - Đếm số cột, số hàng trên trang
    - Xác định tọa độ (x, y, width, height) của TỪNG Ô sản phẩm
    - In bảng:
      | trang | hàng | cột | sku | tọa độ đề xuất (x,y,w,h px) |

3c. Với mỗi ô: mô tả ngắn vùng thấy (để tôi đối chiếu đúng/sai).

DỪNG HOÀN TOÀN. Không crop bất kỳ ảnh nào cho đến khi tôi xác nhận
bảng tọa độ. Đây là gate chống lỗi crop nhầm ô.

════ BƯỚC 4 — CROP TOÀN BỘ ẢNH (sau khi tôi duyệt bảng tọa độ) ════

Crop theo đúng tọa độ đã được duyệt. Chạy TỪNG NHÓM TRANG:

4a. Trang 68–69 (nhóm S phần 1):
    - Crop từng ô theo bảng đã duyệt
    - Lưu: assets/products/eva-foam/<sku>.png
    - Mã không đọc rõ → verified:false, KHÔNG đoán, KHÔNG crop
    - Log rõ: đã crop / bỏ qua (lý do)
    - Cập nhật trường image trong data/eva-foam.js cho các SKU vừa crop
    - git add assets/products/eva-foam/ && git diff --stat
    DỪNG.

4b. Trang 70–71 (nhóm S phần 2). Cập nhật JS. git diff --stat. DỪNG.

4c. Trang 72–73 (nhóm M). Cập nhật JS. git diff --stat. DỪNG.

4d. Trang 74 (nhóm L). Cập nhật JS. git diff --stat. DỪNG.

4e. Trang 75 (nhóm XL). Cập nhật JS. git diff --stat. DỪNG.

Sau mỗi nhóm: nếu token gần hết → commit nhóm đó ngay,
mở session mới, dán lại header prompt + ghi rõ "Tiếp BƯỚC 4
nhóm [trang xx–yy], các nhóm trước đã commit."

════ BƯỚC 5 — KIỂM TRA TỔNG THỂ ════

Mở eva-foam.html bằng file:// trong browser, kiểm tra:
- Không còn breadcrumb trong hero
- Tất cả card khung trắng, viền mảnh, kích thước đồng đều
- Badge S/M/L/XL hiện đúng góc trên phải
- Ảnh sản phẩm rõ nét, không bị split, không bị lơ lửng
- Filter [S]/[M]/[L]/[XL] ẩn/hiện card đúng

Báo kết quả kiểm tra từng điểm. git diff --stat toàn bộ. DỪNG.

════ BƯỚC 6 — CHỜ LỆNH ════

Chỉ commit khi tôi nói "commit".
Chỉ push khi tôi nói "push".
