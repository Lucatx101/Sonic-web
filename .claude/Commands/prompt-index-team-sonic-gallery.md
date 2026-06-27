# PROMPT — Trang chủ (index.html) · Phần 2: Gallery "Team Sonic" + dọn section cũ

> Dán phần 📋 PROMPT vào Claude Code. Phần ⚙️ THIẾT LẬP & 🔎 GHI CHÚ chỉ để người dùng đọc.
> Tiếp nối: Header → Showcase C đã hoàn thành ở phần 1.

---

## ⚙️ THIẾT LẬP (set trong UI Claude Code TRƯỚC khi chạy — KHÔNG dán vào prompt)

- **Model:** Claude Opus 4.8
- **Effort:** High
- **Lý do:** xử lý ảnh local + HTML/CSS + thao tác xóa markup, KHÔNG đọc PDF.

---

## 📋 PROMPT (dán nguyên khối bên dưới vào Claude Code)

```
⚠️ Nếu là SESSION MỚI: KHÔNG có context chat trước. Prompt này là nguồn chân lý DUY NHẤT.
Mọi quyết định về layout / nội dung / đường dẫn / phạm vi xóa lấy từ chính prompt này + CLAUDE.md.
KHÔNG suy đoán, KHÔNG tự chế thêm element/nội dung ngoài những gì ghi ở đây.

Repo Sonic-web, branch claude/epic-knuth-rtyfc5. Đọc CLAUDE.md trước.
Chạy: git branch --show-current và git log --oneline -8.

TIẾP NỐI: index.html đã được tái thiết kế từ Header → Showcase C (hero tối, USP,
showcase A/B/C, font Be Vietnam Pro Black italic cho heading homepage). Lượt này làm TIẾP
phần ngay dưới Showcase C.

LƯU Ý ĐƯỜNG DẪN: mọi path nguồn có dấu cách/ký tự đặc biệt ("Tủ đồ", "ảnh làm web"...)
→ LUÔN bọc trong dấu nháy kép khi thao tác shell/Pillow.

═══════════════════════════════════════════════════════════════════
MỤC TIÊU (2 việc)
═══════════════════════════════════════════════════════════════════
1. THÊM một section gallery ảnh tên "Team Sonic" NGAY DƯỚI Showcase C.
2. XÓA toàn bộ các section cũ NẰM GIỮA gallery Team Sonic và Footer.
   GIỮ NGUYÊN Footer (trang vẫn phải có footer).

Sau khi xong, thứ tự trang chủ là:
   Header → Hero → USP → Showcase A|B → Showcase C → [MỚI] Team Sonic gallery → Footer.

CÁC SECTION CŨ CẦN XÓA (đây là những khối hiện nằm dưới Showcase C — xác nhận lại ở Bước 1):
   • "DANH MỤC SẢN PHẨM / Giải pháp dụng cụ toàn diện cho xưởng" (lưới 8 card danh mục icon đỏ)
   • "NỔI BẬT / Tủ đồ nghề & bộ dụng cụ bán chạy" (card sản phẩm NEXT S7–S15 + "Xem tất cả sản phẩm")
   • "SONIC FOAM SYSTEM / Dụng cụ ngăn nắp, năng suất tối đa" (khối có SVG placeholder)
   • "TẠI SAO CHỌN SONIC" (3 card nền tối)
   • "VỀ CHÚNG TÔI / Đại lý phân phối Sonic chính thức..." (+ box báo giá)
   • Banner đỏ CTA cuối "Sẵn sàng nâng cấp xưởng của bạn?"
   → KHÔNG xóa Footer.

═══════════════════════════════════════════════════════════════════
NGUỒN ẢNH — Gallery Team Sonic (ảnh local — KHÔNG cào web, KHÔNG lấy từ PDF)
═══════════════════════════════════════════════════════════════════
Thư mục gốc: "/Users/lucatxtruong/Desktop/Business/2. Tủ đồ/ảnh làm web/"
THỨ TỰ HIỂN THỊ phải đúng như sau (vị trí ← file gốc → tên đích):
   #1 ← "7.jpg"   → team-01.jpg
   #2 ← "6.jpg"   → team-02.jpg
   #3 ← "10.jpg"  → team-03.jpg
   #4 ← "8.jpg"   → team-04.jpg
   #5 ← "9.jpg"   → team-05.jpg
   #6 ← "2.jpg"   → team-06.jpg
   #7 ← "1.jpg"   → team-07.jpg
   #8 ← "11.jpg"  → team-08.jpg

═══════════════════════════════════════════════════════════════════
LAYOUT & NỘI DUNG — section "Team Sonic"
═══════════════════════════════════════════════════════════════════
- Eyebrow nhỏ (đỏ) + tiêu đề lớn "Team Sonic" dùng ĐÚNG class heading homepage đã tạo ở phần 1
  (Be Vietnam Pro, đậm; theo phong cách "WORLD OF SONIC" của sonic-equipment.com). KHÔNG tạo style heading mới.
- (Tùy chọn) 1 dòng phụ ngắn dưới tiêu đề — nếu thêm, dùng đúng nội dung này, KHÔNG tự chế khác:
  "Đội ngũ Sonic Việt Nam đồng hành cùng xưởng của bạn."
- Gallery 8 ảnh, mặc định: GRID DẠNG MASONRY GIỮ NGUYÊN TỈ LỆ từng ảnh (vì là ảnh người/đội ngũ,
  tránh crop mất mặt). Responsive: ~3–4 cột desktop, 2 cột tablet, 1–2 cột mobile.
- Chốt layout cụ thể (masonry vs grid ô đồng nhất) ở Bước 1 SAU KHI biết tỉ lệ thật của ảnh.

═══════════════════════════════════════════════════════════════════
RÀNG BUỘC KỸ THUẬT
═══════════════════════════════════════════════════════════════════
- Site chạy file:// — KHÔNG fetch/XHR/import động.
- Ảnh gallery → dùng thẻ <img> thật, xuất .jpg quality 90.
- CHỐNG MÉO ẢNH:
    • Mặc định masonry → giữ aspect-ratio gốc (width 100% theo cột, height auto). CẤM object-fit: fill.
    • NẾU dùng grid ô đồng nhất → object-fit: cover + object-position: center; ô có chiều cao cố định.
      Ảnh nào chủ thể (mặt người) lệch tâm → đặt object-position riêng (Bước 1 phải báo ảnh nào lệch).
    • CẤM set đồng thời width cố định VÀ height cố định lên <img>.
- KHÔNG tạo file CSS mới — thêm style vào file CSS hiện tại của index.
- VERIFY trước khi sửa: đọc HTML thật, xác định đúng điểm kết thúc Showcase C để chèn gallery vào ngay dưới.

- XÓA SECTION CŨ (thao tác phá hủy — cẩn trọng):
    • CHỈ xóa MARKUP HTML của các section liệt kê ở MỤC TIÊU, trong phạm vi index.html.
    • TUYỆT ĐỐI KHÔNG xóa file ảnh sản phẩm (assets/products/next/*, eva-foam/*) — các trang khác còn dùng.
    • KHÔNG sửa/không xóa file trong data/ và KHÔNG sửa CSS/JS DÙNG CHUNG với trang khác.
    • Nếu một section render bằng JS (vd featured products từ data-next.js/products.js):
        - chỉ gỡ MARKUP + vô hiệu hóa lời gọi init LIÊN QUAN CHỈ trong phạm vi index
          (để console không lỗi do querySelector null).
        - nếu lời gọi đó nằm trong file JS DÙNG CHUNG với products.html → KHÔNG sửa file đó,
          thay vào đó BÁO LẠI để tôi quyết. KHÔNG tự ý sửa file dùng chung.
    • CSS riêng của các section bị xóa: được phép để lại (không hại). KHÔNG dọn nếu không chắc 100%
      là CSS đó không dùng ở trang khác.

═══════════════════════════════════════════════════════════════════
FILE TẠO / SỬA / KHÔNG ĐỤNG
═══════════════════════════════════════════════════════════════════
SỬA:   index.html (chèn gallery dưới Showcase C + xóa các section cũ giữa gallery và footer);
       file CSS hiện tại của index (thêm style gallery).
TẠO:   assets/img/home/team/team-01.jpg … team-08.jpg
KHÔNG ĐỤNG:
       products.html, product.html, eva-foam.html, mss-product.html, next-mss.html, contact.html
       mọi file trong data/
       ảnh assets/products/next*, assets/products/eva-foam/
       Footer của index.html (GIỮ NGUYÊN)
       mọi CSS/JS global dùng chung với trang khác

═══════════════════════════════════════════════════════════════════
QUY TRÌNH GATE (mỗi bước build xong: git diff --stat + mô tả ngắn → DỪNG chờ tôi nói "tiếp tục")
═══════════════════════════════════════════════════════════════════
BƯỚC 0 — Xác nhận branch, đọc CLAUDE.md, git log --oneline -8.
   • grep/đọc index.html: xác định điểm kết thúc Showcase C (nơi sẽ chèn gallery).

BƯỚC 1 — GATE KIỂM TRA ẢNH NGUỒN (DỪNG, chờ tôi duyệt):
   • ls -la thư mục "ảnh làm web/" và 8 file nguồn theo mapping.
   • Mở từng ảnh, in: dimension (px), tỉ lệ (ngang/dọc/vuông), dung lượng.
   • Mô tả nội dung từng ảnh (ảnh người/đội ngũ? cảnh xưởng?); chủ thể có lệch tâm không;
     có chữ nung/watermark/logo dính không.
   • ĐỀ XUẤT: layout gallery cuối cùng (masonry giữ tỉ lệ vs grid đồng nhất) + object-position cho ảnh lệch tâm
     + kích thước resize đích (gallery ~900–1200w/ảnh).
   • IN BẢNG tổng hợp. DỪNG.

BƯỚC 2 — GATE LIỆT KÊ XÓA (thao tác phá hủy — DỪNG, chờ tôi duyệt):
   • Đọc index.html từ ngay sau Showcase C đến hết file.
   • IN DANH SÁCH tuần tự mọi section trong vùng đó, kèm: tên/eyebrow/heading + class container + khoảng dòng.
   • Đánh dấu rõ từng section: [XÓA] hay [GIỮ]. Footer = [GIỮ].
   • Nếu phát hiện section render bằng JS dùng chung → ghi chú rõ rủi ro. DỪNG.

BƯỚC 3 — (sau khi tôi duyệt Bước 1) Pillow xử lý 8 ảnh:
   • copy theo mapping → assets/img/home/team/team-01..08.jpg, xuất .jpg q90, resize theo đề xuất Bước 1.
   • git diff --stat, báo, DỪNG.

BƯỚC 4 — Dựng section "Team Sonic" NGAY DƯỚI Showcase C:
   • eyebrow + tiêu đề (class heading homepage đã có) + gallery 8 ảnh đúng thứ tự #1..#8.
   • git diff --stat, mô tả, DỪNG.

BƯỚC 5 — (sau khi tôi duyệt Bước 2) Xóa các section cũ giữa gallery và Footer:
   • chỉ xóa markup trong index.html; gỡ lời gọi JS init liên quan CHỈ trong phạm vi index nếu cần
     (theo ràng buộc ở trên); không động file dùng chung.
   • Mở lại trang kiểm tra: không lỗi console, Footer còn nguyên, gallery nối liền Footer hợp lý.
   • git diff --stat, mô tả, DỪNG.

Token gần hết → dừng ở bước an toàn gần nhất, báo rõ đã làm tới đâu để mở session mới tiếp.

═══════════════════════════════════════════════════════════════════
Chỉ commit khi tôi nói "commit". Chỉ push khi tôi nói "push".
═══════════════════════════════════════════════════════════════════
```

---

## 🔎 GHI CHÚ CHO NGƯỜI DÙNG (Lucatx — không dán vào Claude Code)

- **Giả định đang áp:** GIỮ Footer, xóa mọi section giữa Team Sonic và Footer (gồm cả CTA đỏ
  "Sẵn sàng nâng cấp xưởng"). Nếu anh muốn **giữ lại 1 CTA báo giá cuối trang** hoặc **xóa cả footer**,
  báo để tôi sửa prompt trước khi chạy.
- **Soát kỹ Bước 1** (ảnh người → cột "chủ thể lệch tâm" để tránh crop mất mặt) và **Bước 2**
  (danh sách XÓA/GIỮ — đảm bảo Footer được đánh [GIỮ], và không có section nào render bằng JS dùng chung
  bị đụng tới). Paste cả 2 bảng về chat để tôi soát trước khi cho qua Bước 3/5.
- **Logo footer:** sau khi đã đổi header sang wordmark mới, footer nền tối có thể vẫn dùng logo cũ
  hoặc bị chìm. Đây là việc tách riêng — khi nào dọn footer thì xử (cần bản logo trắng/đảo màu).
- Toàn bộ 8 ảnh là .jpg sẵn → Bước 3 chỉ resize + nén q90, không đổi định dạng.
