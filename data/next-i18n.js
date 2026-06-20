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
  "4 shallow + 2 deep": "4 ngăn nông + 2 ngăn sâu",
  "5 shallow + 2 deep": "5 ngăn nông + 2 ngăn sâu",
  "10 shallow + 3 deep": "10 ngăn nông + 3 ngăn sâu",
  "1 XXL deep + 7 XL shallow + 5 medium (3 shallow, 2 deep)":
    "1 ngăn sâu XXL + 7 ngăn nông XL + 5 ngăn vừa (3 nông, 2 sâu)",
  "removable, reinforced steel + composite inlay":
    "Thép không gỉ gia cường, mặt composite tháo được",
  "locking (catalog khong ghi tai trong kg)": "Có khóa",
  "4 heavy duty, 350kg each": "4 bánh tải nặng, 350kg/bánh",
};

if (typeof window !== "undefined") window.NEXT_VALUE_VI = NEXT_VALUE_VI;
if (typeof module !== "undefined") module.exports = { NEXT_VALUE_VI };
