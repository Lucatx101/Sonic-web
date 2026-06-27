# SONIC-WEB — TOOLS PHASE 5: FINAL INTEGRATION, SEARCH, NAVIGATION & QA

Làm việc bằng **Codex Work locally** trên repository:

```text
/Users/lucatxtruong/Sonic-web
```

Branch:

```text
claude/epic-knuth-rtyfc5
```

Tools Phase 1–4 đã hoàn thành. Phase 5 là bước hoàn thiện và tích hợp cuối cùng cho toàn bộ module **Dụng cụ**.

Không bổ sung thêm nhóm sản phẩm mới ngoài dữ liệu đã triển khai.

---

## 1. Startup check

Chạy:

```bash
git branch --show-current
git status --short
git log -5 --decorate --oneline
git fetch origin
```

Nếu working tree sạch nhưng local thiếu commit mới:

```bash
git pull --ff-only origin claude/epic-knuth-rtyfc5
```

`output/` và `tmp/` là file tạm ngoài scope. Không sửa, xóa, add hoặc commit.

Nếu sai branch, có conflict, branch diverged hoặc có diff chưa rõ nguồn gốc thì báo và dừng.

---

## 2. Mục tiêu Phase 5

Hoàn thiện toàn bộ module Tools:

1. Search toàn module theo tên và SKU.
2. Hoàn thiện flow category → family/product → detail.
3. Rà soát wording tiếng Việt.
4. Rà CTA và fallback.
5. Final responsive/file:// validation.
6. Enable mục **Dụng cụ** trong navigation chung.
7. Không commit/push trước review.

---

## 3. Search toàn module

Thêm ô tìm kiếm rõ ràng trong `tools.html`.

Search phải tìm được trên toàn bộ dữ liệu Tools đã triển khai:

- category;
- product family;
- sản phẩm độc lập;
- SKU;
- tên tiếng Việt;
- tên kỹ thuật tiếng Anh nội bộ nếu data có giữ alias;
- chủng loại trong bảng.

Yêu cầu:

- không dùng `fetch()`, XHR hoặc API;
- index được tạo từ runtime `.js`;
- không phân biệt hoa/thường;
- trim khoảng trắng;
- tìm theo SKU chính xác hoặc một phần;
- hỗ trợ tên có dấu và không dấu nếu triển khai đơn giản, ổn định;
- debounce nhẹ nếu cần;
- chạy bằng `file://`.

Kết quả tìm kiếm:

- hiển thị card/list gọn;
- ghi rõ category/family;
- click đưa người dùng tới đúng nội dung hoặc detail;
- nếu kết quả là một chủng loại trong bảng thì mở đúng family và làm nổi SKU tương ứng nếu implementation cho phép;
- empty state bằng tiếng Việt tự nhiên;
- có nút xóa/reset tìm kiếm.

Không hiển thị tổng SKU, tổng family hoặc metadata kỹ thuật không cần thiết.

---

## 4. Hoàn thiện flow điều hướng nội bộ

Rà soát toàn bộ:

```text
Category card
→ Category content
→ Product family / product card
→ Bảng chủng loại hoặc trang chi tiết
→ CTA
```

Yêu cầu:

- không có link chết;
- không có ID trùng;
- hash/query state hợp lệ;
- browser back/forward hoạt động hợp lý;
- invalid category/family/SKU fallback an toàn;
- link detail đúng SKU;
- breadcrumb hoặc back link rõ ràng nếu detail page hiện có;
- không reload không cần thiết;
- keyboard accessible.

Không tạo thêm detail page mới nếu renderer hiện tại đã đủ.

---

## 5. Wording frontend

Quét toàn bộ module Tools và sửa wording không nhất quán.

Quy tắc bắt buộc:

```text
Cần siết và dụng cụ cân lực
biến thể → chủng loại
Ratchets → Tay cóc
Handles → Tay vặn
Speedy T-grips → Tay T nhanh
Torque wrenches → Cân lực
Pry bar → Thanh nạy
Puller → Cảo
Oil filter wrench → Dụng cụ tháo lọc dầu
Brake caliper service set → Bộ bảo dưỡng cùm phanh
Injector → Kim phun
Pulley → Puly
Bearing → Vòng bi
Circuit tester → Dụng cụ kiểm tra mạch điện
Compression test set → Bộ kiểm tra độ nén
Crimping plier → Kìm bấm cos
Riveter → Kìm tán rive
```

Không dịch máy móc nếu làm sai nghĩa kỹ thuật. Có thể giữ thuật ngữ tiếng Anh trong ngoặc khi cần.

Tuyệt đối không render:

- `Catalog page`;
- `Catalog pages`;
- số trang nguồn;
- `sourcePages`;
- `product families`;
- tổng SKU/family;
- các dòng thống kê kỹ thuật kiểu `X FAMILY · X SKU`;
- từ `biến thể`;
- chữ `coming soon`.

Metadata nguồn có thể giữ trong data nội bộ nhưng không render.

---

## 6. CTA

Rà toàn bộ CTA:

- `Yêu cầu báo giá`
- `Tư vấn lựa chọn`
- Hotline
- Zalo

Yêu cầu:

- đúng SKU hoặc family/product context;
- không mất ký tự khi tên dài;
- không bịa giá hoặc tồn kho;
- không có nút đặt hàng, giỏ hàng hoặc checkout;
- hotline/Zalo giữ đúng thông tin hiện có;
- CTA hoạt động trên listing và detail.

---

## 7. Navigation chung

Sau khi module Tools đã hoàn thiện, enable mục:

```text
Sản phẩm
→ Dụng cụ
```

Link tới:

```text
tools.html
```

Yêu cầu:

- bỏ trạng thái disabled/coming-soon/muted;
- click được bằng chuột và bàn phím;
- hover/focus nhất quán với các menu active khác;
- active state đúng trên:
  - `tools.html`;
  - `tool-product.html?id=<SKU>` nếu detail page này đang dùng;
- cập nhật tất cả bản sao navigation hardcode trên các trang hiện có;
- desktop/mobile submenu đều hoạt động;
- không refactor toàn bộ navigation;
- không làm ảnh hưởng NEXT, NEXT MSS, MSS+, EVA Foam.

Nếu footer đã có mục Dụng cụ ở trạng thái disabled thì enable đúng vị trí hiện có. Không tự thêm vị trí mới.

---

## 8. UI final polish

Rà toàn bộ module:

- hero full-width;
- CTA hero đúng vị trí;
- intro hai cột;
- 9 category cards;
- category content;
- family/product cards;
- bảng chủng loại;
- search;
- detail;
- mobile.

Yêu cầu:

- spacing nhất quán;
- title không quá lớn;
- ảnh không méo;
- card chiều cao hợp lý;
- không horizontal overflow;
- bảng có wrapper riêng trên mobile;
- focus state rõ;
- không có placeholder thừa;
- không có chip/tag giả không có chức năng;
- không tạo cảm giác e-commerce.

Không thay đổi layout lớn đã được review nếu không có lỗi thực tế.

---

## 9. Data integrity

Kiểm tra toàn bộ `TOOLS_DATA` và data liên quan:

- category IDs duy nhất;
- family/group/product IDs duy nhất;
- SKU không trùng;
- image path tồn tại hoặc `null`;
- detail link không trỏ tới SKU không tồn tại;
- shared image metadata đúng;
- không dữ liệu giả;
- không render field chưa xác minh;
- không remote asset;
- không asset ngoài namespace Tools trừ asset dùng chung đã có.

Không thay đổi SKU/spec đã xác minh nếu không có lỗi rõ ràng.

---

## 10. Protected scope

Không sửa canonical data hoặc renderer của:

- Tủ đồ nghề NEXT;
- NEXT MSS;
- MSS+;
- Sonic Foam System.

Chỉ được sửa navigation chung ở mức tối thiểu để enable Tools.

Không refactor file ngoài scope.

---

## 11. Validation cuối

### JavaScript

- syntax hợp lệ;
- không lỗi console;
- search hoạt động;
- category/family/detail flow hoạt động;
- invalid state fallback an toàn;
- `file://` hoạt động.

### Search

- tìm theo SKU;
- tìm theo tên;
- tìm không dấu nếu có hỗ trợ;
- reset;
- empty state;
- click kết quả đúng đích.

### Navigation

- Tools click được từ `index.html`;
- active state listing/detail;
- desktop/mobile;
- các menu khác không bị ảnh hưởng.

### Responsive

Kiểm tra tối thiểu:

- desktop lớn;
- laptop;
- tablet;
- mobile.

Không horizontal overflow.

### Business rules

- không giá;
- không tồn kho;
- không đặt hàng;
- không giỏ hàng;
- không checkout;
- CTA đúng.

### Git

Chạy:

```bash
git diff --check
git diff --stat
git status --short
```

---

## 12. Kết thúc task

Báo ngắn gọn:

1. File đã sửa/thêm.
2. Search đã triển khai như thế nào.
3. Navigation đã enable ở đâu.
4. Wording đã chuẩn hóa.
5. Validation đã chạy.
6. Warning còn lại nếu có.
7. `git diff --stat`.
8. `git status --short`.

Không commit.

Không push.

Dừng để chờ review cuối.
