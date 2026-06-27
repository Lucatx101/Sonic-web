# SONIC-WEB — TOOLS PHASE 2: BASIC HAND TOOLS & PRODUCT FAMILIES

Làm việc bằng **Codex Work locally** trên repository:

```text
/Users/lucatxtruong/Sonic-web
```

Branch bắt buộc:

```text
claude/epic-knuth-rtyfc5
```

Đây là phase tiếp theo sau khi **Tools Phase 1** đã được review, commit và push.

Mục tiêu Phase 2: triển khai dữ liệu và giao diện cho nhóm dụng cụ cơ bản trong catalog pages **76–97**, theo mô hình **product family + bảng biến thể**, không tạo card/detail riêng cho từng SKU.

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
- có diff ngoài scope chưa rõ nguồn gốc;
- branch diverged;
- có conflict;
- pull không thể fast-forward;

thì báo lại và dừng.

Không reset, clean, rebase, force push hoặc ghi đè thay đổi của agent khác.

---

## 2. Scope Phase 2

Triển khai các nhóm thuộc catalog pages 76–97:

1. Cần siết và dụng cụ lực
2. Khẩu, đầu khẩu và đầu nối
3. Cờ lê
4. Tua vít, lục giác và TX
5. Kìm và dụng cụ cắt
6. Búa, đục, đột và dụng cụ phụ

Chưa triển khai:

- BMCS, VDE và toolsets pages 98–101;
- toolcases, topboxes, trolley cases, tool bags pages 103–107;
- specialty automotive tools pages 108–112;
- detail page riêng;
- global search toàn module;
- navigation chung.

Không enable mục **Dụng cụ** trong menu ở Phase 2.

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

Có thể xuất dữ liệu tạm ra `/tmp`.

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

Trước khi triển khai, xác minh nhanh pages 76–97:

- SKU xuất hiện trên từng page;
- nhóm/family thực tế;
- field có thể xác minh từ PDF/JSON;
- duplicate SKU;
- SKU thiếu trong `products.json`;
- mâu thuẫn tên/spec giữa PDF và JSON;
- ảnh extracted hiện có;
- ảnh cần crop từ PDF.

Dùng script cho phần lặp lại; không gõ thủ công toàn bộ SKU.

Nếu catalog page range không đúng, dữ liệu bị thiếu nghiêm trọng hoặc không thể xác minh family mapping thì báo sai lệch và dừng trước khi sửa repository.

Không cần dừng chỉ vì một số field thiếu. Field chưa xác minh phải để `null`, `[]`, `verified:false` hoặc bỏ khỏi frontend.

---

## 5. Mô hình trình bày bắt buộc

Không tạo một product card cho từng size/SKU.

Dùng hai cấp:

```text
Category
→ Product family
→ Variants/SKUs trong bảng
```

Ví dụ:

```text
Khẩu, đầu khẩu và đầu nối
→ Khẩu 1/2" 6 cạnh
→ các SKU 23508, 23509, 23510... nằm trong bảng biến thể
```

Mỗi family gồm:

- một ảnh đại diện;
- tên family;
- mô tả ngắn;
- source page;
- bảng biến thể;
- CTA nhẹ dùng family/SKU context;
- không có giá/tồn kho/đặt hàng.

Không hiển thị dữ liệu chưa xác minh.

---

## 6. Family/image plan mục tiêu

Mục tiêu khoảng **17 ảnh family** cho pages 76–97.

Ưu tiên asset extracted. Chỉ crop PDF khi không có ảnh phù hợp.

### A. Cần siết và dụng cụ lực — 4 ảnh

1. NEXT ratchet — page 76
2. Các dòng ratchet khác — page 77
3. NEXT torque wrench 5–340 Nm — page 78
4. Torque wrench tải lớn — page 79

### B. Khẩu, đầu khẩu và đầu nối — 6 ảnh

5. Socket/bit socket rail 1/4" và 3/8" — page 80
6. Socket rail 1/2" — page 81
7. Standard/deep sockets — page 82
8. Impact sockets — pages 83–85
9. TX Plus sockets — page 86
10. Specialty sockets, adaptors và universal joints — page 87

### C. Tua vít, kìm, búa và hand tools khác — 7 ảnh

