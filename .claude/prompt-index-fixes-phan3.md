# PROMPT — Trang chủ (index.html) · Phần 3: 5 điểm chỉnh sửa

> Dán phần 📋 PROMPT vào Claude Code. ⚙️ THIẾT LẬP & 🔎 GHI CHÚ chỉ để người dùng đọc.

---

## 📋 PROMPT (dán nguyên khối bên dưới vào Claude Code)

```
⚠️ Nếu là SESSION MỚI: KHÔNG có context chat trước. Prompt này là nguồn chân lý DUY NHẤT.
KHÔNG suy đoán, KHÔNG tự thêm element/nội dung ngoài những gì ghi ở đây.

Repo Sonic-web, branch claude/epic-knuth-rtyfc5. Đọc CLAUDE.md trước.
git branch --show-current ; git log --oneline -8.

TIẾP NỐI: index.html đã có Header(wordmark) → Hero(ảnh tối) → USP → Showcase A|B → Showcase C
→ Gallery "Team Sonic" → (Về chúng tôi, CTA đỏ, Footer được GIỮ). Lượt này chỉ TINH CHỈNH index.html.
Đường dẫn có dấu cách/ký tự đặc biệt → LUÔN bọc nháy kép.

═══════════════════════════════════════════════════════════════════
MỤC TIÊU — 5 điểm sửa, CHỈ trong index.html (+ CSS hiện tại của index)
═══════════════════════════════════════════════════════════════════
1. [HEADER] Bỏ CẢ 2 nút ("Xem sản phẩm" + "Yêu cầu báo giá"); thay bằng icon Search + Facebook.
2. [HERO]   Thu nhỏ chữ tiêu đề, bỏ subline, dồn gọn xuống GÓC DƯỚI TRÁI; đổi nút + link + viền trắng.
3. [SHOWCASE A — Dòng tủ NEXT] Sửa 2 dòng chữ.
4. [SHOWCASE C — Storage·MSS] Sửa link nút "Khám phá" → trang sản phẩm NEXT MSS (đang ra "không tìm thấy").
5. [GALLERY Team Sonic] Thêm 1 ảnh lấp góc dưới-trái.

═══════════════════════════════════════════════════════════════════
NGUỒN ẢNH (local — KHÔNG cào web, KHÔNG lấy từ PDF)
═══════════════════════════════════════════════════════════════════
Việc 5: "/Users/lucatxtruong/Desktop/Business/2. Tủ đồ/ảnh làm web/13.jpg"  → đích team-09.jpg

═══════════════════════════════════════════════════════════════════
CHI TIẾT TỪNG VIỆC
═══════════════════════════════════════════════════════════════════
[VIỆC 1 — HEADER]  (CHỈ sửa trong index.html)
- BỎ CẢ 2 nút bên phải header: "Xem sản phẩm" VÀ "Yêu cầu báo giá".
  (CTA báo giá vẫn còn ở nút nổi góc phải + hero + các section khác → không mất.)
- THAY bằng 2 icon kiểu Sonic gốc (inline SVG, line/đơn sắc đen, nhỏ gọn), đặt bên phải nav:
    • Icon SEARCH (kính lúp): tạm href → products.html (chức năng tìm thật build sau).
    • Icon FACEBOOK: href → https://www.facebook.com/Sonictoolsvietnam/  (target="_blank", rel="noopener").
- Hover icon: CHỈ đổi màu (vd đen → đỏ #E2231A). CẤM phóng to/translate/xê dịch.
- KHÔNG đụng header các trang khác lượt này.

[VIỆC 2 — HERO]
- Tiêu đề: GIẢM mạnh font-size (hiện đang quá to, che hết ảnh). Chỉ còn 2 DÒNG, KHÔNG subline:
      Dòng 1: "SẮP XẾP THÔNG MINH"
      Dòng 2: "LÀM VIỆC HIỆU QUẢ"
  → BỎ dấu gạch "—" giữa 2 dòng. BỎ hẳn câu phụ "Tủ đồ nghề & hệ thống lưu trữ Sonic...".
- Bố cục: dồn cả cụm (2 dòng tiêu đề + nút) xuống GÓC DƯỚI BÊN TRÁI của ảnh hero
  (căn trái, neo gần đáy), để lộ ảnh phía trên/phải.
- Nút đỏ: đổi chữ "Xem dòng tủ NEXT ›"  →  "Khám phá hệ MSS+".
  + Thêm ĐƯỜNG VIỀN TRẮNG (border trắng, mảnh) quanh nút pill đỏ.
  + Link href → trang sản phẩm MSS+ (xác định URL ở BƯỚC 1, KHÔNG hardcode đoán).
  + Hover: CHỈ đổi màu nền (đỏ đậm hơn). CẤM transform/translate/scale ở :hover/:active/:focus.

[VIỆC 3 — SHOWCASE A "Dòng tủ NEXT"]
- "Tủ đồ nghề trên bánh xe"              →  "Tủ đồ nghề di động"
- "Giải pháp di động cho xưởng của bạn."  →  "Giải pháp chuyên nghiệp cho xưởng của bạn."
- KHÔNG đổi gì khác trong Showcase A (giữ ảnh, eyebrow "DÒNG TỦ NEXT", link cũ).

[VIỆC 4 — SHOWCASE C "Storage · MSS"]
- Hiện link nút "Khám phá ›" trỏ tới chỗ ra trang "Không tìm thấy sản phẩm".
- Sửa href → trang DANH SÁCH/sản phẩm "NEXT MSS" sao cho mở ra ĐÚNG sản phẩm, KHÔNG ra "không tìm thấy".
- URL đúng xác định ở BƯỚC 1. KHÔNG đổi ảnh/chữ Showcase C, chỉ đổi href.

[VIỆC 5 — GALLERY Team Sonic]
- Thêm ảnh 13.jpg (→ team-09.jpg) vào gallery, ĐẶT Ở vị trí lấp khoảng trống GÓC DƯỚI BÊN TRÁI
  để masonry cân đối.
- Đọc layout gallery hiện tại (CSS columns hay grid) → chèn team-09 vào đúng vị trí trong thứ tự DOM
  để nó rơi xuống đáy cột trái. Nếu cần xê dịch nhẹ thứ tự để đạt điều đó → đề xuất ở BƯỚC 2.
- Ảnh người → GIỮ tỉ lệ gốc (không crop mặt). Nếu buộc dùng ô cover → object-position theo chủ thể.

═══════════════════════════════════════════════════════════════════
RÀNG BUỘC KỸ THUẬT
═══════════════════════════════════════════════════════════════════
- Site chạy file:// — KHÔNG fetch/XHR/import động.
- KHÔNG tạo file CSS mới — sửa trong CSS hiện tại của index.
- VERIFY SELECTOR trước khi sửa: đọc HTML/CSS thật của từng vùng (header, hero, showcase A, showcase C,
  gallery) → BÁO đúng class/selector → rồi mới sửa. KHÔNG assume.
- Ảnh team-09: <img> thật, .jpg q90, resize khớp các ảnh gallery hiện có.
- LINK MSS+ / NEXT MSS: các file MSS (mss-product.html, next-mss.html) do Codex sở hữu.
  → CHỈ ĐỌC để lấy URL đúng. TUYỆT ĐỐI KHÔNG sửa nội dung 2 file đó. Chỉ set href trong index.html.
- PHẠM VI: mọi thay đổi CHỈ trong index.html + CSS của index. KHÔNG đổi CSS/JS global dùng chung trang khác.

═══════════════════════════════════════════════════════════════════
FILE TẠO / SỬA / KHÔNG ĐỤNG
═══════════════════════════════════════════════════════════════════
SỬA:   index.html ; file CSS hiện tại của index.
TẠO:   assets/img/home/team/team-09.jpg
ĐỌC (không sửa): mss-product.html, next-mss.html (chỉ để lấy URL link đúng).
KHÔNG ĐỤNG: products.html, product.html, eva-foam.html, contact.html,
            nội dung mss-product.html & next-mss.html, mọi file data/,
            ảnh assets/products/*, CSS/JS global dùng chung.
HEADER: việc 1 CHỈ sửa trong index.html — KHÔNG đụng header các trang khác lượt này.

═══════════════════════════════════════════════════════════════════
QUY TRÌNH GATE (mỗi bước xong: git diff --stat + mô tả ngắn → DỪNG chờ "tiếp tục")
═══════════════════════════════════════════════════════════════════
BƯỚC 0 — branch, CLAUDE.md, git log. Đọc index.html, định vị 5 vùng cần sửa + báo selector.

BƯỚC 1 — XÁC ĐỊNH LINK MSS (chỉ đọc, DỪNG chờ duyệt):
   • Đọc mss-product.html và next-mss.html: xác định đâu là trang "MSS+" (đích VIỆC 2)
     và trang "NEXT MSS" (đích VIỆC 4).
   • Nếu là trang chi tiết cần ?id → tìm URL/danh sách mở ra ĐÚNG, KHÔNG ra "không tìm thấy".
   • BÁO 2 URL sẽ dùng (hero MSS+ / showcase C NEXT MSS) + lý do. DỪNG.

BƯỚC 2 — GATE ẢNH 13.jpg (DỪNG chờ duyệt):
   • ls -la + dimension/tỉ lệ/dung lượng; nội dung (người? chủ thể lệch tâm?); chữ nung/watermark.
   • Đề xuất: kích thước resize + vị trí chèn để lấp góc dưới-trái + object-position nếu cần. DỪNG.

BƯỚC 3 — (sau duyệt B2) Pillow: 13.jpg → team-09.jpg (q90, resize theo đề xuất). git diff --stat. DỪNG.

BƯỚC 4 — VIỆC 2 (Hero): thu nhỏ chữ + bỏ subline + dồn góc dưới-trái + đổi nút "Khám phá hệ MSS+"
   + viền trắng + link MSS+ (URL từ B1). DỪNG.

BƯỚC 5 — VIỆC 3 + VIỆC 4: đổi 2 dòng chữ Showcase A; sửa href Showcase C → NEXT MSS (URL từ B1).
   Mở thử link để chắc KHÔNG ra "không tìm thấy". DỪNG.

BƯỚC 6 — VIỆC 5 (Gallery): chèn team-09 lấp góc dưới-trái. DỪNG.

BƯỚC 7 — VIỆC 1 (Header, chỉ index.html): verify selector header → BÁO → BỎ cả 2 nút
   ("Xem sản phẩm" + "Yêu cầu báo giá"); thêm icon Search (→ products.html) +
   icon Facebook (→ https://www.facebook.com/Sonictoolsvietnam/ , target="_blank"). Hover icon chỉ đổi màu. DỪNG.

Token gần hết → dừng ở bước an toàn, báo đã làm tới đâu.

═══════════════════════════════════════════════════════════════════
Chỉ commit khi tôi nói "commit". Chỉ push khi tôi nói "push".
═══════════════════════════════════════════════════════════════════
```

---

## 🔎 GHI CHÚ CHO NGƯỜI DÙNG (Lucatx)

- **VIỆC 1 đã chốt:** header phải chỉ còn 2 icon — Search (tạm trỏ products.html) + Facebook
  (https://www.facebook.com/Sonictoolsvietnam/). Bỏ cả "Xem sản phẩm" lẫn "Yêu cầu báo giá".
  CTA báo giá vẫn còn ở nút nổi góc phải + hero + các section khác → không mất.
- **MSS+ vs NEXT MSS:** VIỆC 2 trỏ MSS+, VIỆC 4 trỏ NEXT MSS — Claude Code đọc 2 file (Codex sở hữu)
  để lấy URL đúng, tránh lại ra "không tìm thấy". Biết chắc file nào là cái nào thì nói, tôi ghi thẳng.
- **Soát B1 và B2** rồi paste kết quả về đây trước khi cho qua B3.
- Header các trang khác (mss-product.html...) vẫn là bản cũ "S đỏ" — đồng bộ wordmark toàn site là task riêng sau.
