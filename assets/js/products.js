// Dữ liệu sản phẩm Sonic — dùng chung cho trang chủ, trang sản phẩm và trang chi tiết.
//
// ẢNH SẢN PHẨM: mỗi sản phẩm có trường "image".
//   - Để trống ""  → website tự dùng hình minh hoạ SVG.
//   - Điền đường dẫn ảnh thật để hiển thị ảnh, ví dụ:
//       image: "assets/img/products/next-s12.jpg"   (ảnh tải về máy)
//       image: "https://.../next-s12.png"           (link ảnh trực tiếp)
//   Xem hướng dẫn thêm ảnh trong assets/img/products/README.md
//
// XÁC THỰC DỮ LIỆU (verified):
//   - verified: true  → mã SKU#, số chi tiết, số ngăn kéo, kích thước đã đối chiếu
//                       ĐÚNG với Sonic Catalogue 2026 (mã/pcs/ảnh lấy cùng một trang).
//   - verified: false → chưa xác định được mã SKU chính xác trong catalog; code để trống
//                       ("") để tránh hiển thị mã sai. Cần xác nhận thủ công trước khi bán.
//   Kích thước tủ: Rộng×Cao×Sâu — Rộng & Sâu đối chiếu đúng catalog; Cao theo thông số
//   Sonic NEXT công bố (catalog dạng văn bản không in chiều cao).

const CATEGORIES = [
  { id: "toolboxes", name: "Tủ đồ nghề", tagline: "Dòng NEXT S7 – S15", icon: "toolbox",
    desc: "Tủ dụng cụ thân thép nguyên khối, sơn tĩnh điện, ngăn kéo mở 100% trên ray bi chịu lực." },
  { id: "sfs", name: "Sonic Foam System (SFS)", tagline: "Khay mút định hình", icon: "foam",
    desc: "Bộ dụng cụ sắp xếp trong khay mút định hình giúp làm việc nhanh, không thất lạc dụng cụ." },
  { id: "sockets", name: "Đầu khẩu & tay vặn", tagline: "1/4\" · 3/8\" · 1/2\" · 3/4\"", icon: "socket",
    desc: "Đầu khẩu và tay lắc làm từ thép Chrome Vanadium, bền bỉ, chống ăn mòn." },
  { id: "wrenches", name: "Cờ lê & mỏ lết", tagline: "Vòng miệng · lực · tự động", icon: "wrench",
    desc: "Cờ lê thép Chrome Vanadium chịu lực cao, thiết kế cho môi trường làm việc khắc nghiệt." },
  { id: "screwdrivers", name: "Tua vít & đầu bit", tagline: "Tay cầm tri-lobe", icon: "screwdriver",
    desc: "Tua vít tay cầm tri-lobe bọc cao su chống trượt, thân thép Chrome Vanadium chắc chắn." },
  { id: "pliers", name: "Kìm & dụng cụ cắt", tagline: "Kìm các loại", icon: "pliers",
    desc: "Kìm điện, kìm mỏ nhọn, kìm cắt, kìm mở phe… cho mọi nhu cầu của kỹ thuật viên." },
  { id: "torque", name: "Cờ lê lực", tagline: "Đo & kiểm soát lực siết", icon: "torque",
    desc: "Cờ lê lực chính xác cho công việc đòi hỏi mô-men siết chuẩn xác." },
  { id: "workshop", name: "Thiết bị xưởng", tagline: "Đèn · xe đẩy · phụ kiện", icon: "workshop",
    desc: "Đèn làm việc, xe đẩy dụng cụ, búa, đục và phụ kiện hỗ trợ cho xưởng." },
];

// Đặc tính chung của dòng tủ NEXT (dùng lại cho mọi model tủ).
const TOOLBOX_FEATURES = [
  ["Thân tủ", "Thép nguyên khối, sơn tĩnh điện"],
  ["Ray trượt", "Ray bi, ngăn kéo mở 100%, tải ~60kg/ngăn"],
  ["Bánh xe", "4 bánh, tải tới 350kg/bánh"],
  ["Khoá", "Khoá trung tâm chống trộm"],
];

