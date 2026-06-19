/* ===== Chi tiết KHAY FOAM cho cấu hình tủ NEXT — ảnh CROP từ trang cấu hình =====
   PIPELINE (dùng chung mọi cấu hình): ảnh mỗi khay được CROP từ tấm ảnh trang
   cấu hình trong Sonic Catalogue 2026 (mỗi ô khay có nhãn mã đỏ góc trên-trái,
   dùng để cắt đúng ô + tự đối chiếu mã). Nguồn ảnh đồng nhất = trang cấu hình.

   TÁCH RIÊNG khỏi data verified (data-next.js / products_next_verified.json):
   - sku khay + số ngăn: đọc từ trang cấu hình ("<ngăn> <mã khay>").
   - name/pieces: chỉ điền nếu khay có trang BÁN LẺ riêng; không có -> null (KHÔNG bịa).
   - image: crop từ trang cấu hình, confidence "cao" vì nhãn mã trên ô crop khớp sku.
   SLICE hiện tại: chỉ S9 cấu hình 168. Khoá: NEXT_TRAYS[<id>][<pieces chuỗi>]. */

const NEXT_TRAYS = {
  "next-s9": {
    "168": {
      config_source_page: 14,            // trang catalog mô tả cấu hình 168 (4 ngăn)
      trays: [
        { drawer: 1, sku: "602716", name: "Screwdriver set SFS-M 24-pcs", pieces: 24,
          image: "assets/products/next-trays/602716.png", retail_page: 72,
          image_source: "crop p14", confidence: "cao" },
        { drawer: 2, sku: "309303", name: null, pieces: null,
          image: "assets/products/next-trays/309303.png", retail_page: null,
          image_source: "crop p14", confidence: "cao",
          note: "Không có mã # bán lẻ -> chưa có tên/số món; ảnh là crop ô khay trên trang cấu hình." },
        { drawer: 3, sku: "603101", name: "Wrench set SFS-M 31-pcs", pieces: 31,
          image: "assets/products/next-trays/603101.png", retail_page: 73,
          image_source: "crop p14", confidence: "cao" },
        { drawer: 4, sku: "601707", name: null, pieces: null,
          image: "assets/products/next-trays/601707.png", retail_page: null,
          image_source: "crop p14", confidence: "cao",
          note: "Không có mã # bán lẻ -> chưa có tên/số món; ảnh là crop ô khay trên trang cấu hình." },
      ],
    },
  },
};

if (typeof window !== "undefined") window.NEXT_TRAYS = NEXT_TRAYS;
if (typeof module !== "undefined") module.exports = { NEXT_TRAYS };
