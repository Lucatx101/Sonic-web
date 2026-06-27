# SONIC-WEB — TOOLS PHASE 1 UI REVISION

Tiếp tục làm việc bằng **Codex Work locally** trên repository:

```text
/Users/lucatxtruong/Sonic-web
```

Branch bắt buộc:

```text
claude/epic-knuth-rtyfc5
```

Phase 1 đã được triển khai. Task này chỉ chỉnh lại UI/flow của `tools.html` theo review mới nhất, không làm lại module từ đầu.

---

## 1. Startup check

Chạy:

```bash
git branch --show-current
git status --short
git log -5 --decorate --oneline
```

`output/` và `tmp/` là file tạm ngoài scope. Không sửa, xóa, add hoặc commit chúng.

Nếu phát hiện diff khác ngoài Phase 1 Tools hoặc thay đổi chưa rõ nguồn gốc thì báo lại và dừng.

---

## 2. Scope chỉnh sửa

Chỉ sửa những file thuộc Phase 1 Tools đã tạo, ví dụ:

```text
tools.html
data/tools-data.js
assets/js/tools.js
assets/css/tools.css
assets/products/tools/
```

Không sửa:

- NEXT;
- NEXT MSS;
- MSS+;
- Sonic Foam System;
- navigation chung;
- module protected khác.

Không commit, không push.

---

## 3. Hero: bỏ toàn bộ text, chỉ giữ CTA

Hero hiện tại có quá nhiều text và che phần lớn ảnh.

Hãy xóa toàn bộ nội dung chữ trên hero, bao gồm:

```text
SONIC TOOLS
DỤNG CỤ CHUYÊN NGHIỆP SONIC
Từ dụng cụ cầm tay đến các bộ dụng cụ và giải pháp chuyên dụng cho gara, xưởng dịch vụ và kỹ thuật viên chuyên nghiệp.
```

Hero sau khi sửa chỉ giữ:

- ảnh nền full-width hiện tại;
- nút `Khám phá danh mục`;
- nút `Yêu cầu tư vấn`.

Yêu cầu bố cục:

- đặt hai CTA thấp hơn, gần góc trái phía dưới hero;
- giữ khoảng cách an toàn với mép trái và mép dưới;
- không để CTA đè lên Zalo/hotline;
- desktop và mobile đều phải cân đối;
- giữ hero full-width và không làm thay đổi crop ảnh ngoài mức cần thiết.

Nút `Khám phá danh mục`:

- nền đỏ;
- shape oval/pill như hiện tại;
- thêm viền trắng rõ ràng;
- giữ hover/focus state dễ nhận biết.

Nút `Yêu cầu tư vấn`:

- giữ style phụ;
- đảm bảo tương phản tốt trên ảnh.

---

## 4. Thay hoàn toàn section ngay dưới hero

Section hiện tại với headline rất lớn:

```text
Tổ chức theo công việc, dễ chọn theo nhu cầu.
```

và đoạn text ở bên phải có bố cục không phù hợp. Hãy thay toàn bộ section này bằng bố cục hai cột rõ ràng.

### Bên trái

Hiển thị nội dung:

```text
CÔNG CỤ TOÀN DIỆN CHO MÔI TRƯỜNG CHUYÊN NGHIỆP

Từ dụng cụ cầm tay và bộ dụng cụ hoàn chỉnh đến giải pháp di động và dụng cụ chuyên dụng cho sửa chữa ô tô.

Sonic giúp gara, xưởng dịch vụ và kỹ thuật viên tổ chức công việc hiệu quả, lựa chọn đúng dụng cụ cho từng nhu cầu.
```

Yêu cầu:

- headline rõ nhưng không dùng font quá khổ;
- tối đa khoảng 2–3 dòng trên desktop;
- paragraph dễ đọc;
- không tạo khoảng trắng khổng lồ;
- giữ phong cách Sonic hiện đại, B2B.

### Bên phải

Dùng ảnh local:

```text
/Users/lucatxtruong/Desktop/Business/2. Tủ đồ/2026-03 March/Vertical Motorsport - Rally Portugal/under hero.jpg
```

Lưu ý:

