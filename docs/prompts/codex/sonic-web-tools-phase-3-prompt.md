# SONIC-WEB — TOOLS PHASE 3: TOOLSETS & MOBILE SOLUTIONS

Làm việc bằng **Codex Work locally** trên repository:

```text
/Users/lucatxtruong/Sonic-web
```

Branch bắt buộc:

```text
claude/epic-knuth-rtyfc5
```

Phase 1 và Phase 2 đã hoàn thành. Task này triển khai tiếp hai nhóm:

- **Bộ dụng cụ**
- **Vali và giải pháp dụng cụ di động**

Phạm vi catalog: pages **98–107**.

Không làm lại Phase 1/2 và không sửa các module protected ngoài scope.

---

## 1. Startup checks

Chạy:

```bash
git branch --show-current
git status --short
git log -5 --decorate --oneline
git fetch origin
```

Nếu working tree sạch nhưng local thiếu commit mới từ remote:

```bash
git pull --ff-only origin claude/epic-knuth-rtyfc5
```

`output/` và `tmp/` là file tạm ngoài scope:

- không sửa;
- không xóa;
- không add;
- không commit.

Nếu:

- sai branch;
- Phase 2 chưa được commit/push;
- có diff ngoài scope chưa rõ nguồn gốc;
- branch diverged;
- có conflict;
- pull không thể fast-forward;

thì báo lại và dừng.

Không reset, clean, rebase, force push hoặc ghi đè thay đổi của agent khác.

---

## 2. Mục tiêu Phase 3

Triển khai dữ liệu, hình ảnh và UI thực tế cho:

### A. Bộ dụng cụ

Bao gồm các nhóm chính trong pages 98–101:

- BMCS toolsets;
- VDE tools và VDE kits;
- socket/bit/wrench sets;
- mixed toolsets;
- các bộ dụng cụ độc lập có SKU riêng.

### B. Vali và giải pháp dụng cụ di động

Bao gồm pages 103–107:

- carry cases;
- portable trolley cases;
- topboxes;
- portable toolbox;
- modular tool case;
- tool bags.

Phase này cần:

1. Product cards data-driven.
2. Group hợp lý các sản phẩm dùng chung hình hoặc chỉ khác cấu hình.
3. Generic product detail page cho sản phẩm độc lập có đủ dữ liệu.
4. Hình ảnh đã tối ưu.
5. CTA báo giá/tư vấn đúng SKU hoặc đúng chủng loại.
6. Responsive và chạy bằng `file://`.

Không triển khai specialty tools pages 108–112 trong Phase 3.

---

## 3. Nguồn dữ liệu

Branch dữ liệu chỉ đọc:

```text
origin/catalog-temp
```

Nguồn chính:

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

Có thể xuất file phân tích ra `/tmp`.

Không:

- checkout/switch sang `catalog-temp`;
- merge/cherry-pick branch dữ liệu;
- copy toàn bộ PDF hoặc kho ảnh vào working branch;
- tạo artifact phân tích trong repo;
- dùng ảnh web;
- dùng ảnh AI;
- dùng remote asset.

---

## 4. Quick verification trước khi sửa

Xác minh nhanh pages 98–107:

- tổng SKU;
- SKU theo nhóm;
- SKU trùng;
- SKU thiếu trong `products.json`;
- tên/spec mâu thuẫn giữa PDF và JSON;
- sản phẩm có ảnh extracted;
- sản phẩm cần crop từ PDF;
- sản phẩm dùng chung ảnh;
- sản phẩm đủ dữ liệu để có detail page;
- sản phẩm chỉ nên nằm trong một family/chủng loại.

Dùng script cho phần lặp lại. Không gõ thủ công toàn bộ SKU.

Nếu inventory hoặc mapping không thể xác minh đáng tin cậy thì báo sai lệch và dừng trước khi sửa repository.

Field chưa xác minh phải để `null`, `[]`, `verified:false` hoặc không render.

---

## 5. Quy tắc frontend đã chốt

Tuyệt đối không render ra frontend:

- `Catalog page` / `Catalog pages`;
- số trang nguồn;
- `Product families`;
- tổng family;
- tổng SKU;
- tổng số chủng loại;
- metadata phục vụ kiểm chứng.

Thông tin như `sourcePages` chỉ giữ nội bộ trong data nếu cần.

Không dùng từ:

```text
biến thể
variant
variants
```

Trên frontend, khi thật sự cần, dùng:

```text
chủng loại
```

Frontend mặc định tiếng Việt. Giữ nguyên các thuật ngữ thương hiệu/kỹ thuật cần thiết:

```text
Sonic
NEXT
BMCS
VDE
SKU
```

Không để title chính trộn tiếng Anh–Việt thiếu nhất quán.

Quy ước dịch:

```text
Toolsets = Bộ dụng cụ
Toolcase / Carry case = Vali dụng cụ
Portable case trolley = Vali dụng cụ có bánh xe
Topbox = Hộp dụng cụ
Portable toolbox = Hộp dụng cụ di động
Tool bag = Túi dụng cụ
Filled = Kèm dụng cụ / Bộ dụng cụ hoàn chỉnh
Empty = Không kèm dụng cụ
```

Có thể điều chỉnh câu chữ để tự nhiên hơn nhưng không làm sai sản phẩm.

---

## 6. Mô hình nội dung

Không áp dụng một kiểu cứng cho toàn bộ pages 98–107.

Dùng hai dạng:

### A. Standalone product

Dành cho sản phẩm có:

- SKU riêng;
- ảnh rõ;
- mô tả/spec đủ;
- giá trị thương mại độc lập.

Hiển thị bằng product card và có thể có detail page.

### B. Product family / nhóm chủng loại

Dành cho sản phẩm:

- dùng chung ảnh;
- chỉ khác empty/filled;
- chỉ khác số lượng dụng cụ;
- khác cấu hình nhỏ;
- hợp lý hơn khi trình bày trong cùng một nhóm.

Ví dụ:

- tool bag: empty / basic 84-pcs / advanced 112-pcs;
- carry case: empty / filled;
- topbox: with lid / without lid;
- một family BMCS có thể dùng ảnh đại diện chung nếu ảnh catalog không đủ tách riêng.

Mỗi family có:

- một ảnh đại diện;
- tên tiếng Việt;
- mô tả ngắn;
- danh sách chủng loại/SKU;
- CTA đúng context.

Không tạo card giả cho từng sản phẩm nếu ảnh hoặc dữ liệu không đủ.

---

## 7. Image plan

Ngân sách mục tiêu: khoảng **15 ảnh unique** cho Phase 3.

Phân bổ tham chiếu:

```text
4 ảnh: BMCS toolsets, pages 98–99
4 ảnh: VDE và mixed toolsets, pages 100–101
2 ảnh: carry case và trolley case, page 103
3 ảnh: topboxes/portable toolbox, pages 104–105
1 ảnh: modular tool case, page 106
1 ảnh: tool bag, page 107
```

Đây là target tối ưu công sức, không phải số bắt buộc tuyệt đối.

Nguyên tắc:

- kiểm tra ảnh extracted trước;
- chỉ crop PDF khi không có asset phù hợp;
- không crop từng chi tiết nhỏ trong một bộ;
- không tạo composite giả;
- không dùng ảnh sai SKU;
- có thể dùng shared image khi catalog thực sự dùng chung hình;
- chuẩn hóa canvas/aspect ratio;
- crop sạch, hạn chế chữ catalog;
- không làm méo sản phẩm.

Asset namespace:

```text
assets/products/tools/toolsets/
assets/products/tools/mobile-solutions/
```

Tên file rõ nghĩa, dạng kebab-case.

---

## 8. Data architecture

Tiếp tục mở rộng namespace hiện tại:

```text
data/tools-data.js
```

Không tạo data namespace cạnh tranh.

Schema tham chiếu cho standalone product:

```js
{
  sku: "712404",
  type: "product",
  categoryId: "mobile-solutions",
  name: "Vali dụng cụ mô-đun 124 chi tiết",
  description: "...",
  image: "...",
  specs: {},
  features: [],
  includedItems: [],
  verified: true,
  detailEnabled: true
}
```

Schema tham chiếu cho family:

```js
{
  id: "tool-bag-series",
  type: "family",
  categoryId: "mobile-solutions",
  name: "Túi dụng cụ Sonic",
  description: "...",
  image: "...",
  sharedImage: true,
  products: [
    {
      sku: "47799",
      name: "Túi dụng cụ không kèm dụng cụ"
    },
    {
      sku: "708401",
      name: "Túi dụng cụ 84 chi tiết"
    },
    {
      sku: "711201",
      name: "Túi dụng cụ 112 chi tiết"
    }
  ]
}
```

Có thể điều chỉnh schema theo code hiện tại, nhưng phải:

- data-driven;
- không hardcode specs trong HTML;
- SKU duy nhất;
- units rõ ràng;
- không bịa dữ liệu.

---

## 9. Product detail page

Phase 3 có thể tạo generic detail page riêng:

```text
tool-product.html?id=<SKU>
```

Chỉ bật detail cho sản phẩm có đủ dữ liệu và ảnh phù hợp.

Detail page gồm:

- breadcrumb tối giản;
- ảnh chính;
- tên sản phẩm tiếng Việt;
- SKU;
- mô tả đã xác minh;
- thông số;
- tính năng;
- danh sách thành phần nếu catalog có;
- CTA yêu cầu báo giá;
- hotline/Zalo hiện có;
- related items chỉ khi mapping chắc chắn.