11. Screwdrivers — pages 88–89
12. Pliers — pages 90–91
13. Chisels và punches — page 92
14. Hammers — page 93
15. Utility tools — page 94
16. Hex/TX keys — page 95
17. Wrenches — pages 96–97

Con số 17 là target tối ưu công sức, không bắt buộc tuyệt đối. Chỉ tăng nếu một family không thể trình bày đúng bằng ảnh shared.

Nguyên tắc ảnh:

- không crop từng size;
- không tạo composite giả;
- không dùng ảnh của model khác;
- crop sạch, hạn chế text catalog;
- chuẩn hóa canvas/aspect ratio;
- giữ sản phẩm đúng tỷ lệ;
- metadata phải ghi rõ `sourcePages` và `sharedImage` khi dùng chung.

Asset namespace:

```text
assets/products/tools/families/
```

Tên file dạng kebab-case, rõ nghĩa.

---

## 7. Data architecture

Mở rộng data hiện tại của Phase 1, không tạo namespace cạnh tranh.

Ưu tiên tiếp tục dùng:

```text
data/tools-data.js
```

Namespace:

```js
const TOOLS_DATA = { ... };
```

Mỗi category có `families`.

Schema tham chiếu:

```js
{
  id: "sockets-connectors",
  name: "Khẩu, đầu khẩu và đầu nối",
  description: "...",
  image: "...",
  sourcePages: [80, 81, 82, 83, 84, 85, 86, 87],
  families: [
    {
      id: "flank-socket-1-2-6pt",
      name: "Khẩu 1/2 inch 6 cạnh",
      description: "...",
      image: "...",
      sourcePages: [82],
      sharedImage: true,
      columns: [
        { key: "sku", label: "SKU" },
        { key: "size", label: "Kích thước" },
        { key: "lengthMm", label: "Chiều dài" },
        { key: "weightG", label: "Khối lượng" }
      ],
      variants: [
        ["23508", "8 mm", 38, 46]
      ]
    }
  ]
}
```

Có thể dùng compact arrays cho `variants` để giảm file size và lặp key.

Yêu cầu:

- schema nhất quán;
- family IDs duy nhất;
- SKU không trùng;
- units rõ ràng;
- không chuyển dấu thập phân hoặc inch sai;
- giữ tên kỹ thuật tiếng Anh khi dịch có nguy cơ làm sai nghĩa;
- frontend mặc định tiếng Việt;
- không bịa mô tả kỹ thuật.

---

## 8. Family mapping cần triển khai

Không cần giữ đúng mỗi page = một family. Hãy nhóm theo logic kỹ thuật và dữ liệu thực tế.

### Cần siết và dụng cụ lực

Ít nhất bao phủ:

- NEXT ratchets;
- flexible ratchets;
- disc/twister/stubby/extendable ratchets;
- ratchet handles và speedy T-grips;
- VDE ratchet/extension nếu thuộc pages 76–77;
- NEXT torque wrenches;
- heavy torque wrenches.

### Khẩu, đầu khẩu và đầu nối

Ít nhất bao phủ:

- rail sets pages 80–81;
- standard sockets;
- deep sockets;
- impact sockets;
- deep impact sockets;
- TX Plus sockets/bit sockets;
- adaptors;
- universal joints;
- wheel/specialty socket sets page 87.

Các dòng socket dài phải hiển thị bằng bảng biến thể, không render hàng trăm card.

### Tua vít, lục giác và TX

Bao phủ:

- screwdriver sets;
- individual screwdrivers;
- extra-long;
- stubby;
- flexible socket screwdrivers;
- hex key sets;
- TX key sets.

### Kìm và dụng cụ cắt

Bao phủ:

- plier sets;
- combination/long nose/diagonal pliers;
- water pump/locking/snap-ring pliers;
- wire stripper;
- riveting/oil-filter pliers nếu nằm trong pages 90–91.

### Búa, đục, đột và dụng cụ phụ

Bao phủ:

- chisels;
- pin/taper/center punches;
- machinist/installation/nylon hammers;
- files, brushes, magnets;
- scissors, cutters, hacksaw, knives.

### Cờ lê

Bao phủ:

- double open;
- combination;
- offset ring;
- reversible/flexible ratcheting;
- flare nut;
- stubby;
- TX wrench;
- wrench sets in pouch.

---

## 9. UI/UX

