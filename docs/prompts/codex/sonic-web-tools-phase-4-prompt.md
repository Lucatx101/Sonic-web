# SONIC-WEB — TOOLS PHASE 4: DỤNG CỤ CHUYÊN DỤNG Ô TÔ

Tiếp tục làm việc bằng **Codex Work locally** trên repository:

```text
/Users/lucatxtruong/Sonic-web
```

Branch:

```text
claude/epic-knuth-rtyfc5
```

Tools Phase 3 đã hoàn thành, review, commit và push. Phase 4 triển khai nhóm **Dụng cụ chuyên dụng ô tô** theo ứng dụng sửa chữa, không sao chép bố cục lộn xộn của catalog và không tạo card riêng cho mọi chi tiết nhỏ.

---

## 1. Kiểm tra nhanh trước khi làm

Chạy:

```bash
git branch --show-current
git status --short
git log -5 --decorate --oneline
git fetch origin
```

Nếu local thiếu commit mới và working tree sạch:

```bash
git pull --ff-only origin claude/epic-knuth-rtyfc5
```

`output/` và `tmp/` là file tạm ngoài scope. Không sửa, xóa, add hoặc commit.

Nếu sai branch, có conflict, branch diverged hoặc có diff chưa rõ nguồn gốc thì báo và dừng.

---

## 2. Mục tiêu

Hoàn thiện category:

```text
Dụng cụ chuyên dụng ô tô
```

Nguồn nội dung thuộc phần specialty tools của catalog Sonic 2026, phạm vi nội bộ trang 108–112.

Trình bày theo **công việc sửa chữa thực tế**, để khách hàng gara dễ tìm sản phẩm.

Không trình bày theo thứ tự từng trang catalog.

Không triển khai mỗi SKU thành một family riêng nếu nhiều sản phẩm có cùng mục đích sử dụng.

---

## 3. Quy tắc frontend bắt buộc

Tuyệt đối không render ra frontend:

- số trang catalog;
- `Catalog page`, `Catalog pages`;
- `sourcePages`;
- số lượng product family;
- tổng SKU;
- các dòng kiểu `X PRODUCT FAMILIES · X SKU`;
- metadata phục vụ kiểm chứng dữ liệu.

Nếu cần dùng nguồn trang trong data nội bộ, chỉ giữ để kiểm chứng và không render.

Không dùng từ:

```text
biến thể
```

Nếu cần mô tả nhiều lựa chọn, dùng:

```text
chủng loại
```

Frontend phải dùng tiếng Việt tự nhiên. Không trộn Anh–Việt trong title nếu có thể dịch chính xác.

Giữ nguyên các thuật ngữ kỹ thuật phổ biến như Sonic, SKU, VAG, Audi, AdBlue khi cần thiết.

---

## 4. Phân nhóm theo ứng dụng

Tổ chức sản phẩm vào khoảng 7 nhóm sau. Có thể tinh chỉnh tên nhóm để tự nhiên hơn nhưng không thay đổi logic lớn.

### 1. Tháo lắp nội thất và chi tiết thân xe

Bao gồm:

- bộ tháo nội thất;
- bộ nạy;
- thanh nạy;
- móc tháo lắp;
- dao cạo;
- dụng cụ tháo gioăng, phớt hoặc chi tiết trang trí;
- dụng cụ tháo khớp cầu nếu phù hợp.

### 2. Dầu, lọc dầu và đường ống

Bao gồm:

- dụng cụ tháo lọc dầu;
- bộ cốc lọc dầu;
- bộ tháo ốc xả dầu;
- dụng cụ kẹp ống;
- dụng cụ bịt đường ống;
- dụng cụ kiểm tra hoặc xử lý chất lỏng liên quan.

### 3. Hệ thống phanh

Bao gồm:

- bộ ép piston phanh;
- bộ bảo dưỡng cùm phanh;
- dụng cụ phanh khí nén;
- bộ đầu chuyển phanh;
- dụng cụ làm sạch hoặc kiểm tra phanh;
- dụng cụ kiểm tra dầu phanh.

### 4. Động cơ, kim phun, puly và vòng bi

Bao gồm:

- dụng cụ tháo kim phun;
- bộ làm sạch đế kim phun;
- dụng cụ puly máy phát;
- dụng cụ puly giảm chấn;
- bộ cảo;
- dụng cụ vòng bi;
- dụng cụ khớp trục;
- dụng cụ căn chỉnh ly hợp;
- dụng cụ liên quan động cơ phù hợp.

### 5. Bánh xe và lốp

Bao gồm:

- bộ tháo ốc chống trộm;
- bộ khóa ốc bánh xe;
- dụng cụ tách moay-ơ hoặc ổ bi bánh xe;
- dụng cụ sửa lốp;
- đồng hồ đo lốp;
- dụng cụ đo độ sâu gai lốp;
- kìm tháo chì cân bằng.

### 6. Kiểm tra, đo lường và chẩn đoán

Bao gồm:

