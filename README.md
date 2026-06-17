# Sonic Việt Nam — Website giới thiệu sản phẩm

Website tĩnh giới thiệu sản phẩm **Sonic Equipment** dành cho đại lý phân phối tại Việt Nam,
lấy cảm hứng từ [sonic-equipment.com](https://www.sonic-equipment.com/en-nl).

Toàn bộ nội dung bằng **tiếng Việt**, không phụ thuộc framework hay tài nguyên ảnh bên ngoài
(các hình minh họa sản phẩm được vẽ bằng SVG trong mã nguồn).

## Tính năng

- **Trang chủ** (`index.html`): hero, danh mục sản phẩm, sản phẩm nổi bật, giới thiệu Sonic Foam System (SFS), lý do chọn Sonic, giới thiệu đại lý và CTA.
- **Trang sản phẩm** (`products.html`): danh mục đầy đủ với **bộ lọc theo nhóm**, **xem nhanh (modal)** và liên kết sang trang chi tiết.
- **Trang chi tiết** (`product.html?id=...`): trang riêng cho từng sản phẩm gồm thông số, mô tả, nút báo giá và **sản phẩm liên quan**.
- **Trang liên hệ** (`contact.html`): thông tin liên hệ + biểu mẫu yêu cầu báo giá; khi gửi sẽ **mở ứng dụng email** với nội dung điền sẵn (mailto).
- Giao diện **responsive** (máy tính, máy tính bảng, điện thoại) với menu mobile.
- Phối màu theo thương hiệu Sonic: **đỏ / đen / trắng**.

## Cấu trúc

```
Sonic-web/
├── index.html          # Trang chủ
├── products.html       # Danh mục sản phẩm + bộ lọc + xem nhanh
├── product.html        # Trang chi tiết 1 sản phẩm (?id=...)
├── contact.html        # Liên hệ & biểu mẫu báo giá (mailto)
├── assets/
│   ├── css/styles.css  # Toàn bộ giao diện
│   ├── js/products.js  # Dữ liệu danh mục & sản phẩm (chỉnh sửa tại đây)
│   └── js/main.js      # Render, bộ lọc, modal, menu, form
└── README.md
```

## Chạy thử

Chỉ cần mở `index.html` bằng trình duyệt. Hoặc chạy một web server tĩnh:

```bash
python3 -m http.server 8000
# Mở http://localhost:8000
```

## Tùy chỉnh nội dung

- **Thêm/sửa sản phẩm & danh mục:** chỉnh mảng `PRODUCTS` và `CATEGORIES` trong `assets/js/products.js`.
- **Thông tin liên hệ:** cập nhật số điện thoại, email, địa chỉ trong phần footer của các trang `.html` và trong `contact.html`.
- **Màu sắc / thương hiệu:** chỉnh các biến CSS ở đầu `assets/css/styles.css` (`:root`).

## Ghi chú

Đây là website demo phục vụ giới thiệu sản phẩm. Hình ảnh sản phẩm là minh họa SVG;
khi triển khai chính thức nên thay bằng ảnh thật và bổ sung backend cho biểu mẫu liên hệ.
Sonic Equipment là thương hiệu của Sonic Equipment B.V. (Hà Lan).
