# SONIC-WEB — TOOLS PHASE 1: LANDING, HERO VÀ CATEGORY FRAMEWORK

Làm việc bằng **Codex Work locally** trên repository:

```text
/Users/lucatxtruong/Sonic-web
```

Branch bắt buộc:

```text
claude/epic-knuth-rtyfc5
```

Đây là session mới. Hãy tự kiểm tra repository và không dựa vào trạng thái từ session trước.

---

## 1. Startup checks

Chạy:

```bash
git branch --show-current
git status --short
git log -5 --decorate --oneline
git fetch origin
```

Nếu working tree sạch và local thiếu commit mới từ remote:

```bash
git pull --ff-only origin claude/epic-knuth-rtyfc5
```

Nếu:

- sai branch;
- working tree có diff chưa rõ nguồn gốc;
- branch diverged;
- có conflict;
- pull không thể fast-forward;

thì báo lại và dừng.

Không reset, clean, rebase, force push hoặc ghi đè thay đổi của agent khác.

---

## 2. Mục tiêu Phase 1

Triển khai phần nền tảng đầu tiên cho module **Dụng cụ / Tools**.

Phase này phải tạo giao diện thực tế, gồm:

1. Trang landing Tools.
2. Hero full-width.
3. Phần giới thiệu ngắn.
4. Hệ thống 9 nhóm dụng cụ.
5. 9 category cards có ảnh đại diện.
6. Category interaction/framework để các phase sau bổ sung product family và SKU.
7. Data schema ban đầu dạng `.js`.
8. Responsive desktop/mobile.
9. Chạy trực tiếp bằng `file://`.

Phase này chưa nhập toàn bộ SKU, chưa tạo toàn bộ product family và chưa làm detail page sản phẩm.

---

## 3. Định hướng nội dung đã được duyệt

Module Tools sẽ triển khai theo mô hình:

```text
product family
+ một số sản phẩm nổi bật
+ specialty tools phân loại theo ứng dụng
```

Không triển khai mỗi SKU thành một card hoặc detail page riêng.

Toàn bộ Tools trong catalog nằm tại pages 76–112.

Chín category chính:

1. Cần siết và dụng cụ lực
2. Khẩu, đầu khẩu và đầu nối
3. Cờ lê
4. Tua vít, lục giác và TX
5. Kìm và dụng cụ cắt
6. Búa, đục, đột và dụng cụ phụ
7. Bộ dụng cụ
8. Vali và giải pháp dụng cụ di động
9. Dụng cụ chuyên dụng ô tô

Có thể tinh chỉnh wording tiếng Việt để tự nhiên hơn, nhưng không thay đổi taxonomy lớn nếu chưa có lý do rõ ràng.

Không hiển thị số lượng SKU/category nếu chưa xác minh đầy đủ.

---

## 4. Nguồn dữ liệu và ảnh

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

Có thể xuất file tạm ra `/tmp`.

Không:

- checkout hoặc switch sang `catalog-temp`;
- merge/cherry-pick branch dữ liệu;
- copy toàn bộ PDF hoặc kho ảnh vào working branch;
- tạo artifact phân tích trong repo;
- dùng ảnh web;
- dùng ảnh AI;
- dùng remote asset.

---

## 5. Hero image

Ảnh hero thật nằm tại:

```text
/Users/lucatxtruong/Desktop/Business/2. Tủ đồ/2026-03 March/WTR paddock/hero.jpg
```

Do đường dẫn có khoảng trắng, luôn quote path khi dùng shell:

```bash
"/Users/lucatxtruong/Desktop/Business/2. Tủ đồ/2026-03 March/WTR paddock/hero.jpg"
```

Trước khi xử lý:

- kiểm tra file tồn tại;
- kiểm tra kích thước, aspect ratio và dung lượng;
- không sửa file nguồn;
- không di chuyển file nguồn.

Tạo bản tối ưu phù hợp trong repository, dưới namespace riêng của Tools, ví dụ:

```text
assets/products/tools/hero/
```

Ưu tiên:

- JPEG/WebP phù hợp với kiến trúc hiện tại;
- kích thước đủ lớn cho desktop;
- dung lượng hợp lý;
- không làm giảm chất lượng quá mức;
- không cài package hoặc dependency mới.