const PRODUCTS = [
  // ===== Tủ đồ nghề — đã đối chiếu Catalog 2026 (mã/pcs/ảnh cùng trang) =====
  { id: "next-s7-140", code: "714075", name: "Tủ đồ nghề NEXT S7 — 140 chi tiết SFS", category: "toolboxes",
    pieces: 140, drawers: 6, dims: "R80 × C90 × S51 cm", badge: "Phổ thông", verified: true,
    image: "assets/img/products/next-s7-140.png",
    desc: "Mẫu nhỏ gọn lý tưởng cho kỹ thuật viên cần bộ dụng cụ cơ bản. Dễ di chuyển và đặt ở bất kỳ vị trí nào trong xưởng.",
    img: "toolbox-s7", extra: TOOLBOX_FEATURES },
  { id: "next-s8-197", code: "719776", name: "Tủ đồ nghề NEXT S8 — 197 chi tiết SFS", category: "toolboxes",
    pieces: 197, drawers: 7, dims: "R80 × C104 × S51 cm", badge: "Phổ thông", verified: true,
    image: "assets/img/products/next-s8-197.png",
    desc: "Phù hợp cho kỹ thuật viên cần bộ dụng cụ cơ bản đến trung cấp với không gian lưu trữ rộng hơn.",
    img: "toolbox-s8", extra: TOOLBOX_FEATURES },
  { id: "next-s9-384", code: "738477", name: "Tủ đồ nghề NEXT S9 — 384 chi tiết SFS", category: "toolboxes",
    pieces: 384, drawers: 8, dims: "R83 × C103 × S52 cm", badge: "Bán chạy", verified: true,
    image: "assets/img/products/next-s9-384.png",
    desc: "Dòng trung cấp với bộ dụng cụ đầy đủ hơn, cân bằng giữa kích thước và số lượng dụng cụ.",
    img: "toolbox-s9", extra: TOOLBOX_FEATURES },
  { id: "next-s12-400", code: "749778", name: "Xe tủ dụng cụ NEXT S12 — 497 chi tiết SFS", category: "toolboxes",
    pieces: 497, drawers: 8, dims: "R100 × C103 × S52 cm", badge: "Bán chạy", verified: true,
    image: "assets/img/products/next-s12-400.png",
    desc: "Xe tủ rộng rãi cho xưởng chuyên nghiệp, nhiều ngăn kéo lớn chứa được bộ dụng cụ chuyên sâu.",
    img: "toolbox-s12", extra: TOOLBOX_FEATURES },
  { id: "next-s13-540", code: "738480", name: "Tủ đồ nghề NEXT S13 — 384 chi tiết SFS", category: "toolboxes",
    pieces: 384, drawers: 13, dims: "R120 × C97 × S76 cm", badge: "Chuyên nghiệp", verified: true,
    image: "assets/img/products/next-s13-540.png",
    desc: "Mặt bàn rộng và chiều sâu lớn, dành cho xưởng cần không gian thao tác và lưu trữ tối đa.",
    img: "toolbox-s13", extra: TOOLBOX_FEATURES },
  { id: "next-s15-735", code: "714582", name: "Tủ đồ nghề NEXT S15 — 1045 chi tiết SFS", category: "toolboxes",
    pieces: 1045, drawers: 13, dims: "R165 × C118 × S65 cm", badge: "Cao cấp", verified: true,
    image: "assets/img/products/next-s15-735.png",
    desc: "Giải pháp lưu trữ tối thượng trên bánh xe: 13 ngăn kéo, hệ thống khoá chống mở nhiều ngăn cùng lúc.",
    img: "toolbox-s15", extra: TOOLBOX_FEATURES.concat([["Đặc biệt", "Chặn mở nhiều ngăn cùng lúc"]]) },

  // ===== Bộ dụng cụ — ảnh thật từ catalog, nhưng CHƯA xác định được mã SKU chính xác =====
  // (mỗi nhóm trong catalog có rất nhiều SKU; cần xác nhận thủ công trước khi gán mã & bán)
  { id: "socket-set-14", code: "", name: "Bộ đầu khẩu 1/4\" SFS", category: "sockets",
    pieces: 47, dims: "Khay SFS", badge: "SFS", verified: false,
    image: "assets/img/products/socket-set-14.png",
    desc: "Bộ đầu khẩu 1/4\" gồm tay lắc, các cỡ khẩu thông dụng và nối dài, sắp xếp trong khay mút định hình.",
    img: "socket", extra: [["Vật liệu", "Thép Chrome Vanadium"], ["Tay lắc", "72 răng"]] },
  { id: "socket-set-12", code: "", name: "Bộ đầu khẩu 1/2\" SFS", category: "sockets",
    pieces: 32, dims: "Khay SFS", badge: "SFS", verified: false,
    image: "assets/img/products/socket-set-12.png",
    desc: "Bộ đầu khẩu 1/2\" cho công việc nặng, thép Chrome Vanadium, tay lắc 72 răng.",
    img: "socket", extra: [["Vật liệu", "Thép Chrome Vanadium"], ["Tay lắc", "72 răng"]] },
  { id: "wrench-set", code: "", name: "Bộ cờ lê vòng miệng SFS", category: "wrenches",
    pieces: 12, dims: "8–19 mm", badge: "SFS", verified: false,
    image: "assets/img/products/wrench-set.png",
    desc: "Bộ cờ lê vòng miệng thép Chrome Vanadium, đầy đủ cỡ thông dụng trong khay mút.",
    img: "wrench", extra: [["Vật liệu", "Thép Chrome Vanadium"], ["Dải cỡ", "8 – 19 mm"]] },
  { id: "ratchet-wrench", code: "", name: "Bộ cờ lê tự động (cóc)", category: "wrenches",
    pieces: 8, dims: "8–19 mm", badge: "Mới", verified: false,
    image: "assets/img/products/ratchet-wrench.png",
    desc: "Cờ lê vòng miệng tự động đảo chiều, tăng tốc độ thao tác trong không gian hẹp.",
    img: "wrench", extra: [["Cơ cấu", "Tự động đảo chiều"], ["Dải cỡ", "8 – 19 mm"]] },
  { id: "screwdriver-set", code: "", name: "Bộ tua vít tri-lobe SFS", category: "screwdrivers",
    pieces: 7, dims: "Khay SFS", badge: "SFS", verified: false,
    image: "assets/img/products/screwdriver-set.png",
    desc: "Tua vít dẹp và bake, tay cầm tri-lobe bọc cao su, thân thép Chrome Vanadium.",
    img: "screwdriver", extra: [["Tay cầm", "Tri-lobe bọc cao su"], ["Thân", "Thép Chrome Vanadium"]] },
  { id: "bit-set", code: "", name: "Bộ đầu bit 40 chi tiết", category: "screwdrivers",
    pieces: 40, dims: "Hộp nhựa", badge: "", verified: false, image: "",
    desc: "Bộ đầu bit đa dạng đầu vít với cán vặn, đầu cứng cho độ bền cao.",
    img: "screwdriver", extra: [["Đầu vít", "Đa dạng: dẹp, bake, hoa thị, lục giác"]] },
  { id: "pliers-set", code: "", name: "Bộ kìm cơ khí SFS", category: "pliers",
    pieces: 5, dims: "Khay SFS", badge: "SFS", verified: false,
    image: "assets/img/products/pliers-set.png",
    desc: "Kìm điện, kìm mỏ nhọn, kìm cắt và kìm chỉnh, tay cầm bọc cao su chống trượt.",
    img: "pliers", extra: [["Tay cầm", "Bọc cao su chống trượt"]] },
  { id: "torque-wrench", code: "", name: "Cờ lê lực 1/2\" 40–210 Nm", category: "torque",
    pieces: 1, dims: "1/2\" · 40–210 Nm", badge: "Chính xác", verified: false, image: "",
    desc: "Cờ lê lực dạng tách-tách, hiệu chỉnh dải mô-men rộng cho công việc đòi hỏi độ chính xác.",
    img: "torque", extra: [["Dải lực", "40 – 210 Nm"], ["Đầu vuông", "1/2\""]] },
  { id: "work-light", code: "", name: "Đèn làm việc LED sạc", category: "workshop",
    pieces: 1, dims: "LED · pin sạc", badge: "", verified: false, image: "",
    desc: "Đèn LED công suất cao, pin sạc, móc treo và nam châm tiện lợi cho mọi góc xưởng.",
    img: "workshop", extra: [["Nguồn", "Pin sạc"], ["Tiện ích", "Móc treo & nam châm"]] },
  { id: "hammer-set", code: "", name: "Bộ búa & đục SFS", category: "workshop",
    pieces: 9, dims: "Khay SFS", badge: "SFS", verified: false, image: "",
    desc: "Búa các cỡ, đục và đột chốt sắp xếp gọn trong khay mút định hình.",
    img: "workshop", extra: [["Gồm", "Búa, đục, đột chốt"]] },
];

if (typeof module !== "undefined") {
  module.exports = { CATEGORIES, PRODUCTS, TOOLBOX_FEATURES };
}
