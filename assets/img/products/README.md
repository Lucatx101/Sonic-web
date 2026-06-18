# Ảnh sản phẩm

## Cách thêm ảnh thật cho sản phẩm

1. Chép file ảnh vào thư mục này, ví dụ: `next-s12.jpg`, `socket-set.png`…
   (Nên dùng ảnh vuông hoặc 4:3, nền trắng, dung lượng < 300KB để tải nhanh.)
2. Mở `assets/js/products.js`, tìm sản phẩm tương ứng và điền vào trường `image`:

   ```js
   { id: "next-s12-400", code: "751205", name: "...", image: "assets/img/products/next-s12.jpg", ... }
   ```

3. Lưu lại và tải lại trang. Ảnh sẽ tự hiển thị thay cho hình minh hoạ.
   Nếu đường dẫn ảnh sai/ảnh lỗi, website **tự động** quay về hình minh hoạ SVG (không bị vỡ trang).

Bạn cũng có thể dùng **link ảnh trực tiếp** thay vì tải về:

```js
image: "https://ten-mien-cua-ban/anh/next-s12.png"
```

## Về catalog Sonic 2024

Tôi (trợ lý) **không tải được** file catalog PDF
(`a.storyblok.com/.../catalog-2024_en.pdf`) để bóc ảnh và thông số tự động, vì môi
trường chạy chặn truy cập tới host `a.storyblok.com` (chính sách network egress).

Vì vậy:
- **Thông số kỹ thuật**: đã được điền theo dữ liệu công bố của dòng Sonic NEXT
  (kích thước, số ngăn, ray bi 60kg, bánh xe 350kg, khoá trung tâm, thép sơn tĩnh điện…).
  Bạn nên đối chiếu lại với catalog và chỉnh trong `products.js` nếu cần con số chính xác tuyệt đối.
- **Ảnh sản phẩm**: hiện dùng hình minh hoạ SVG. Để có ảnh thật, hãy:
  - Tải ảnh từ catalog/website Sonic rồi bỏ vào thư mục này, **hoặc**
  - Gửi cho tôi các ảnh (hoặc cho phép truy cập host `a.storyblok.com` trong cấu hình
    môi trường) và tôi sẽ gắn ảnh vào đúng từng sản phẩm.
