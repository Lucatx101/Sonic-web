// Dữ liệu sản phẩm Sonic — dùng chung cho trang chủ, trang sản phẩm và trang chi tiết.
//
// ẢNH SẢN PHẨM: mỗi sản phẩm có trường "image".
//   - Để trống ""  → website tự dùng hình minh hoạ SVG.
//   - Điền đường dẫn ảnh thật để hiển thị ảnh, ví dụ:
//       image: "assets/img/products/next-s12.jpg"   (ảnh tải về máy)
//       image: "https://.../next-s12.png"           (link ảnh trực tiếp)
//   Xem hướng dẫn thêm ảnh trong assets/img/products/README.md
//
// Thông số tủ đồ nghề tham khảo từ dòng Sonic NEXT (catalog Sonic Equipment).

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
  { id: "next-s7-140", code: "714075", name: "Tủ đồ nghề NEXT S7 — 140 chi tiết SFS", category: "toolboxes",
    pieces: 140, drawers: 6, dims: "R80 × C90 × S51 cm", badge: "Phổ thông", image: "",
    desc: "Mẫu nhỏ gọn lý tưởng cho kỹ thuật viên cần bộ dụng cụ cơ bản. Dễ di chuyển và đặt ở bất kỳ vị trí nào trong xưởng.",
    img: "toolbox-s7", extra: TOOLBOX_FEATURES },
  { id: "next-s8-197", code: "719776", name: "Tủ đồ nghề NEXT S8 — 197 chi tiết SFS", category: "toolboxes",
    pieces: 197, drawers: 7, dims: "R80 × C104 × S51 cm", badge: "Phổ thông", image: "",
    desc: "Phù hợp cho kỹ thuật viên cần bộ dụng cụ cơ bản đến trung cấp với không gian lưu trữ rộng hơn.",
    img: "toolbox-s8", extra: TOOLBOX_FEATURES },
  { id: "next-s9-384", code: "734991", name: "Tủ đồ nghề NEXT S9 — 384 chi tiết SFS", category: "toolboxes",
    pieces: 384, drawers: 7, dims: "R83 × C103 × S52 cm", badge: "Bán chạy", image: "",
    desc: "Dòng trung cấp với bộ dụng cụ đầy đủ hơn, cân bằng giữa kích thước và số lượng dụng cụ.",
    img: "toolbox-s9", extra: TOOLBOX_FEATURES },
  { id: "next-s12-400", code: "751205", name: "Xe tủ dụng cụ NEXT S12 — 400 chi tiết SFS", category: "toolboxes",
    pieces: 400, drawers: 8, dims: "R100 × C103 × S52 cm", badge: "Bán chạy", image: "",
    desc: "Xe tủ rộng rãi cho xưởng chuyên nghiệp, nhiều ngăn kéo lớn chứa được bộ dụng cụ chuyên sâu.",
    img: "toolbox-s12", extra: TOOLBOX_FEATURES },
  { id: "next-s13-540", code: "763019", name: "Tủ đồ nghề NEXT S13 — 540 chi tiết SFS", category: "toolboxes",
    pieces: 540, drawers: 9, dims: "R120 × C97 × S76 cm", badge: "Chuyên nghiệp", image: "",
    desc: "Mặt bàn rộng và chiều sâu lớn, dành cho xưởng cần không gian thao tác và lưu trữ tối đa.",
    img: "toolbox-s13", extra: TOOLBOX_FEATURES },
  { id: "next-s15-735", code: "792075", name: "Tủ đồ nghề NEXT S15 — 735 chi tiết SFS", category: "toolboxes",
    pieces: 735, drawers: 13, dims: "R165 × C118 × S65 cm", badge: "Cao cấp", image: "",
    desc: "Giải pháp lưu trữ tối thượng trên bánh xe: 13 ngăn kéo, hệ thống khoá chống mở nhiều ngăn cùng lúc.",
    img: "toolbox-s15", extra: TOOLBOX_FEATURES.concat([["Đặc biệt", "Chặn mở nhiều ngăn cùng lúc"]]) },

  { id: "socket-set-14", code: "600501", name: "Bộ đầu khẩu 1/4\" SFS", category: "sockets",
    pieces: 47, dims: "Khay SFS", badge: "SFS", image: "",
    desc: "Bộ đầu khẩu 1/4\" gồm tay lắc, các cỡ khẩu thông dụng và nối dài, sắp xếp trong khay mút định hình.",
    img: "socket", extra: [["Vật liệu", "Thép Chrome Vanadium"], ["Tay lắc", "72 răng"]] },
  { id: "socket-set-12", code: "600502", name: "Bộ đầu khẩu 1/2\" SFS", category: "sockets",
    pieces: 32, dims: "Khay SFS", badge: "SFS", image: "",
    desc: "Bộ đầu khẩu 1/2\" cho công việc nặng, thép Chrome Vanadium, tay lắc 72 răng.",
    img: "socket", extra: [["Vật liệu", "Thép Chrome Vanadium"], ["Tay lắc", "72 răng"]] },
  { id: "wrench-set", code: "601012", name: "Bộ cờ lê vòng miệng SFS", category: "wrenches",
    pieces: 12, dims: "8–19 mm", badge: "SFS", image: "",
    desc: "Bộ cờ lê vòng miệng thép Chrome Vanadium, đầy đủ cỡ thông dụng trong khay mút.",
    img: "wrench", extra: [["Vật liệu", "Thép Chrome Vanadium"], ["Dải cỡ", "8 – 19 mm"]] },
  { id: "ratchet-wrench", code: "601020", name: "Bộ cờ lê tự động (cóc)", category: "wrenches",
    pieces: 8, dims: "8–19 mm", badge: "Mới", image: "",
    desc: "Cờ lê vòng miệng tự động đảo chiều, tăng tốc độ thao tác trong không gian hẹp.",
    img: "wrench", extra: [["Cơ cấu", "Tự động đảo chiều"], ["Dải cỡ", "8 – 19 mm"]] },
  { id: "screwdriver-set", code: "602007", name: "Bộ tua vít tri-lobe SFS", category: "screwdrivers",
    pieces: 7, dims: "Khay SFS", badge: "SFS", image: "",
    desc: "Tua vít dẹp và bake, tay cầm tri-lobe bọc cao su, thân thép Chrome Vanadium.",
    img: "screwdriver", extra: [["Tay cầm", "Tri-lobe bọc cao su"], ["Thân", "Thép Chrome Vanadium"]] },
  { id: "bit-set", code: "602040", name: "Bộ đầu bit 40 chi tiết", category: "screwdrivers",
    pieces: 40, dims: "Hộp nhựa", badge: "", image: "",
    desc: "Bộ đầu bit đa dạng đầu vít với cán vặn, đầu cứng cho độ bền cao.",
    img: "screwdriver", extra: [["Đầu vít", "Đa dạng: dẹp, bake, hoa thị, lục giác"]] },
  { id: "pliers-set", code: "603005", name: "Bộ kìm cơ khí SFS", category: "pliers",
    pieces: 5, dims: "Khay SFS", badge: "SFS", image: "",
    desc: "Kìm điện, kìm mỏ nhọn, kìm cắt và kìm chỉnh, tay cầm bọc cao su chống trượt.",
    img: "pliers", extra: [["Tay cầm", "Bọc cao su chống trượt"]] },
  { id: "torque-wrench", code: "604012", name: "Cờ lê lực 1/2\" 40–210 Nm", category: "torque",
    pieces: 1, dims: "1/2\" · 40–210 Nm", badge: "Chính xác", image: "",
    desc: "Cờ lê lực dạng tách-tách, hiệu chỉnh dải mô-men rộng cho công việc đòi hỏi độ chính xác.",
    img: "torque", extra: [["Dải lực", "40 – 210 Nm"], ["Đầu vuông", "1/2\""]] },
  { id: "work-light", code: "605002", name: "Đèn làm việc LED sạc", category: "workshop",
    pieces: 1, dims: "LED · pin sạc", badge: "", image: "",
    desc: "Đèn LED công suất cao, pin sạc, móc treo và nam châm tiện lợi cho mọi góc xưởng.",
    img: "workshop", extra: [["Nguồn", "Pin sạc"], ["Tiện ích", "Móc treo & nam châm"]] },
  { id: "hammer-set", code: "605030", name: "Bộ búa & đục SFS", category: "workshop",
    pieces: 9, dims: "Khay SFS", badge: "SFS", image: "",
    desc: "Búa các cỡ, đục và đột chốt sắp xếp gọn trong khay mút định hình.",
    img: "workshop", extra: [["Gồm", "Búa, đục, đột chốt"]] },
];

if (typeof module !== "undefined") {
  module.exports = { CATEGORIES, PRODUCTS, TOOLBOX_FEATURES };
}
