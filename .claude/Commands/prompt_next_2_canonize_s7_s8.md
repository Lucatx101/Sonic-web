# Prompt 2 — Tủ NEXT: chuẩn hoá ảnh S7 và S8 theo chuẩn S9 (Claude Code)

⚙️ THIẾT LẬP: Model Claude Opus 4.8 — Effort High. Set trên UI trước khi chạy.
(Dòng ⚙️ này KHÔNG dán vào Claude Code. Dán từ dưới dòng kẻ trở xuống.)

---

Repo Sonic-web, branch claude/epic-knuth-rtyfc5. Đọc CLAUDE.md trước khi làm.

═══════════════════════════════════════════════════════
NHIỆM VỤ: Chuẩn hoá kích thước ảnh tủ S7 và S8 cho đồng đều với S9
═══════════════════════════════════════════════════════

Trong grid sản phẩm products.html, ảnh tủ S7 trông TO HƠN S8 và S9 do
bounding box JPG không đồng nhất — vật thể tủ chiếm % khác nhau trong mỗi file.

Chuẩn: S9 — GIỮ NGUYÊN S9, không đụng.
Cần sửa: CHỈ S7 và S8.
Giữ nguyên: S9, S10, S11, S12, S12XD, S13, S14, S15 và mọi file khác.

Công cụ: Python + Pillow (canvas chuẩn hoá). KHÔNG đọc PDF. KHÔNG recrop từ PDF.
Kiểm tra Pillow: python3 -c "from PIL import Image; print('OK')"
Nếu lỗi: pip3 install Pillow --break-system-packages

─────────────────────────────────────────
PHƯƠNG PHÁP CHUẨN HOÁ
─────────────────────────────────────────
Mục tiêu: vật thể tủ trong ảnh S7 và S8 chiếm cùng % canvas như trong S9.

Quy trình cho từng ảnh (S7, S8):
1. Mở file JPG gốc.
2. Auto-trim viền trắng/trong suốt để lấy đúng bounding box vật thể tủ
   (dùng PIL getbbox hoặc crop theo threshold). Kiểm tra kết quả trim trước
   khi tiếp tục — nếu trim cắt mất phần tủ thì điều chỉnh threshold, báo lại.
3. Scale vật thể tủ sao cho chiều cao vật thể = X% chiều cao canvas
   (X lấy từ đo S9 ở BƯỚC 2).
4. Dán lên canvas trắng #FFFFFF cùng dimension với ảnh S9 gốc, căn giữa
   (horizontally + vertically).
5. Lưu đè file JPG gốc, quality 90.

Không dùng CSS để giả lập — phải sửa ở tầng ảnh.

─────────────────────────────────────────
FILE
─────────────────────────────────────────
ĐỌC (để đo chuẩn): ảnh S9 trong assets/products/next/
SỬA (ghi đè): ảnh S7 và S8 trong assets/products/next/
KHÔNG ĐỤNG: S9~S15, assets/products/next-landing/, assets/products/eva-foam/,
mọi file HTML, CSS, JS

═══════════════════════════════════════════════════════
QUY TRÌNH GATE-BASED
═══════════════════════════════════════════════════════

════ BƯỚC 1 — KIỂM TRA BRANCH ════
git branch --show-current → phải là claude/epic-knuth-rtyfc5. Lạ → dừng, báo.

════ BƯỚC 2 — ĐO CHUẨN S9 (DỪNG, chờ tôi duyệt) ════
Mở ảnh S9 (tất cả file S9 trong assets/products/next/ — có thể có nhiều màu):
  a. In tên file, dimension (w × h px).
  b. Dùng PIL getbbox để xác định bounding box vật thể tủ trong ảnh.
  c. Tính: chiều cao vật thể / chiều cao canvas = X%.
  d. In bảng rõ ràng:
     | file | canvas (w×h) | bbox vật thể (x,y,w,h) | vật thể chiếm % cao | vật thể chiếm % rộng |

Mở ảnh S7 và S8:
  e. In bảng tương tự như trên cho S7 và S8.
  f. So sánh trực tiếp: S7 và S8 lệch bao nhiêu % so với S9?

DỪNG. Báo tôi xem số liệu trước khi xử lý bất cứ gì.
(Tôi cần xác nhận % chuẩn S9 và mức lệch của S7/S8 trước khi đồng ý cho chạy.)

════ BƯỚC 3 — PREVIEW SCRIPT (DỪNG, chờ tôi duyệt) ════
Viết script Python chuẩn hoá S7 và S8 theo % đã đo ở BƯỚC 2.
In script ra màn hình để tôi đọc.
DỪNG. Chờ tôi xác nhận script trước khi chạy.

════ BƯỚC 4 — CHẠY (sau khi tôi duyệt BƯỚC 3) ════
Chạy script. Sau khi chạy xong:
  a. In dimension + KB của S7 và S8 MỚI.
  b. Đo lại bbox vật thể của S7 và S8 mới → in bảng so sánh với S9.
     Xác nhận % đã đồng nhất (sai lệch < 2% là chấp nhận được).
  c. Nếu sai lệch > 2% → báo, đừng tự ý chạy lại. Chờ tôi quyết.
Báo git diff --stat (chỉ 2 file ảnh thay đổi).

════ BƯỚC 5 — CHỜ LỆNH ════
Chỉ commit khi tôi nói "commit". Chỉ push khi tôi nói "push".