- bộ kiểm tra áp suất;
- bộ kiểm tra độ nén động cơ;
- bộ kiểm tra mạch điện;
- đồng hồ đo lưu lượng common rail;
- bơm chân không;
- khúc xạ kế;
- dụng cụ kiểm tra nhiên liệu, điều hòa hoặc chất lỏng;
- các bộ đo kiểm chuyên dụng khác.

### 7. Điện, bấm cos và tán rive

Bao gồm:

- bộ kìm bấm cos;
- đầu bấm thay thế;
- kìm tán rive;
- kìm tán đai ốc;
- dụng cụ xử lý đầu nối điện;
- sản phẩm điện chuyên dụng phù hợp.

Nếu một sản phẩm có thể thuộc nhiều nhóm, chọn nhóm phù hợp nhất với cách khách hàng gara thường tìm kiếm. Không lặp SKU chỉ để xuất hiện ở nhiều nhóm.

---

## 5. Xác minh dữ liệu

Đọc nguồn từ branch chỉ đọc:

```text
origin/catalog-temp
```

Nguồn:

```text
assets/Sonic Catalogue 2026.pdf
data/products.json
data/catalog_pages.json
data/images_manifest.json
ảnh extracted từ catalog
```

Chỉ đọc bằng:

```bash
git show origin/catalog-temp:<path>
git ls-tree origin/catalog-temp:<path>
```

Có thể xuất file tạm ra `/tmp`.

Không checkout, switch, merge hoặc cherry-pick `catalog-temp`.

Trước khi sửa:

- lập inventory SKU thuộc specialty tools;
- kiểm tra duplicate;
- kiểm tra SKU thiếu trong JSON;
- đối chiếu tên, số chi tiết và mô tả ứng dụng;
- xác định sản phẩm có ảnh extracted;
- xác định ảnh cần crop;
- xác định sản phẩm dùng chung ảnh.

Không bịa compatibility, hãng xe áp dụng, thông số, số chi tiết, chức năng hoặc phụ kiện đi kèm.

Nếu chưa xác minh được, để `null`, `[]`, `verified:false` hoặc không render.

---

## 6. Chiến lược sản phẩm

Không cần detail page cho mọi SKU.

### Sản phẩm nên có card/detail riêng

Ưu tiên:

- bộ dụng cụ hoàn chỉnh;
- sản phẩm có nhiều thành phần;
- sản phẩm có công dụng cần giải thích;
- sản phẩm có ảnh rõ và thông tin đủ;
- sản phẩm nổi bật trong từng nhóm ứng dụng.

### Sản phẩm nhỏ hoặc gần giống nhau

Có thể nhóm thành một product family hoặc danh sách compact nếu:

- cùng mục đích sử dụng;
- chỉ khác kích thước/chủng loại;
- dùng chung ảnh;
- không cần một trang chi tiết riêng.

Nếu Phase 3 đã có:

```text
tool-product.html
assets/js/tool-product.js
```

hãy mở rộng renderer hiện tại, không tạo thêm một detail page cạnh tranh.

---

## 7. Ảnh

Mục tiêu Phase 4:

```text
khoảng 7 ảnh đại diện nhóm ứng dụng
```

Ưu tiên kiểm tra ảnh extracted trước. Chỉ crop PDF khi không có asset phù hợp.

Mỗi nhóm dùng một ảnh đại diện thật từ catalog:

1. Tháo lắp nội thất và chi tiết thân xe
2. Dầu, lọc dầu và đường ống
3. Hệ thống phanh
4. Động cơ, kim phun, puly và vòng bi
5. Bánh xe và lốp
6. Kiểm tra, đo lường và chẩn đoán
7. Điện, bấm cos và tán rive

Có thể bổ sung ảnh riêng cho một số sản phẩm detail quan trọng nếu thực sự cần, nhưng tránh tăng số lượng không cần thiết.

Yêu cầu:

- không dùng ảnh web hoặc ảnh AI;
- không tạo composite giả;
- không dùng ảnh sản phẩm khác làm đại diện sai;
- crop sạch, hạn chế text catalog;
- giữ đúng tỷ lệ;
- chuẩn hóa canvas;
- tối ưu dung lượng;
- metadata nội bộ phản ánh shared image đúng.

Asset namespace:

```text
assets/products/tools/specialty/
```

---

## 8. Data architecture

Mở rộng namespace Tools hiện tại:

```js
const TOOLS_DATA = { ... };
```

Không tạo data namespace cạnh tranh.

Schema tham chiếu:

```js
{
  id: "specialty-tools",
  name: "Dụng cụ chuyên dụng ô tô",
  groups: [
    {
      id: "brake-service",
      name: "Hệ thống phanh",
      description: "...",
      image: "...",
      products: [
        {
          sku: "801018",
          name: "Bộ bảo dưỡng cùm phanh 18 chi tiết",
          description: "...",
          image: "...",
          detailEnabled: true,
          specs: [],
          compatibility: [],
          verified: true
        }
      ]
    }
  ]
}
```

