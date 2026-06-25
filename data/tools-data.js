const TOOLS_DATA = {
  schemaVersion: 1,
  hero: {
    image: "assets/products/tools/hero/tools-hero.jpg",
    imageAlt:
      "Kỹ thuật viên làm việc trên xe đua trong khu vực paddock với tủ dụng cụ Sonic"
  },
  intro: {
    title: "CÔNG CỤ TOÀN DIỆN CHO MÔI TRƯỜNG CHUYÊN NGHIỆP",
    paragraphs: [
      "Từ dụng cụ cầm tay và bộ dụng cụ hoàn chỉnh đến giải pháp di động và dụng cụ chuyên dụng cho sửa chữa ô tô.",
      "Sonic giúp gara, xưởng dịch vụ và kỹ thuật viên tổ chức công việc hiệu quả, lựa chọn đúng dụng cụ cho từng nhu cầu."
    ],
    image: "assets/products/tools/tools-intro-workshop.jpg",
    imageAlt:
      "Kỹ thuật viên lựa chọn dụng cụ từ vali chuyên nghiệp tại khu vực motorsport"
  },
  categories: [
    {
      id: "ratchets-torque",
      name: "Cần siết và dụng cụ lực",
      description:
        "Cần siết, cần lực và các dụng cụ truyền lực cho thao tác lắp ráp, bảo dưỡng.",
      scope: ["Cần siết", "Cần lực", "Phụ kiện truyền lực"],
      image: "assets/products/tools/categories/ratchets-torque.jpg",
      imageAlt: "Cần siết Sonic được sử dụng trên động cơ ô tô",
      sourcePages: [76, 77, 78, 79],
      sourceImage: "page076_img05.png",
      sharedUsage: "category-card-and-preview",
      enabled: true,
      families: [],
      featuredProducts: []
    },
    {
      id: "sockets-accessories",
      name: "Khẩu, đầu khẩu và đầu nối",
      description:
        "Khẩu, đầu bit, thanh nối và phụ kiện theo nhiều chuẩn đầu truyền động.",
      scope: ["Khẩu tiêu chuẩn", "Khẩu dài và bit", "Đầu nối"],
      image: "assets/products/tools/categories/sockets-accessories.jpg",
      imageAlt: "Các loại khẩu và đầu bit Sonic được sắp xếp trong khay dụng cụ",
      sourcePages: [80, 81, 82, 83, 84, 85, 86, 87],
      sourceImage: "page081_img11.png",
      sharedUsage: "category-card-and-preview",
      enabled: true,
      families: [],
      featuredProducts: []
    },
    {
      id: "wrenches",
      name: "Cờ lê",
      description:
        "Cờ lê vòng miệng, cờ lê bánh cóc và các bộ cờ lê được tổ chức theo ứng dụng.",
      scope: ["Cờ lê vòng miệng", "Cờ lê bánh cóc", "Bộ cờ lê"],
      image: "assets/products/tools/categories/wrenches.jpg",
      imageAlt: "Bộ cờ lê Sonic được sắp xếp trong túi cuộn",
      sourcePages: [96, 97],
      sourceImage: "page097_img07.png",
      sharedUsage: "category-card-and-preview",
      enabled: true,
      families: [],
      featuredProducts: []
    },
    {
      id: "screwdrivers-hex-tx",
      name: "Tua vít, lục giác và TX",
      description:
        "Tua vít và chìa lục giác, TX với nhiều kiểu đầu và chiều dài phục vụ thao tác kỹ thuật.",
      scope: ["Tua vít", "Lục giác", "TX"],
      image: "assets/products/tools/categories/screwdrivers-hex-tx.jpg",
      imageAlt: "Bộ tua vít Sonic trong ngăn kéo dụng cụ",
      sourcePages: [88, 89, 95],
      sourceImage: "page088_img10.png",
      sharedUsage: "category-card-and-preview",
      enabled: true,
      families: [],
      featuredProducts: []
    },
    {
      id: "pliers-cutters",
      name: "Kìm và dụng cụ cắt",
      description:
        "Kìm thao tác, kìm giữ và dụng cụ cắt cho các công việc cơ khí và bảo dưỡng.",
      scope: ["Kìm thao tác", "Kìm giữ", "Dụng cụ cắt"],
      image: "assets/products/tools/categories/pliers-cutters.jpg",
      imageAlt: "Kìm Sonic với tay cầm đỏ đen",
      sourcePages: [90, 91],
      sourceImage: "page090_img09.png",
      sharedUsage: "category-card-and-preview",
      enabled: true,
      families: [],
      featuredProducts: []
    },
    {
      id: "hammers-punches",
      name: "Búa, đục, đột và dụng cụ phụ",
      description:
        "Búa, đục, đột cùng các dụng cụ hỗ trợ cho tháo lắp và hoàn thiện công việc.",
      scope: ["Búa", "Đục và đột", "Dụng cụ hỗ trợ"],
      image: "assets/products/tools/categories/hammers-punches.jpg",
      imageAlt: "Búa và dụng cụ phụ Sonic trong khay foam",
      sourcePages: [92, 93, 94],
      sourceImage: "page092_img01.png",
      sharedUsage: "category-card-and-preview",
      enabled: true,
      families: [],
      featuredProducts: []
    },
    {
      id: "tool-sets",
      name: "Bộ dụng cụ",
      description:
        "Các bộ dụng cụ được cấu hình theo nhóm thao tác và đặt trong vali bảo vệ.",
      scope: ["Bộ khẩu", "Bộ kết hợp", "Bộ dụng cụ kỹ thuật"],
      image: "assets/products/tools/categories/tool-sets.jpg",
      imageAlt: "Bộ khẩu và cần siết Sonic trong vali cứng",
      sourcePages: [98, 99, 100, 101],
      sourceImage: "page099_img03.png",
      sharedUsage: "category-card-and-preview",
      enabled: true,
      families: [],
      featuredProducts: []
    },
    {
      id: "mobile-tool-solutions",
      name: "Vali và giải pháp dụng cụ di động",
      description:
        "Vali, hộp kéo, túi và ba lô dụng cụ dành cho công việc cần di chuyển.",
      scope: ["Vali dụng cụ", "Hộp kéo di động", "Túi và ba lô"],
      image: "assets/products/tools/categories/mobile-tool-solutions.jpg",
      imageAlt: "Ba lô dụng cụ Sonic mở trên khu vực đường đua",
      sourcePages: [103, 104, 105, 106, 107],
      sourceImage: "page107_img05.png",
      sharedUsage: "category-card-and-preview",
      enabled: true,
      families: [],
      featuredProducts: []
    },
    {
      id: "automotive-specialty",
      name: "Dụng cụ chuyên dụng ô tô",
      description:
        "Dụng cụ phục vụ tháo lắp, kiểm tra và bảo dưỡng ô tô theo từng ứng dụng.",
      scope: ["Tháo lắp", "Kiểm tra", "Bảo dưỡng ô tô"],
      image: "assets/products/tools/categories/automotive-specialty-tools.jpg",
      imageAlt: "Bộ dụng cụ tách vòng bi chuyên dụng cho ô tô",
      sourcePages: [108, 109, 110, 111, 112],
      sourceImage: "page110_img03.png",
      sharedUsage: "category-card-and-preview",
      enabled: true,
      families: [],
      featuredProducts: []
    }
  ]
};
