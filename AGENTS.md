# Sonic-web — Hướng dẫn cho Codex và coding agents

## 1. Dự án

Repository: `Lucatx101/Sonic-web`
Local: `/Users/lucatxtruong/Sonic-web`

Current project state:

- Current working branch as of 2026-06-27: `claude/epic-knuth-rtyfc5`;
- task mới nhất của chủ dự án có thể cập nhật branch hoặc trạng thái này;
- trạng thái module hiện tại phải được xác định từ Git status, commit gần nhất và task mới nhất.

Website là catalog tĩnh của đại lý chính hãng Sonic Equipment tại Việt Nam, phục vụ khách hàng B2B như gara ô tô, xe máy, xưởng dịch vụ và xưởng cơ khí.

Website không phải trang thương mại điện tử:

- không công khai giá;
- không hiển thị tồn kho;
- không giỏ hàng hoặc checkout;
- không nút đặt hàng;
- CTA hợp lệ: xem chi tiết, yêu cầu báo giá, hotline, Zalo và tư vấn lựa chọn.

Phong cách chung: đỏ–đen–trắng, ảnh lớn, gọn, hiện đại, theo tinh thần Sonic Equipment.

## 2. Công nghệ và runtime

Website dùng HTML, CSS thuần và Vanilla JavaScript.

Không thêm framework, package manager, build step hoặc dependency remote nếu chưa được duyệt.

Website phải chạy trực tiếp bằng `file://`.

Do đó không dùng:

- `fetch()` hoặc XHR để đọc file local;
- dynamic import JSON;
- local server/API làm điều kiện bắt buộc;
- dữ liệu runtime chỉ nằm trong `.json`.

Dữ liệu dùng ở frontend phải được export trong file `.js`, ví dụ:

```js
const PRODUCT_DATA = {...};
```

Ưu tiên kiến trúc data-driven. Không hardcode thông số sản phẩm trong HTML.

## 3. Kiểm tra trước khi làm việc

Trước mọi task, chạy:

```bash
git branch --show-current
git status --short
git log -5 --decorate --oneline
```

Chỉ chạy `git fetch origin` khi:

- task sẽ sửa file, commit hoặc push;
- task cần kiểm tra remote freshness;
- task mới nhất yêu cầu rõ.

Không `pull` nếu working tree không sạch. Nếu working tree sạch và local thiếu commit mới:

```bash
git pull --ff-only origin <current-branch>
```

### Read-only/review task

- Được phép đọc và review khi working tree đang dirty;
- phải báo rõ các file modified/untracked;
- không sửa, stage, commit hoặc push;
- không dừng chỉ vì có file đang untracked nếu chính file đó là đối tượng review.

### Write task

Phải dừng và báo lại nếu:

- sai branch;
- có diff ngoài scope hoặc chưa rõ nguồn gốc;
- branch diverged;
- có conflict;
- pull không thể fast-forward;
- thay đổi chưa commit của agent khác có nguy cơ bị ghi đè.

Khi được phép tiếp tục, chỉ sửa đúng file hoặc module được giao và không ghi đè thay đổi của agent khác.

Không tự reset, clean, rebase, force push hoặc xử lý phá hủy dữ liệu.

`output/` và `tmp/` là thư mục tạm ngoài scope, trừ khi task nói rõ khác đi:

- không xóa;
- không sửa;
- không add;
- không commit.

## 4. Nguồn dữ liệu catalog

Branch dữ liệu chỉ đọc: `origin/catalog-temp`.

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

Có thể xuất file phân tích tạm ra `/tmp`.

Không:

- checkout hoặc switch sang `catalog-temp`;
- merge hoặc cherry-pick branch dữ liệu;
- copy toàn bộ PDF hoặc kho ảnh vào working branch;
- tạo artifact phân tích tạm trong repo website.

## 5. Tính toàn vẹn dữ liệu

Không bịa hoặc suy đoán:

- SKU;
- tên sản phẩm;
- số chi tiết;
- kích thước;
- specs;
- compatibility;
- phụ kiện;
- setup;
- bảo hành;
- quan hệ giữa các sản phẩm.

Không copy thông số từ model hoặc chủng loại khác.

`products.json` là nguồn tham khảo, không mặc định là canonical duy nhất. Khi cần, phải đối chiếu PDF, JSON và hình catalog.

Dữ liệu chưa xác minh phải dùng `null`, `[]`, `verified:false`, warning hoặc không render.

Không hiển thị dữ liệu chưa xác minh ra frontend.

Data correctness phải được xử lý trước UI polish. Script hóa các bước kiểm kê lặp lại; không nhập thủ công danh sách SKU lớn.

## 6. Ảnh sản phẩm

Nguồn ảnh hợp lệ:

- ảnh extracted từ catalog;
- crop trực tiếp từ PDF;
- asset đã xác minh trong repo;
- ảnh local do chủ dự án cung cấp.

Không:

- cào ảnh web;
- dùng ảnh AI cho sản phẩm;
- tạo ảnh giả cho SKU không có ảnh riêng;
- dùng ảnh dimensions hoặc hình sản phẩm của SKU khác;
- tạo composite làm sai cấu hình thực tế.

Được phép crop, căn giữa, bỏ lề trắng, chuẩn hóa canvas và tối ưu dung lượng nếu không làm sai sản phẩm.

Nếu nhiều SKU dùng chung ảnh, data phải ghi nhận đúng `sharedImage` hoặc metadata tương đương.

Với layout catalog dạng grid, trước khi crop hàng loạt phải:

1. render trang;
2. lập bảng tọa độ từng ô;
3. báo kế hoạch crop;
4. dừng chờ duyệt.

Có thể dùng workflow nhẹ hơn đối với:

- 1-2 ảnh độc lập;
- ảnh local đã được chủ dự án chỉ định rõ;
- chỉnh crop nhỏ không ảnh hưởng nhận dạng sản phẩm.

Với ảnh local mới, phải kiểm tra tên file, kích thước, phân loại ảnh cảnh hay sản phẩm nền trắng và chữ nung trong ảnh trước khi xử lý.

## 7. Quy tắc hiển thị

Frontend mặc định bằng tiếng Việt. Giữ nguyên các thuật ngữ thương hiệu hoặc kỹ thuật cần thiết như:

```text
Sonic
NEXT
NEXT MSS
MSS+
BMCS
VDE
SKU
RAL
```

Được giữ metadata audit trong data, nhưng renderer không được hiển thị metadata đó cho khách hàng. Các field nội bộ có thể tồn tại, ví dụ:

- `Catalog page` hoặc `Catalog pages`;
- số trang nguồn;
- tổng số family;
- tổng SKU;
- `_source_page`;
- `catalog_page`;
- `sourcePages`;
- `warnings`;
- confidence hoặc trạng thái kiểm chứng.

Trong nội dung khách hàng nhìn thấy, dùng `chủng loại` thay cho `biến thể` khi phù hợp.

Không tự bịa hotline, Zalo hoặc thông tin liên hệ; tái sử dụng dữ liệu hiện có trong repo.

Cho phép thông tin liên hệ trong top bar, footer, contact page và CTA trong nội dung.

Không thêm lại desktop floating Zalo/hotline FAB. Mobile contact dock hiện có không được tự xóa hoặc sửa nếu task không yêu cầu trực tiếp.

## 8. Design system đã chốt

Màu chính:

```text
Đỏ: #E2231A
Đen: #1C1C1C
Trắng: #FFFFFF
```

Heading homepage dùng Be Vietnam Pro Black/ExtraBold italic, viết hoa và scope bằng class riêng. Không sửa `h1`, `h2` global nếu có nguy cơ phá module khác.

Nút đỏ:

- hover chỉ đổi màu nền;
- không `transform`, `translate`, `scale` hoặc thay đổi vị trí ở `:hover`, `:active`, `:focus`;
- viền trắng chỉ dùng cho CTA đè trên hero khi thiết kế yêu cầu.

Ảnh sản phẩm nền trắng:

- ưu tiên `height:auto` hoặc `object-fit:contain`;
- không dùng `cover`;
- không đặt đồng thời width và height cố định;
- không dùng `overflow:hidden` nếu làm cắt sản phẩm.

`object-fit:cover` chỉ dùng cho ảnh cảnh/lifestyle trong container có chiều cao cố định và đã xác minh phù hợp.

Header, footer, homepage và navigation hiện tại là thiết kế đã review. Không refactor hoặc đồng bộ lại ngoài scope task.

## 9. Module protected và canonical data

Các module đã hoàn thành mặc định là protected, trừ khi task mới chỉ rõ cần sửa:

- Trang chủ;
- Tủ đồ nghề NEXT S7–S15;
- NEXT MSS;
- MSS+;
- Hệ EVA Foam Sonic.

Tools đang là module in-progress cho tới khi các thay đổi được review và commit. Các phase Tools đã commit trước đó không được làm lại ngoài scope. Sau khi một phase được duyệt và commit thì phần đó mới được xem là protected.

Không sửa file ngoài scope chỉ để tái sử dụng hoặc refactor chung.

Canonical quan trọng của NEXT:

```text
data/products_next_verified.json
data/data-next.js
data/next-trays.js
data/next-i18n.js
assets/js/product-next.js
```

Không tự sửa canonical NEXT nếu task không yêu cầu trực tiếp.

Màu tủ NEXT theo index trong dãy ba SKU:

