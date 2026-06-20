// Dữ liệu sản phẩm Sonic — dùng chung cho trang chủ, trang sản phẩm và trang chi tiết.
//
// DÒNG TỦ NEXT: dữ liệu thay từ data/products_next_verified.json (bóc thẳng Catalog 2026).
//   - variants: [{ pieces, dimensions, skus: [] }] đã gộp theo cấu hình (skus = các mã màu).
//   - pieces 0 + config "Thùng trống" = tủ rỗng (chỉ hiện khi catalog xác nhận mã).
//   - specs (extra) LẤY RIÊNG theo từng model — không dùng chung.
//   - Tủ rỗng S13/S15 (verified:false trong file nguồn) đã ẩn, chờ xác minh mã.
//
// ẢNH: trường "image" rỗng "" → dùng hình minh hoạ SVG; có đường dẫn → dùng ảnh thật.
// verified:false (bộ dụng cụ) = chưa xác định SKU, cần xác nhận; không hiển thị mã.

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

const PRODUCTS = [
  // ===== Tủ đồ nghề NEXT — dữ liệu verified từ Catalog 2026 =====
  { id: "next-s7", code: "", name: "Tủ đồ nghề NEXT S7", category: "toolboxes",
    drawers: 6, dims: "R80 x C90 x S51", badge: "Phổ thông", verified: true,
    image: "assets/products/next/s7-hero.png",
    desc: "Mẫu nhỏ gọn lý tưởng cho kỹ thuật viên cần bộ dụng cụ cơ bản. Dễ di chuyển và đặt ở bất kỳ vị trí nào trong xưởng.",
    img: "toolbox-s7", source: "Sonic Catalogue 2026, p.8",
    extra: [["Ngăn kéo", "6 ngăn (4 nông + 2 sâu)"], ["Mặt bàn", "Tháo rời, thép gia cường + tấm composite"], ["Ray trượt", "Bi 60kg (ball bearing)"], ["Bánh xe", "Có khoá (catalog không ghi tải trọng)"], ["Tải trọng tổng", "400 kg"]],
    variants: [
      { pieces: 0, config: "Thùng trống (chưa kèm dụng cụ)", dimensions: "R80 x C90 x S51", skus: ["4737016"] },
      { pieces: 138, dimensions: "R80 x C90 x S51", skus: ["713875"] },
      { pieces: 140, dimensions: "R80 x C90 x S51", skus: ["714075"] }
    ] },
  { id: "next-s8", code: "", name: "Tủ đồ nghề NEXT S8", category: "toolboxes",
    drawers: 7, dims: "R80 x C102 x S51", badge: "Phổ thông", verified: true,
    image: "assets/products/next/s8-hero.png",
    desc: "Phù hợp cho kỹ thuật viên cần bộ dụng cụ cơ bản đến trung cấp với không gian lưu trữ rộng hơn.",
    img: "toolbox-s8", source: "Sonic Catalogue 2026, p.10",
    extra: [["Ngăn kéo", "7 ngăn (5 nông + 2 sâu)"], ["Mặt bàn", "Tháo rời, thép gia cường + tấm composite"], ["Ray trượt", "Bi 60kg (ball bearing)"], ["Bánh xe", "Có khoá (catalog không ghi tải trọng)"], ["Tải trọng tổng", "400 kg"]],
    variants: [
      { pieces: 0, config: "Thùng trống (chưa kèm dụng cụ)", dimensions: "R80 x C102 x S51", skus: ["4737117"] },
      { pieces: 197, dimensions: "R80 x C102 x S51", skus: ["719776"] },
      { pieces: 207, dimensions: "R80 x C102 x S51", skus: ["720776"] },
      { pieces: 223, dimensions: "R80 x C102 x S51", skus: ["722376"] },
      { pieces: 250, dimensions: "R80 x C102 x S51", skus: ["725076"] }
    ] },
  { id: "next-s9", code: "", name: "Tủ đồ nghề NEXT S9", category: "toolboxes",
    drawers: 8, dims: "R83 x C103 x S52", badge: "Bán chạy", verified: true,
    image: "assets/img/products/next-s9.png",
    desc: "Dòng trung cấp với bộ dụng cụ đầy đủ hơn, cân bằng giữa kích thước và số lượng dụng cụ.",
    img: "toolbox-s9", source: "Sonic Catalogue 2026, p.12",
    extra: [["Ngăn kéo", "8 ngăn (7 nông + 1 sâu)"], ["Mặt bàn", "Inox gia cường + hộc bên, giá bình xịt & cuộn giấy"], ["Ray trượt", "Ngăn nông 60kg + ngăn sâu 120kg"], ["Bánh xe", "4 bánh chịu lực, 300kg/bánh"], ["Tải trọng tổng", "900 kg"], ["Chống lật", "Có (chặn mở nhiều ngăn cùng lúc)"]],
    variants: [
      { pieces: 0, config: "Thùng trống (chưa kèm dụng cụ)", dimensions: "R83 x C103 x S52", skus: ["4737218", "4737228", "4737238"] },
      { pieces: 168, dimensions: "R83 x C103 x S52", skus: ["716877", "716894", "716895"] },
      { pieces: 249, dimensions: "R83 x C103 x S52", skus: ["724977", "724994", "724995"] },
      { pieces: 263, dimensions: "R83 x C103 x S52", skus: ["726377", "726394", "726395"] },
      { pieces: 302, dimensions: "R83 x C103 x S52", skus: ["730277", "730294", "730295"] },
      { pieces: 325, dimensions: "R83 x C103 x S52", skus: ["734977", "734994", "734995"] },
      { pieces: 363, dimensions: "R83 x C103 x S52", skus: ["736377", "736394", "736395"] },
      { pieces: 384, dimensions: "R83 x C103 x S52", skus: ["738477", "738494", "738495"] },
      { pieces: 414, dimensions: "R83 x C103 x S52", skus: ["741477", "741494", "741495"] },
      { pieces: 429, dimensions: "R83 x C103 x S52", skus: ["742977", "742994", "742995"] },
      { pieces: 527, dimensions: "R83 x C103 x S52", skus: ["752777", "752794", "752795"] }
    ] },
  { id: "next-s12", code: "", name: "Xe tủ dụng cụ NEXT S12", category: "toolboxes",
    drawers: 8, dims: "R100 x C103 x S52", badge: "Bán chạy", verified: true,
    image: "assets/img/products/next-s12.png",
    desc: "Xe tủ rộng rãi cho xưởng chuyên nghiệp, nhiều ngăn kéo lớn chứa được bộ dụng cụ chuyên sâu.",
    img: "toolbox-s12", source: "Sonic Catalogue 2026, p.18",
    extra: [["Ngăn kéo", "8 ngăn (7 nông + 1 sâu)"], ["Mặt bàn", "Inox gia cường + hộc bên, giá bình xịt & cuộn giấy"], ["Ray trượt", "Ngăn nông 60kg + ngăn sâu 120kg"], ["Bánh xe", "4 bánh chịu lực, 300kg/bánh"], ["Tải trọng tổng", "900 kg"], ["Chống lật", "Có (chặn mở nhiều ngăn cùng lúc)"]],
    variants: [
      { pieces: 0, config: "Thùng trống (chưa kèm dụng cụ)", dimensions: "R100 x C103 x S52", skus: ["4737318", "4737328", "4737338"] },
      { pieces: 303, dimensions: "R100 x C103 x S52", skus: ["730378", "730396", "730397"] },
      { pieces: 400, dimensions: "R100 x C103 x S52", skus: ["740078", "740096", "740097"] },
      { pieces: 485, dimensions: "R100 x C103 x S52", skus: ["748578", "748596", "748597"] },
      { pieces: 497, dimensions: "R100 x C103 x S52", skus: ["749778", "749796", "749797"] },
      { pieces: 575, dimensions: "R100 x C103 x S52", skus: ["757578", "757596", "757597"] },
      { pieces: 644, dimensions: "R100 x C103 x S52", skus: ["764478", "764496", "764497"] }
    ] },
  { id: "next-s13", code: "", name: "Tủ đồ nghề NEXT S13", category: "toolboxes",
    drawers: 13, dims: "R120 x C98 x S76", badge: "Chuyên nghiệp", verified: true,
    image: "assets/img/products/next-s13.png",
    desc: "Mặt bàn rộng và chiều sâu lớn, dành cho xưởng cần không gian thao tác và lưu trữ tối đa.",
    img: "toolbox-s13", source: "Sonic Catalogue 2026, p.26",
    extra: [["Ngăn kéo", "13 ngăn (10 nông + 3 sâu)"], ["Mặt bàn", "Inox gia cường + hộc bên"], ["Ray trượt", "Ngăn nông 60kg + ngăn sâu 120kg"], ["Bánh xe", "4 bánh chịu lực, 350kg/bánh"], ["Tải trọng tổng", "1050 kg"], ["Chống lật", "Có (chặn mở nhiều ngăn cùng lúc)"]],
    variants: [
      { pieces: 236, dimensions: "R120 x C98 x S76", skus: ["723680"] },
      { pieces: 384, dimensions: "R120 x C98 x S76", skus: ["738480"] },
      { pieces: 540, dimensions: "R120 x C98 x S76", skus: ["754080"] }
    ] },
  { id: "next-s15", code: "", name: "Tủ đồ nghề NEXT S15", category: "toolboxes",
    drawers: 13, dims: "R165 x C118 x S66", badge: "Cao cấp", verified: true,
    image: "assets/img/products/next-s15.png",
    desc: "Giải pháp lưu trữ tối thượng trên bánh xe, nhiều ngăn kéo và hệ thống chống lật.",
    img: "toolbox-s15", source: "Sonic Catalogue 2026, p.30",
    extra: [["Ngăn kéo", "13 ngăn (1 XXL sâu + 7 XL nông + 5 trung (3 nông, 2 sâu))"], ["Mặt bàn", "Inox gia cường + hộc bên"], ["Ray trượt", "Ngăn nông 60kg + ngăn sâu 120kg"], ["Bánh xe", "4 bánh chịu lực, 350kg/bánh"], ["Tải trọng tổng", "1050 kg"], ["Chống lật", "Có (chặn mở nhiều ngăn cùng lúc)"]],
    variants: [
      { pieces: 920, dimensions: "R165 x C118 x S66", skus: ["792082"] },
      { pieces: 1045, dimensions: "R165 x C118 x S66", skus: ["714582"] }
    ] },

  // ===== Bộ dụng cụ — ảnh thật từ catalog, CHƯA xác định SKU chính xác (cần xác nhận) =====
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
  module.exports = { CATEGORIES, PRODUCTS };
}
