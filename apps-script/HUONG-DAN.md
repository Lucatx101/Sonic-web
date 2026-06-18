# Kết nối form báo giá với Google Sheet (miễn phí)

Form trên website sẽ gửi dữ liệu tới một **Google Apps Script Web App**, script này
ghi từng yêu cầu vào một **Google Sheet**. Hoàn toàn miễn phí, không giới hạn số lead.

## Bước 1 — Tạo Google Sheet
1. Vào [sheets.new](https://sheets.new) để tạo một bảng tính mới.
2. Đặt tên tuỳ ý, ví dụ *"Sonic VN — Leads"*.

## Bước 2 — Dán Apps Script
1. Trong Google Sheet vừa tạo: menu **Extensions → Apps Script**.
2. Xoá code mẫu, **dán toàn bộ nội dung file [`Code.gs`](./Code.gs)** vào.
3. (Tuỳ chọn) Sửa dòng `var NOTIFY_EMAIL = "";` thành email của bạn để nhận
   email thông báo mỗi khi có lead mới. Ví dụ: `var NOTIFY_EMAIL = "ban@email.com";`
4. Bấm **Save** (biểu tượng đĩa mềm).

## Bước 3 — Deploy thành Web App
1. Góc phải trên: **Deploy → New deployment**.
2. Bấm biểu tượng bánh răng → chọn **Web app**.
3. Cấu hình:
   - **Description**: `Sonic VN form` (tuỳ ý)
   - **Execute as**: **Me** (chính bạn)
   - **Who has access**: **Anyone**  ← *bắt buộc để website gọi được*
4. Bấm **Deploy**. Lần đầu Google sẽ yêu cầu **Authorize access** → chọn tài khoản
   → "Advanced" → "Go to ... (unsafe)" → **Allow**. (Đây là script của chính bạn nên an toàn.)
5. Copy **Web app URL** — dạng `https://script.google.com/macros/s/AKfycb..../exec`.

## Bước 4 — Dán URL vào website
Mở file `assets/js/config.js`, điền vào biến `formEndpoint`:

```js
formEndpoint: "https://script.google.com/macros/s/AKfycb..../exec",
```

Lưu lại và tải lại trang. Gửi thử một yêu cầu — dữ liệu sẽ xuất hiện trong
tab **Leads** của Google Sheet.

> Kiểm tra nhanh: mở Web app URL trên trình duyệt, nếu thấy
> `{"ok":true,"service":"Sonic Việt Nam lead endpoint"}` là deployment hoạt động.

## Cập nhật code sau này
Mỗi khi sửa `Code.gs`, vào **Deploy → Manage deployments → (bút chì) → Version: New version → Deploy**.
URL giữ nguyên, không cần đổi lại trong `config.js`.

---

## Phương án thay thế: Formspree
Nếu không muốn dùng Google, có thể dùng [Formspree](https://formspree.io) (có gói miễn phí):
1. Tạo form trên Formspree, lấy endpoint dạng `https://formspree.io/f/xxxxxxx`.
2. Dán vào `CONFIG.formspreeEndpoint` trong `config.js`.
3. Trong `assets/js/main.js`, đặt `USE_FORMSPREE = true` (xem chú thích ở hàm `submitLead`).

## Nếu không cấu hình gì
Để trống `formEndpoint` thì nút gửi sẽ tự **mở ứng dụng email** (mailto) với nội dung
điền sẵn gửi tới địa chỉ trong `CONFIG.email`. Form vẫn dùng được ngay, chỉ là thủ công hơn.