Có thể điều chỉnh schema để phù hợp kiến trúc Phase 3.

Yêu cầu:

- IDs duy nhất;
- SKU duy nhất;
- không render dữ liệu chưa xác minh;
- title tiếng Việt tự nhiên;
- giữ nguyên SKU;
- không hardcode dữ liệu sản phẩm trong HTML;
- không dùng `fetch()`, XHR hoặc JSON import.

---

## 9. Giao diện

Giữ nguyên layout Phase 1–3 đã được review.

Khi chọn category `Dụng cụ chuyên dụng ô tô`, hiển thị:

1. Intro ngắn cho category.
2. Điều hướng 7 nhóm ứng dụng.
3. Grid sản phẩm hoặc product family theo nhóm đang chọn.
4. Detail/CTA theo pattern hiện tại.

### Điều hướng nhóm ứng dụng

Có thể dùng tabs, pills, category cards nhỏ hoặc anchor navigation.

Yêu cầu:

- rõ ràng;
- keyboard accessible;
- responsive;
- không tạo chip giả không có chức năng;
- active state rõ;
- không quá nhiều text.

### Product cards

Mỗi card gồm:

- ảnh;
- tên tiếng Việt;
- SKU;
- mô tả ứng dụng ngắn;
- CTA phù hợp.

Không hiển thị:

- giá;
- tồn kho;
- nút đặt hàng;
- số trang catalog;
- family count;
- SKU count;
- từ `biến thể`.

### Detail

Dùng detail page hiện tại nếu sản phẩm được đánh dấu `detailEnabled`.

Chỉ hiển thị:

- thông tin xác minh;
- thành phần bộ nếu có;
- ứng dụng;
- thông số thực sự có nguồn;
- CTA báo giá/tư vấn.

Fallback SKU không tồn tại phải hoạt động an toàn.

---

## 10. Thuật ngữ tiếng Việt

Dịch tên dụng cụ theo cách dùng phổ biến trong ngành sửa chữa ô tô Việt Nam.

Quy ước gợi ý:

```text
Pry bar = Thanh nạy
Puller = Cảo
Oil filter wrench = Dụng cụ tháo lọc dầu
Brake caliper service set = Bộ bảo dưỡng cùm phanh
Injector = Kim phun
Pulley = Puly
Bearing = Vòng bi
Wheel nut lock set = Bộ tháo ốc chống trộm bánh xe
Circuit tester = Dụng cụ kiểm tra mạch điện
Compression test set = Bộ kiểm tra độ nén
Crimping plier = Kìm bấm cos
Riveter = Kìm tán rive
```

Nếu một thuật ngữ chuyên môn không có bản dịch Việt rõ ràng, có thể giữ tiếng Anh trong ngoặc sau tên tiếng Việt.

Không dịch máy móc làm sai công dụng.

---

## 11. CTA

Giữ CTA hiện có:

- Yêu cầu báo giá
- Tư vấn lựa chọn
- Hotline
- Zalo

CTA phải truyền đúng SKU, tên sản phẩm và tên nhóm ứng dụng nếu cần.

Không thêm giỏ hàng hoặc checkout.

---

## 12. Protected scope

Không sửa canonical data hoặc renderer của:

- Tủ đồ nghề NEXT;
- NEXT MSS;
- MSS+;
- Sonic Foam System.

Không refactor navigation chung.

Không enable mục `Dụng cụ` trong menu ở Phase 4.

Navigation chỉ enable sau khi toàn bộ module Tools hoàn thành và review xong.

---

## 13. Validation

### Data

- không duplicate SKU;
- không SKU ngoài scope specialty tools;
- group IDs duy nhất;
- product IDs/SKU hợp lệ;
- image path tồn tại hoặc `null`;
- related product không trỏ sai;
- không dữ liệu giả.

### Wording/frontend

- không còn `Catalog page` hoặc số trang nguồn;
- không render `sourcePages`;
- không family count/SKU count ở heading;
- không có từ `biến thể`;
- title tiếng Việt tự nhiên;
- không trộn tiếng Anh không cần thiết.

### UI/JS

- 7 nhóm ứng dụng hoạt động;
- active state rõ;
- product cards render đúng;
- detail hoạt động cho sản phẩm được chọn;
- CTA đúng SKU;
- fallback an toàn;
- desktop/mobile;
- không horizontal overflow;
- không lỗi JavaScript;
- chạy bằng `file://`.

### Git

Chạy:

```bash
git diff --check
git diff --stat
git status --short
```

---

## 14. Kết thúc task

Báo ngắn gọn:

1. Tổng SKU đã xác minh.
2. Số nhóm ứng dụng.
3. Số product card/detail.
4. Số ảnh reused/cropped/shared.
5. File đã sửa/thêm.
6. Warning hoặc dữ liệu chưa xác minh.
7. Validation.
8. `git diff --stat`.
9. `git status --short`.

Không commit.

Không push.

Dừng để chờ review.
