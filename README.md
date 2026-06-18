# Sonic Việt Nam — Website đại lý phân phối

Website tĩnh cho **đại lý / nhà phân phối chính hãng Sonic Equipment tại Việt Nam**,
hướng tới khách hàng B2B: gara ô tô, tiệm xe máy, xưởng cơ khí, thợ chuyên nghiệp.
Lấy cảm hứng thẩm mỹ (đỏ–đen, ảnh lớn, gọn) từ [sonic-equipment.com](https://www.sonic-equipment.com/en-nl).

**Mô hình KHÔNG hiện giá** — toàn bộ điều hướng về **"Yêu cầu báo giá"** để thu thập lead.
Toàn bộ nội dung bằng **tiếng Việt**.

## Tính năng

- **Trang chủ** (`index.html`): hero nhấn mạnh "Đại lý chính hãng Sonic tại Việt Nam" với 2 CTA
  (*Xem sản phẩm* / *Nhận báo giá*), dải **3 USP** (Hàng chính hãng / Bảo hành / Giao toàn quốc),
  danh mục, sản phẩm nổi bật, Sonic Foam System, giới thiệu đại lý.
- **Trang sản phẩm** (`products.html`): bộ lọc theo nhóm, **xem nhanh (modal)**, nút **Yêu cầu báo giá** trên mỗi thẻ.
- **Trang chi tiết** (`product.html?id=...`): thông số đầy đủ, mô tả, báo giá, sản phẩm liên quan.
- **Trang liên hệ** (`contact.html`): **form báo giá B2B** (Họ tên, SĐT bắt buộc, Email, Công ty/gara,
  Sản phẩm quan tâm — tự điền khi bấm từ sản phẩm, Số lượng, Lời nhắn) với validate, loading, success/error.
- **Thanh liên hệ cố định**: dock Hotline + Zalo + Báo giá (mobile) và nút nổi Hotline/Zalo (desktop);
  thanh tiện ích trên cùng hiển thị Hotline + địa chỉ showroom + giờ làm việc.
- **Responsive** đầy đủ; phối màu thương hiệu Sonic (đỏ/đen/trắng).

## Cấu trúc

```
Sonic-web/
├── index.html              # Trang chủ
├── products.html           # Danh mục + bộ lọc + xem nhanh
├── product.html            # Trang chi tiết 1 sản phẩm (?id=...)
├── contact.html            # Liên hệ & form báo giá
├── apps-script/
│   ├── Code.gs             # Google Apps Script (doPost ghi vào Google Sheet)
│   └── HUONG-DAN.md        # Hướng dẫn deploy + lấy Web App URL
├── assets/
│   ├── css/styles.css      # Toàn bộ giao diện
│   ├── img/products/        # Ảnh sản phẩm (+ README hướng dẫn thêm ảnh)
│   └── js/
│       ├── config.js        # ★ CẤU HÌNH: URL form + thông tin liên hệ (sửa ở đây)
│       ├── products.js      # Dữ liệu danh mục & sản phẩm
│       └── main.js          # Render, bộ lọc, modal, form, thanh liên hệ
└── README.md
```

## Bắt đầu nhanh

1. **Điền thông tin liên hệ:** mở `assets/js/config.js`, sửa `hotline`, `zalo`, `email`, `showroom`…
2. **Kết nối form báo giá:** làm theo `apps-script/HUONG-DAN.md` để tạo Google Sheet + Apps Script,
   rồi dán Web App URL vào `CONFIG.formEndpoint`. (Chưa cấu hình thì form tự gửi qua email — mailto.)
3. **Thêm ảnh sản phẩm:** xem `assets/img/products/README.md`.
4. **Chạy thử:**
   ```bash
   python3 -m http.server 8000   # rồi mở http://localhost:8000
   ```

## Tùy chỉnh

- **Liên hệ (hotline/zalo/email/showroom/giờ làm việc):** chỉ sửa `assets/js/config.js` — tự áp dụng toàn site.
- **Sản phẩm & danh mục:** sửa `PRODUCTS` / `CATEGORIES` trong `assets/js/products.js`.
- **Màu sắc / thương hiệu:** sửa biến CSS ở đầu `assets/css/styles.css` (`:root`).

## Ghi chú về catalog & ảnh

File catalog PDF của Sonic (host `a.storyblok.com`) **không tải được** trong môi trường tạo site này
do chính sách chặn truy cập mạng, nên ảnh sản phẩm đang dùng **hình minh hoạ SVG** và thông số được
điền theo dữ liệu công bố của dòng Sonic NEXT. Để có ảnh/thông số chính xác từ catalog, hãy thêm ảnh
theo hướng dẫn trong `assets/img/products/README.md` hoặc cấp quyền truy cập host đó.

Sonic Equipment là thương hiệu của Sonic Equipment B.V. (Hà Lan).
