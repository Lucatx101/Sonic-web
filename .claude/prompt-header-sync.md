# PROMPT — Đồng bộ Header mới ra toàn site


⚠️ SESSION MỚI: KHÔNG có context chat trước. Prompt này là nguồn chân lý DUY NHẤT.
KHÔNG suy đoán, KHÔNG tự thêm element ngoài những gì ghi ở đây.

Repo Sonic-web, branch claude/epic-knuth-rtyfc5. Đọc CLAUDE.md trước.
git branch --show-current ; git log --oneline -8.

═══════════════════════════════════════════════════════════════════
BỐI CẢNH
═══════════════════════════════════════════════════════════════════
index.html đã có header MỚI (gọi là "header chuẩn"):
  - Logo: wordmark "sonic" (PNG thật, chữ "o" chấm đỏ), KHÔNG phải icon "S đỏ trong ô vuông".
  - Nav: Trang chủ | Sản phẩm ▾ | Về chúng tôi | Liên hệ (giữ dropdown Sản phẩm hiện có).
  - Bên phải nav: 3 icon inline SVG (Search → products.html; Facebook → facebook.com/Sonictoolsvietnam/
    target blank; Instagram → instagram.com/sonic.equipment/ target blank). KHÔNG có nút "Nhận tư vấn"
    hay "Yêu cầu báo giá" ở header.
  - Utility bar trên cùng: Hotline · Địa chỉ · Giờ làm việc (thẳng hàng) · "Sonic Equipment Vietnam"
    (chữ "Vietnam" màu đỏ #E2231A) — tất cả thẳng hàng ngang, không wrap.

Các trang khác (products.html, product.html, eva-foam.html, contact.html, mss-product.html,
next-mss.html) vẫn còn header CŨ (icon "S đỏ" + nút "Nhận tư vấn" / "Yêu cầu báo giá").
Cần THAY header cũ bằng header chuẩn của index.html.

═══════════════════════════════════════════════════════════════════
MỤC TIÊU
═══════════════════════════════════════════════════════════════════
Copy header chuẩn từ index.html → áp vào TẤT CẢ các trang còn lại.
Sau khi xong: mọi trang có header trông y hệt index.html.

DANH SÁCH TRANG CẦN ĐỒng BỘ (xác minh lại ở Bước 0):
  products.html, product.html, eva-foam.html, contact.html,
  mss-product.html (Codex), next-mss.html (Codex)

═══════════════════════════════════════════════════════════════════
RÀNG BUỘC KỸ THUẬT
═══════════════════════════════════════════════════════════════════
- Site chạy file:// → header được nhúng trực tiếp trong mỗi file HTML (không fetch/include).
- VERIFY trước khi sửa: đọc header thật của từng trang → BÁO cấu trúc khác nhau chỗ nào.
- Đường dẫn tương đối (href, src): index.html nằm ở root. Các trang khác cũng ở root → giữ nguyên
  đường dẫn logo, CSS, icon.
  NGOẠI LỆ: nếu có trang nằm trong thư mục con → ĐIỀU CHỈNH đường dẫn tương đối cho đúng.
  Phát hiện điều này ở Bước 0.
- Nav active: mỗi trang highlight đúng mục của nó
  (vd products.html → "Sản phẩm" đỏ, không phải "Trang chủ"). Xem index.html để hiểu cách dùng class active.
- Dropdown "Sản phẩm": COPY Y NGUYÊN dropdown html đã có từ index.html (đã làm đúng ở đó).
- 2 file Codex (mss-product.html, next-mss.html): CHỈ thay vùng header. KHÔNG đụng nội dung sản phẩm MSS.
- KHÔNG tạo file CSS mới. Icon 3 cái (Search, Facebook, Instagram) là inline SVG — copy từ index.html.
- CSS header: nếu class/style đã có trong file CSS chung → dùng lại. Nếu thiếu → thêm vào CSS chung.
  KHÔNG tạo style riêng từng trang.

═══════════════════════════════════════════════════════════════════
FILE SỬA / KHÔNG ĐỤNG
═══════════════════════════════════════════════════════════════════
SỬA (header): products.html, product.html, eva-foam.html, contact.html,
              mss-product.html, next-mss.html.
SỬA CSS: file CSS chung nếu thiếu style header mới (thêm, không tạo file mới).
ĐỌC (không sửa nội dung): index.html (nguồn header chuẩn).
KHÔNG ĐỤNG: mọi nội dung bên dưới header của từng trang, mọi file data/,
            nội dung sản phẩm MSS trong 2 file Codex, ảnh assets/*.

═══════════════════════════════════════════════════════════════════
QUY TRÌNH GATE (mỗi bước xong: git diff --stat + mô tả ngắn → DỪNG chờ "tiếp tục")
═══════════════════════════════════════════════════════════════════
BƯỚC 0 — Chuẩn bị (DỪNG chờ duyệt):
   • Liệt kê tất cả file .html trong repo (ls *.html và tìm trong thư mục con nếu có).
   • Xác định trang nào có header CŨ cần thay (dấu hiệu: icon "S đỏ" / nút "Nhận tư vấn").
   • Đọc header chuẩn từ index.html: trích markup từ <header> đến </header> (hoặc <nav>).
   • Kiểm tra đường dẫn: tất cả file ở root? Hay có file trong thư mục con (cần adjust path)?
   • BÁO BẢNG: tên file | header cũ hay mới | vị trí (root/thư mục con) | nav active cần set.
   DỪNG.

BƯỚC 1 — products.html: thay header → set nav active "Sản phẩm". git diff --stat. DỪNG.
BƯỚC 2 — product.html: thay header → set nav active "Sản phẩm". git diff --stat. DỪNG.
BƯỚC 3 — eva-foam.html: thay header → set nav active "Sản phẩm". git diff --stat. DỪNG.
BƯỚC 4 — contact.html: thay header → set nav active "Liên hệ". git diff --stat. DỪNG.
BƯỚC 5 — mss-product.html (Codex): thay header, CHỈ vùng header. git diff --stat. DỪNG.
BƯỚC 6 — next-mss.html (Codex): thay header, CHỈ vùng header. git diff --stat. DỪNG.
BƯỚC 7 — Kiểm tra chéo: mở từng trang, xác nhận logo/icon/dropdown hiển thị đúng,
   đường dẫn không broken, nav active đúng trang. BÁO kết quả. DỪNG.

Token gần hết → dừng ở bước an toàn, báo đã làm tới đâu để mở session mới tiếp.

═══════════════════════════════════════════════════════════════════
Chỉ commit khi tôi nói "commit". Chỉ push khi tôi nói "push".
═══════════════════════════════════════════════════════════════════
```

---

## 🔎 GHI CHÚ CHO NGƯỜI DÙNG (Lucatx)
- **TẠM DỪNG Codex** trước khi chạy (prompt sửa mss-product.html + next-mss.html phần header).
- **Soát BƯỚC 0** — quan trọng nhất: bảng file / header cũ-mới / path. Trang nào có
  đường dẫn khác root sẽ cần adjust src/href, Claude Code phải phát hiện ở đây.
- **Nav active**: products.html + product.html + eva-foam.html → "Sản phẩm" đỏ;
  contact.html → "Liên hệ" đỏ; mss-product.html + next-mss.html → "Sản phẩm" đỏ.
  Nếu logic active dùng JS (detect URL) thay vì class cứng → Claude Code báo, không tự sửa.
- Sau khi xong, header và utility bar đồng nhất trên toàn site.