```text
0 = Xám #474A51 / RAL 7024
1 = Đen
2 = Đỏ
```

Phải xác minh thứ tự SKU với vị trí thực tế trước khi gán màu.

Với các module khác, luôn kiểm tra kiến trúc thực tế trong repo trước khi giả định tên file hoặc schema.

## 10. Phối hợp Claude Code và Codex

Claude Code và Codex dùng chung repo và branch nhưng không làm đồng thời.

Nguyên tắc:

- chỉ một agent làm việc trên repo tại một thời điểm;
- mỗi agent chỉ làm task hoặc module được giao;
- không ghi đè thay đổi chưa commit của agent kia;
- khi sửa header, footer, navigation hoặc code dùng chung, phải bảo đảm agent còn lại đã dừng;
- không tự sửa module do agent khác sở hữu ngoài scope.

## 11. Workflow gate-based

Với task liên quan data, SKU hoặc ảnh sản phẩm:

### Gate 1 — phân tích, chưa sửa repo

- kiểm tra branch và Git status;
- đọc nguồn;
- lập inventory và mapping nguồn;
- báo discrepancies, warning và dữ liệu chưa xác minh;
- nêu file dự kiến sửa hoặc thêm;
- đề xuất phương án triển khai;
- dừng chờ duyệt.

Nếu inventory không khớp hoặc mapping không đủ tin cậy, phải dừng.

### Gate 2 — triển khai sau khi được duyệt

- chỉ làm đúng scope đã thống nhất;
- chạy validation phù hợp;
- báo file sửa/thêm;
- báo `git diff --stat`;
- báo `git status --short`;
- không commit;
- không push;
- dừng chờ review.

Sau review mới sửa tiếp, commit hoặc push khi chủ dự án yêu cầu rõ ràng.

Với chỉnh sửa nhỏ về CSS, wording hoặc UI không ảnh hưởng data, có thể dùng workflow nhẹ hơn theo yêu cầu cụ thể.

## 12. Git

Không tự commit hoặc push.

Không dùng `git add .` nếu có nguy cơ add nhầm artifact hoặc file ngoài scope. Stage theo đường dẫn cụ thể.

Trước commit phải kiểm tra tối thiểu:

```bash
git diff --check
git diff --stat
git status --short
```

Chỉ commit hoặc push khi chủ dự án yêu cầu rõ ràng.

## 13. Validation

Chọn kiểm tra phù hợp với task:

- JavaScript syntax;
- đúng SKU count;
- không trùng SKU;
- không SKU ngoài scope;
- image/dimension path tồn tại hoặc `null`;
- shared-image mapping đúng;
- không giá, tồn kho, giỏ hàng hoặc đặt hàng;
- listing, filter, detail và fallback hoạt động;
- CTA giữ đúng SKU hoặc context;
- chạy bằng `file://`;
- responsive;
- không lỗi console;
- không remote asset/dependency mới;
- không sửa file protected ngoài scope;
- `git diff --check` sạch.

Khi thay đổi UI hoặc JavaScript, bổ sung kiểm tra trực tiếp bằng `file://` trong browser/headless browser khi môi trường cho phép.

Test JS hoặc jsdom chỉ chứng minh code chạy, không chứng minh dữ liệu sản phẩm đúng.

## 14. Phạm vi và thứ tự ưu tiên

Thứ tự ưu tiên:

1. Chỉ dẫn mới nhất của chủ dự án trong task hiện tại;
2. `AGENTS.md`;
3. trạng thái/code đã commit trong repository;
4. `README.md`.

Prompt task mới nhất của chủ dự án được ưu tiên khi nó điều chỉnh scope hoặc workflow cụ thể. Không được hiểu prompt mới là quyền sửa file ngoài scope.

`CLAUDE.md` là instruction dành riêng cho Claude Code. Nếu nội dung của nó mâu thuẫn với `AGENTS.md`, Codex phải làm theo `AGENTS.md` và báo lại, không tự sửa `CLAUDE.md`.

`README.md` có thể lỗi thời và không phải source of truth cho catalog data, ảnh sản phẩm, module status hoặc runtime architecture.

Không tự mở rộng task, refactor lân cận hoặc “dọn dẹp” code không liên quan.

Khi có mâu thuẫn hoặc thông tin có vẻ lỗi thời, báo lại và dừng trước khi sửa.

## 15. Báo cáo cuối task

Báo ngắn gọn:

1. startup Git status;
2. phạm vi đã xử lý;
3. dữ liệu/SKU/ảnh đã xác minh;
4. file đã sửa hoặc thêm;
5. discrepancies và warning;
6. validation đã chạy;
7. `git diff --stat`;
8. `git status --short`;
9. xác nhận chưa commit/push, trừ khi được yêu cầu.