Không hiển thị:

- catalog page;
- tổng family/SKU;
- dữ liệu chưa xác minh;
- giá;
- tồn kho;
- giỏ hàng;
- checkout.

Invalid hoặc thiếu `id` phải có fallback sạch, không lỗi JS.

Nếu một family dùng shared image và mỗi SKU không có nội dung detail khác biệt đáng kể, không tạo detail riêng cho từng SKU. Khi đó card mở family/chủng loại ngay trên `tools.html`.

---

## 10. UI trên `tools.html`

Giữ nguyên flow Phase 1/2 đã được review:

```text
Hero
→ Intro hai cột
→ Grid 9 category cards
→ Category content
```

Mở rộng hai category:

```text
Bộ dụng cụ
Vali và giải pháp dụng cụ di động
```

### Product grid

Mỗi card gồm:

- ảnh;
- tên sản phẩm/family;
- SKU nếu là standalone product;
- mô tả ngắn;
- CTA `Xem chi tiết` hoặc `Xem các chủng loại`;
- CTA báo giá/tư vấn.

Không hiển thị metadata kỹ thuật ở đầu category.

Không hiển thị count family/SKU.

### Family panel

Nếu card là family:

- mở panel/accordion gọn;
- liệt kê các SKU/chủng loại;
- cho phép CTA theo SKU;
- không dùng bảng quá nặng nếu chỉ có 2–4 chủng loại.

### Responsive

- desktop: grid cân đối;
- tablet/mobile: card dễ đọc và bấm;
- ảnh không méo;
- không horizontal overflow;
- CTA không tràn.

---

## 11. Search/filter

Phase 3 chưa cần global search toàn module nếu chưa có từ Phase 2.

Không thêm search/filter nửa vời.

Chỉ giữ interaction category/family rõ ràng.

Global search và filter hoàn chỉnh sẽ xử lý ở phase cuối.

---

## 12. CTA

CTA phải giữ đúng context:

- standalone product: tên + SKU;
- family: tên family;
- SKU cụ thể trong family: tên + SKU.

Dùng:

```text
Xem chi tiết
Xem các chủng loại
Yêu cầu báo giá
Tư vấn lựa chọn
```

Không dùng nút đặt hàng.

Không tự bịa hotline/Zalo; tái sử dụng dữ liệu hiện có.

---

## 13. JavaScript

Mở rộng renderer hiện tại:

```text
assets/js/tools.js
```

Nếu tạo detail page, có thể thêm:

```text
assets/js/tool-product.js
```

Yêu cầu:

- render data-driven;
- không `fetch()`;
- không XHR;
- không dynamic import;
- không framework;
- không dependency mới;
- chạy bằng `file://`;
- fallback an toàn;
- không lỗi khi category chưa có data.

---

## 14. Protected scope

Không sửa canonical data hoặc renderer của:

- Tủ đồ nghề NEXT;
- NEXT MSS;
- MSS+;
- Sonic Foam System.

Không sửa Phase 2 trừ khi cần tích hợp tối thiểu với renderer chung của Tools.

Không enable navigation `Dụng cụ` trong Phase 3.

Không refactor global navigation/header/footer.

---

## 15. Validation

### Data

- chỉ pages 98–107;
- SKU duy nhất;
- không SKU ngoài scope;
- image paths tồn tại;
- shared image metadata đúng;
- detailEnabled chỉ bật khi đủ dữ liệu;
- không dữ liệu giả.

### Frontend wording

Không còn trên frontend:

```text
Catalog page
Catalog pages
Product families
biến thể
variant
variants
```

Không hiển thị count family/SKU ở heading.

Title và description phải là tiếng Việt tự nhiên.

### Assets

- khoảng 15 ảnh unique;
- không ảnh web/AI;
- không copy toàn bộ PDF;
- crop sạch;
- dung lượng hợp lý.

### UI/JS

- hai category Phase 3 render đúng;
- product/family cards hoạt động;
- detail page hoạt động với SKU hợp lệ;
- invalid SKU fallback sạch;
- CTA đúng context;
- desktop/mobile;
- `file://`;
- không lỗi console;
- không ảnh remote.

### Git

Chạy cuối task:

```bash
git diff --check
git diff --stat
git status --short
```

---

## 16. Báo cáo cuối

Báo ngắn gọn:

1. Startup Git status.
2. Tổng SKU pages 98–107 đã xác minh.
3. Số standalone products và số families.
4. Số detail-enabled products.
5. Số ảnh:
   - reused extracted;
   - cropped từ PDF;
   - shared.
6. File đã sửa/thêm.
7. Data discrepancies/warnings.
8. Validation đã chạy.
9. `git diff --stat`.
10. `git status --short`.

Không commit.

Không push.

Dừng để chờ review.
