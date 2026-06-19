// Data layer dòng tủ NEXT — SINH TỰ ĐỘNG từ data/products_next_verified.json.
// KHÔNG sửa tay. Muốn đổi số -> sửa file JSON nguồn rồi sinh lại.
// Dùng biến toàn cục (không ES module) để chạy được khi mở site qua file://.
const NEXT_DATA = {
  "_meta": {
    "source": "Sonic Catalogue 2026.pdf (Adobe InDesign export, 124 trang)",
    "method": "Trich text layer + doc ban ve ky thuat bang mat. Moi field co _source_page de doi chieu.",
    "rule": "Field nao catalog khong in -> verified:false, KHONG bia.",
    "models_in_scope": ["S7", "S8", "S9", "S12", "S13", "S15"],
    "note_S12XD": "Catalog con co model rieng 'NEXT S12XD' (extra-deep 63cm, trang 24-25/35/44) — KHONG nam trong scope, da loai."
  },
  "models": [
    {
      "model": "NEXT S7",
      "drawers": "4 shallow + 2 deep",
      "dimensions_mm": {"width": 799, "depth": 505, "height_total": 904, "body_height": 746, "worktop": 20},
      "dimensions_cm_display": "R80 x C90 x S51",
      "specs": {
        "worktop": "removable, reinforced steel + composite inlay",
        "slides": "60kg telescopic ball bearing",
        "casters": "locking (catalog khong ghi tai trong kg)",
        "total_loading_kg": 400
      },
      "color_codes": 1,
      "_color_note": "Catalog in 1 ma/cau hinh (1 mau). Empty cabinet cung 1 ma.",
      "_source_page": 8,
      "_verified": true,
      "variants": [
        {"pieces": 0, "config": "empty cabinet", "skus": ["4737016"], "source_page": 8, "verified": true},
        {"pieces": 138, "drawers_filled": 3, "skus": ["713875"], "source_page": 9, "verified": true},
        {"pieces": 140, "drawers_filled": 3, "skus": ["714075"], "source_page": 9, "verified": true}
      ]
    },
    {
      "model": "NEXT S8",
      "drawers": "5 shallow + 2 deep",
      "dimensions_mm": {"width": 799, "depth": 505, "height_total": 1024, "body_height": 826, "worktop": 20},
      "dimensions_cm_display": "R80 x C102 x S51",
      "specs": {
        "worktop": "removable, reinforced steel + composite inlay",
        "slides": "60kg telescopic ball bearing",
        "casters": "locking (catalog khong ghi tai trong kg)",
        "total_loading_kg": 400
      },
      "color_codes": 1,
      "_source_page": 10,
      "_verified": true,
      "variants": [
        {"pieces": 0, "config": "empty cabinet", "skus": ["4737117"], "source_page": 10, "verified": true},
        {"pieces": 197, "drawers_filled": 4, "skus": ["719776"], "source_page": 11, "verified": true},
        {"pieces": 207, "drawers_filled": 3, "skus": ["720776"], "source_page": 11, "verified": true},
        {"pieces": 223, "drawers_filled": 4, "skus": ["722376"], "source_page": 11, "verified": true},
        {"pieces": 250, "skus": ["725076"], "source_page": 40, "verified": true}
      ]
    },
    {
      "model": "NEXT S9",
      "drawers": "7 shallow + 1 deep",
      "dimensions_mm": {"width": 833, "depth": 518, "height_total": 1029, "body_height": 826, "worktop": 34},
      "dimensions_cm_display": "R83 x C103 x S52",
      "specs": {
        "worktop": "reinforced stainless steel + side pockets, spray can + paper roll holder",
        "shallow_slides": "60kg telescopic ball bearing",
        "deep_slides": "120kg double slides",
        "casters": "4 heavy duty, 300kg each",
        "drawer_blocking": "anti-tilt",
        "total_loading_kg": 900
      },
      "color_codes": 3,
      "_color_note": "Duoi 77/94/95 = 3 mau. Empty cabinet trang 12 lo: 4737218=xam, 4737228=den, 4737238=do. Map mau cho 77/94/95 CHUA xac nhan.",
      "_source_page": 12,
      "_verified": true,
      "variants": [
        {"pieces": 0, "config": "empty cabinet", "skus": ["4737218", "4737228", "4737238"], "colors": {"4737218": "grey", "4737228": "black", "4737238": "red"}, "source_page": 12, "verified": true},
        {"pieces": 168, "drawers_filled": 4, "skus": ["716877", "716894", "716895"], "source_page": 14, "verified": true},
        {"pieces": 249, "drawers_filled": 5, "skus": ["724977", "724994", "724995"], "source_page": 14, "verified": true},
        {"pieces": 263, "drawers_filled": 4, "tag": "AVIATION", "skus": ["726377", "726394", "726395"], "source_page": 43, "verified": true},
        {"pieces": 302, "skus": ["730277", "730294", "730295"], "source_page": 15, "verified": true},
        {"pieces": 325, "skus": ["734977", "734994", "734995"], "source_page": 41, "verified": true},
        {"pieces": 363, "skus": ["736377", "736394", "736395"], "source_page": 15, "verified": true},
        {"pieces": 384, "drawers_filled": 6, "skus": ["738477", "738494", "738495"], "source_page": 13, "verified": true},
        {"pieces": 414, "skus": ["741477", "741494", "741495"], "source_page": 16, "verified": true},
        {"pieces": 429, "skus": ["742977", "742994", "742995"], "source_page": 16, "verified": true},
        {"pieces": 527, "skus": ["752777", "752794", "752795"], "source_page": 17, "verified": true}
      ]
    },
    {
      "model": "NEXT S12",
      "drawers": "7 shallow + 1 deep",
      "dimensions_mm": {"width": 1004, "depth": 518, "height_total": 1029, "body_height": 826, "worktop": 34},
      "dimensions_cm_display": "R100 x C103 x S52",
      "specs": {
        "worktop": "reinforced stainless steel + side pockets, spray can + paper roll holder",
        "shallow_slides": "60kg telescopic ball bearing",
        "deep_slides": "120kg double slides",
        "casters": "4 heavy duty, 300kg each",
        "drawer_blocking": "anti-tilt",
        "total_loading_kg": 900
      },
      "color_codes": 3,
      "_color_note": "Duoi 78/96/97 = 3 mau. Empty cabinet: 4737318/4737328/4737338. Map mau CHUA xac nhan.",
      "_source_page": 18,
      "_verified": true,
      "variants": [
        {"pieces": 0, "config": "empty cabinet", "skus": ["4737318", "4737328", "4737338"], "source_page": 18, "verified": true},
        {"pieces": 303, "drawers_filled": 5, "skus": ["730378", "730396", "730397"], "source_page": 20, "verified": true},
        {"pieces": 400, "drawers_filled": 6, "skus": ["740078", "740096", "740097"], "source_page": 20, "verified": true},
        {"pieces": 485, "skus": ["748578", "748596", "748597"], "source_page": 21, "verified": true},
        {"pieces": 497, "skus": ["749778", "749796", "749797"], "source_page": 19, "verified": true},
        {"pieces": 575, "skus": ["757578", "757596", "757597"], "source_page": 22, "verified": true},
        {"pieces": 644, "drawers_filled": 8, "skus": ["764478", "764496", "764497"], "source_page": 23, "verified": true}
      ]
    },
    {
      "model": "NEXT S13",
      "drawers": "10 shallow + 3 deep",
      "dimensions_mm": {"width": 1204, "depth": 763, "height_total": 975, "body_height": 746, "worktop": 34},
      "dimensions_cm_display": "R120 x C98 x S76",
      "specs": {
        "worktop": "reinforced stainless steel + side pockets",
        "shallow_slides": "60kg telescopic ball bearing",
        "deep_slides": "120kg double slides",
        "casters": "4 heavy duty, 350kg each",
        "drawer_blocking": "anti-tilt",
        "total_loading_kg": 1050
      },
      "color_codes": 1,
      "_source_page": 26,
      "_verified": true,
      "variants": [
        {"pieces": 0, "config": "empty cabinet", "skus": ["47375113"], "source_page": 26, "verified": false, "_note": "Ma rong dang 8 chu so bat thuong (cac model khac 6-7 so) — CAN kiem tra lai bang mat."},
        {"pieces": 236, "drawers_filled": 5, "skus": ["723680"], "source_page": 27, "verified": true},
        {"pieces": 384, "drawers_filled": 6, "skus": ["738480"], "source_page": 27, "verified": true},
        {"pieces": 540, "skus": ["754080"], "source_page": 36, "verified": true}
      ]
    },
    {
      "model": "NEXT S15",
      "drawers": "1 XXL deep + 7 XL shallow + 5 medium (3 shallow, 2 deep)",
      "dimensions_mm": {"width": 1654, "depth": 658, "height_total": 1179, "body_height": 950, "worktop": 34},
      "dimensions_cm_display": "R165 x C118 x S66",
      "specs": {
        "worktop": "reinforced stainless steel + side pockets",
        "shallow_slides": "60kg telescopic ball bearing",
        "deep_slides": "120kg double slides",
        "casters": "4 heavy duty, 350kg each",
        "drawer_blocking": "anti-tilt",
        "total_loading_kg": 1050
      },
      "color_codes": 1,
      "_source_page": 30,
      "_verified": true,
      "variants": [
        {"pieces": 0, "config": "empty cabinet", "skus": ["47377113"], "source_page": 30, "verified": false, "_note": "Ma rong dang 8 chu so bat thuong — CAN kiem tra lai bang mat."},
        {"pieces": 920, "skus": ["792082"], "source_page": 38, "verified": true},
        {"pieces": 1045, "skus": ["714582"], "source_page": 31, "verified": true}
      ]
    }
  ]
};

if (typeof window !== "undefined") window.NEXT_DATA = NEXT_DATA;
if (typeof module !== "undefined") module.exports = { NEXT_DATA };
