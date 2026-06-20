/* ===== Bản dịch tiếng Việt cho GIÁ TRỊ spec dòng tủ NEXT =====
   TÁCH RIÊNG khỏi data verified (data-next.js / products_next_verified.json):
   key = đúng chuỗi gốc trong NEXT_DATA (drawers / specs.*), value = bản dịch hiển thị.
   Không có key trong NEXT_VALUE_VI -> hiển thị nguyên văn tiếng Anh (chưa dịch),
   KHÔNG suy diễn/bịa nghĩa.
   SLICE hiện tại: chỉ các giá trị của model NEXT S9. */

const NEXT_VALUE_VI = {
  "7 shallow + 1 deep": "7 ngăn nông + 1 ngăn sâu",
  "reinforced stainless steel + side pockets, spray can + paper roll holder":
    "Thép không gỉ gia cường + hộc bên, giá bình xịt + cuộn giấy",
  "60kg telescopic ball bearing": "Ray bi thụt 60kg/ngăn",
  "120kg double slides": "Ray đôi 120kg/ngăn",
  "4 heavy duty, 300kg each": "4 bánh tải nặng, 300kg/bánh",
  "anti-tilt": "Chống lật",
};

if (typeof window !== "undefined") window.NEXT_VALUE_VI = NEXT_VALUE_VI;
if (typeof module !== "undefined") module.exports = { NEXT_VALUE_VI };