- đường dẫn trên là file ảnh, không có dấu `/` ở cuối;
- luôn quote path khi dùng shell;
- kiểm tra file tồn tại và đọc được;
- không sửa hoặc di chuyển file nguồn;
- tạo bản tối ưu trong namespace `assets/products/tools/`;
- crop/căn ảnh để phù hợp bố cục ngang;
- không chèn text vào ảnh;
- không dùng remote asset hoặc ảnh thay thế khác.

Responsive:

- desktop: text trái, ảnh phải;
- mobile: text trước, ảnh sau;
- không horizontal overflow.

---

## 5. Làm lại flow phần “Khám phá danh mục”

Bố cục category hiện tại đang ưu tiên một spotlight quá lớn cho category đầu tiên, gồm:

- ảnh rất lớn bên trái;
- title rất lớn bên phải;
- category counter;
- các chip như `Cần siết`, `Cần lực`, `Phụ kiện truyền lực`.

Ý đồ này khiến section nặng, khó hiểu và giống banner hơn là điều hướng danh mục.

### Flow mới

Sau section dưới hero, trình bày theo thứ tự:

```text
Hero
→ Intro hai cột: slogan bên trái, ảnh bên phải
→ Tiêu đề “Khám phá danh mục”
→ Grid 9 category cards
→ Category preview gọn nhẹ bên dưới grid
```

### Grid 9 category cards

Hiển thị ngay toàn bộ 9 category cards đã có trong data.

Mỗi card gồm:

- ảnh category;
- tên category;
- mô tả ngắn;
- affordance/CTA nhẹ như `Xem danh mục` hoặc icon mũi tên;
- hover, focus và active state rõ ràng.

Layout:

- desktop: 3 cột;
- tablet: 2 cột;
- mobile: 1 cột hoặc 2 cột nếu chiều rộng thực tế cho phép;
- card đồng đều;
- ảnh không méo;
- không dùng typography quá lớn;
- không tạo cảm giác e-commerce.

Giữ nguyên 9 category IDs, data và ảnh hiện có nếu không có lỗi thực tế.

### Category preview

Giữ interaction hiện tại nhưng chuyển preview xuống dưới grid và làm gọn lại.

Preview chỉ cần:

- một ảnh vừa phải;
- tên category;
- mô tả;
- CTA nhẹ cho phase sau;
- active category state.

Không dùng:

- ảnh chiếm gần toàn màn hình;
- title quá lớn;
- category counter kiểu `01 / 09` nếu không thực sự cần;
- chip/tag giả chưa có chức năng filter;
- dữ liệu SKU hoặc sản phẩm chưa triển khai;
- chữ `coming soon`.

Có thể mặc định hiển thị category đầu tiên, nhưng preview phải nhẹ và không lấn át grid.

Khi click category card:

- cập nhật active state;
- cập nhật preview;
- không reload trang;
- hoạt động bằng `file://`;
- keyboard accessible;
- browser back/forward vẫn hoạt động nếu implementation hiện tại đang dùng URL/hash state.

---

## 6. Giữ nguyên các phần đúng

Không thay đổi nếu không cần:

- hero image hiện tại;
- 9 category images đã crop;
- taxonomy 9 nhóm;
- `TOOLS_DATA`;
- CTA contact hiện có;
- hotline/Zalo;
- header/footer;
- `file://` compatibility.

Không thêm sản phẩm, SKU, thông số hoặc ảnh mới ngoài ảnh `under hero.jpg`.

---

## 7. Validation

Kiểm tra:

- hero không còn text, chỉ còn 2 CTA;
- CTA nằm thấp hơn ở góc trái;
- nút đỏ có viền trắng;
- section dưới hero dùng đúng ảnh local mới;
- intro hai cột cân đối;
- 9 category cards hiển thị trước preview;
- preview gọn, không còn giant spotlight/chip giả;
- category interaction hoạt động;
- desktop/mobile không overflow;
- JavaScript không lỗi;
- chạy trực tiếp bằng `file://`;
- không ảnh remote;
- không sửa module protected.

Chạy cuối task:

```bash
git diff --check
git diff --stat
git status --short
```

---

## 8. Báo cáo cuối

Báo ngắn gọn:

1. File đã sửa/thêm.
2. Asset mới tạo từ `under hero.jpg`.
3. Các thay đổi hero.
4. Flow category mới.
5. Validation đã chạy.
6. `git diff --stat`.
7. `git status --short`.

Không commit.

Không push.

Dừng để chờ review.