Nếu cần mobile crop riêng, chỉ tạo khi ảnh desktop không thể dùng tốt bằng `object-position`.

---

## 6. Yêu cầu thiết kế hero

Ảnh screenshot người dùng gửi trong chat là **visual reference**.

Hero cần:

- phủ toàn bộ chiều ngang viewport;
- không nằm trong container hẹp;
- nằm ngay dưới header;
- hình ảnh lớn, panoramic;
- chiều cao tương đương các hero lớn của Sonic;
- dùng `object-fit: cover` hoặc kỹ thuật tương đương;
- text và CTA là HTML overlay, không nhúng chết vào ảnh;
- có overlay tối nhẹ để chữ dễ đọc;
- bố cục chữ ưu tiên vùng trống của ảnh;
- desktop và mobile có `object-position` hợp lý;
- không horizontal overflow;
- không méo hoặc kéo giãn ảnh.

Tham khảo implementation của các module hiện tại để giữ nhất quán, nhưng không sửa các module protected.

Nội dung hero tiếng Việt:

```text
DỤNG CỤ CHUYÊN NGHIỆP SONIC

Từ dụng cụ cầm tay đến các bộ dụng cụ và giải pháp chuyên dụng cho gara, xưởng dịch vụ và kỹ thuật viên chuyên nghiệp.
```

CTA chính:

```text
Khám phá danh mục
```

CTA scroll tới khu vực category cards.

CTA phụ:

```text
Yêu cầu tư vấn
```

Tái sử dụng contact/CTA pattern, hotline và Zalo hiện có trong website. Không tự bịa thông tin liên hệ.

---

## 7. Category images

Phase 1 cần tạo đúng **9 ảnh category đại diện**, chưa làm toàn bộ khoảng 39 ảnh sản phẩm của module.

Ưu tiên kiểm tra ảnh extracted trước. Chỉ crop PDF khi không có asset phù hợp.

Nguồn tham chiếu:

1. Cần siết và dụng cụ lực — pages 76–79
2. Khẩu, đầu khẩu và đầu nối — pages 80–87
3. Cờ lê — pages 96–97
4. Tua vít, lục giác và TX — pages 88–89 và 95
5. Kìm và dụng cụ cắt — pages 90–91
6. Búa, đục, đột và dụng cụ phụ — pages 92–94
7. Bộ dụng cụ — pages 98–101
8. Vali và giải pháp dụng cụ di động — pages 103–107
9. Dụng cụ chuyên dụng ô tô — pages 108–112

Nguyên tắc:

- mỗi category chỉ dùng một ảnh đại diện;
- crop sạch, cân đối, hạn chế text catalog;
- không crop từng SKU nhỏ;
- không dùng ảnh sai category;
- không dùng ảnh của biến thể khác để giả làm sản phẩm;
- không tạo ảnh composite giả;
- có thể dùng ảnh chứa một bộ hoặc một nhóm sản phẩm thật trong catalog;
- chuẩn hóa canvas/aspect ratio để grid đồng đều;
- ghi metadata nguồn page và shared usage trong data hoặc comment phù hợp.

Asset namespace đề xuất:

```text
assets/products/tools/categories/
```

Tên file phải rõ nghĩa, dạng kebab-case.

---

## 8. Giao diện Phase 1

### 8.1 Hero

Full-width như yêu cầu trên.

### 8.2 Intro section

Một section ngắn giới thiệu:

- danh mục dụng cụ Sonic dành cho môi trường chuyên nghiệp;
- bao gồm dụng cụ cầm tay, bộ dụng cụ, giải pháp di động và dụng cụ chuyên dụng;
- không dùng claim chưa được xác minh;
- không viết quá dài.

### 8.3 Category grid

Hiển thị 9 category cards.

Mỗi card gồm:

- ảnh;
- tên category;
- mô tả ngắn 1–2 dòng;
- CTA hoặc affordance rõ ràng;
- hover/focus state;
- keyboard accessible;
- responsive.

Không hiển thị giá, tồn kho hoặc nút đặt hàng.

### 8.4 Category preview/framework

Khi chọn một category:

- cập nhật trạng thái active;
- hiển thị preview/intro của category;
- có title, mô tả và ảnh;
- không hiển thị dữ liệu SKU giả;
- không viết “coming soon” trên frontend;
- framework phải sẵn sàng để Phase 2 thay preview bằng product-family listing.