Giữ layout Phase 1 đã được review:

```text
Hero
→ Intro hai cột
→ Khám phá danh mục
→ Grid 9 category cards
→ Category content/preview
```

Phase 2 mở rộng phần category content cho 6 category đã triển khai.

### Khi chọn category đã có family data

Hiển thị:

- category heading và mô tả;
- grid/list product families;
- một family card/accordion cho mỗi family;
- ảnh family;
- tên/mô tả;
- nút mở bảng biến thể;
- bảng responsive.

### Khi chọn category chưa triển khai trong Phase 2

Các category:

- Bộ dụng cụ;
- Vali và giải pháp dụng cụ di động;
- Dụng cụ chuyên dụng ô tô.

Giữ preview hiện tại, không hiện:

- dữ liệu giả;
- `coming soon`;
- count giả;
- family rỗng gây lỗi.

### Family table

Desktop:

- header rõ;
- các cột đúng theo family;
- row dễ đọc;
- sticky header chỉ dùng nếu thực sự hữu ích.

Mobile:

- không gây horizontal overflow toàn trang;
- có thể dùng scroll riêng trong table wrapper;
- hoặc chuyển row thành compact stacked layout;
- SKU và size phải luôn dễ nhìn.

Không tạo bảng khổng lồ mở sẵn toàn bộ.

Dùng accordion/details hoặc nút expand/collapse:

- mặc định đóng;
- keyboard accessible;
- `aria-expanded` đúng;
- chỉ một hoặc nhiều family mở đều được, miễn UX rõ.

---

## 10. CTA

Mỗi family có CTA nhẹ:

```text
Yêu cầu báo giá
```

hoặc:

```text
Tư vấn lựa chọn
```

CTA phải truyền đúng context:

- family name;
- SKU nếu người dùng chọn một variant;
- không tự bịa giá;
- giữ hotline/Zalo hiện có.

Nếu Phase 2 chưa triển khai variant selection, CTA ít nhất phải chứa family name.

Không thêm giỏ hàng, checkout hoặc nút đặt hàng.

---

## 11. JavaScript

Mở rộng renderer hiện tại, ví dụ:

```text
assets/js/tools.js
```

Yêu cầu:

- render data-driven;
- không hardcode specs trong HTML;
- không `fetch()`;
- không XHR;
- không dynamic import;
- không framework;
- không dependency mới;
- chạy bằng `file://`.

Giữ tương thích với category state/hash hiện tại.

Invalid category/family state phải fallback an toàn, không lỗi JS.

---

## 12. Protected scope

Không sửa canonical data hoặc renderer của:

- Tủ đồ nghề NEXT;
- NEXT MSS;
- MSS+;
- Sonic Foam System.

Không refactor global navigation.

Không sửa header/footer chung nếu không thật sự cần.

Nếu phải sửa shared CSS/JS, giữ diff tối thiểu và báo rõ lý do.

---

## 13. Validation

### Data

- page range chỉ 76–97;
- family IDs duy nhất;
- SKU duy nhất;
- variant count hợp lý;
- không SKU ngoài scope;
- image paths tồn tại;
- `sourcePages` đúng;
- shared image metadata đúng;
- không dữ liệu giả.

### Assets

- khoảng 17 family images;
- không ảnh web/AI;
- không text catalog thừa nếu có thể crop sạch;
- kích thước/dung lượng hợp lý;
- không copy toàn bộ PDF.

### JavaScript/UI

- syntax hợp lệ;
- 6 category có family data hoạt động;
- 3 category chưa triển khai fallback sạch;
- expand/collapse hoạt động;
- CTA đúng family context;
- desktop/mobile;
- table không làm overflow toàn page;
- chạy bằng `file://`;
- không lỗi console.

### Git

Chạy cuối task:

```bash
git diff --check
git diff --stat
git status --short
```

---

## 14. Báo cáo cuối

Báo ngắn gọn:

1. Startup Git status.
2. Tổng SKU pages 76–97 đã xác minh.
3. Số family theo category.
4. Số ảnh:
   - reused extracted;
   - cropped từ PDF;
   - shared.
5. File đã sửa/thêm.
6. Data discrepancies/warnings.
7. Validation đã chạy.
8. `git diff --stat`.
9. `git status --short`.

Không commit.

Không push.

Dừng để chờ review.