Có thể dùng:

- hash state;
- query parameter;
- hoặc JavaScript state đơn giản;

nhưng phải chạy bằng `file://`.

Nếu dùng URL state, back/forward browser phải hoạt động hợp lý.

---

## 9. Data-driven architecture

Không hardcode toàn bộ category content trực tiếp trong HTML.

Tạo runtime data `.js`, theo convention phù hợp với repository, ví dụ:

```text
data/tools-data.js
```

Namespace riêng, ví dụ:

```js
const TOOLS_DATA = {
  hero: {},
  categories: []
};
```

Mỗi category tối thiểu có:

```js
{
  id: "ratchets-torque",
  name: "Cần siết và dụng cụ lực",
  description: "...",
  image: "...",
  sourcePages: [76, 77, 78, 79],
  enabled: true
}
```

Không dùng:

- `fetch()`;
- XHR;
- JSON import;
- dynamic import;
- API;
- framework;
- package manager;
- build step.

---

## 10. File và architecture

Kiểm tra architecture hiện tại trước khi quyết định chính xác.

Cấu trúc dự kiến:

```text
tools.html
data/tools-data.js
assets/js/tools.js
assets/products/tools/hero/
assets/products/tools/categories/
```

Có thể thêm stylesheet riêng nếu architecture hiện tại cần:

```text
assets/css/tools.css
```

Không tạo `tool-product.html` trong Phase 1.

Tái sử dụng header, footer, typography, CTA và responsive patterns hiện có, nhưng tránh refactor ngoài scope.

---

## 11. Navigation

Không enable mục **Dụng cụ** trong navigation chung ở Phase 1.

Không sửa tất cả navigation hardcode chỉ để thêm link Tools.

Trang `tools.html` sẽ được review trực tiếp bằng `file://`.

Navigation chỉ được enable sau khi toàn bộ module Tools hoàn thành và được chủ dự án duyệt.

---

## 12. Protected scope

Không sửa canonical data hoặc renderer của:

- Tủ đồ nghề NEXT;
- NEXT MSS;
- MSS+;
- Sonic Foam System.

Không refactor CSS/JS chung nếu không thực sự cần.

Nếu cần thay đổi file dùng chung để trang Tools render đúng, giữ diff tối thiểu và báo rõ lý do.

---

## 13. Visual requirements

Phong cách:

- Sonic đỏ–đen–trắng;
- hiện đại;
- ảnh lớn;
- ít text;
- B2B chuyên nghiệp;
- không giống sàn thương mại điện tử.

Desktop:

- hero full-width;
- category grid cân đối;
- khoảng trắng rõ;
- card có chiều cao đồng đều.

Mobile:

- hero crop hợp lý;
- text không che chủ thể chính;
- CTA không tràn;
- category cards dễ bấm;
- không horizontal overflow.

Không dùng inline style tràn lan.

---

## 14. Validation

Kiểm tra tối thiểu:

### Git

```bash
git diff --check
git diff --stat
git status --short
```

### Data và assets

- 9 category IDs duy nhất;
- 9 image paths tồn tại;
- hero path tồn tại;
- không remote asset;
- không fake SKU/spec;
- source pages đúng;
- không ảnh AI/web.

### JavaScript

- syntax hợp lệ;
- không lỗi khi mở bằng `file://`;
- category selection hoạt động;
- hash/query fallback hợp lý;
- không lỗi khi URL state không hợp lệ.

### UI

- hero full-width;
- desktop/mobile;
- CTA scroll đúng;
- keyboard focus;
- category active state;
- không horizontal overflow;
- header/footer không hỏng;
- không giá, tồn kho, giỏ hàng hoặc checkout.

---

## 15. Kết thúc task

Sau khi hoàn thành, báo:

1. Startup Git status.
2. File đã thêm/sửa.
3. Hero source dimensions và asset output.
4. Danh sách 9 ảnh category và page nguồn.
5. Kiến trúc data/JS.
6. Validation đã chạy.
7. `git diff --stat`.
8. `git status --short`.
9. Warning hoặc phần còn lại cho Phase 2.

Không commit.

Không push.

Dừng để chờ chủ dự án review.
