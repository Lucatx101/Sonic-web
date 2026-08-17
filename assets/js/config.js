/* ============================================================
   CẤU HÌNH WEBSITE — chỉnh sửa các giá trị trong file này.
   Đây là nơi DUY NHẤT bạn cần sửa cho thông tin liên hệ & form.
   ============================================================ */

const CONFIG = {
  /* --- 1) KẾT NỐI FORM BÁO GIÁ ---
     Dán URL Web App của Google Apps Script vào đây (xem apps-script/HUONG-DAN.md).
     Ví dụ: "https://script.google.com/macros/s/AKfycb..../exec"
     Nếu để trống "", form sẽ tự chuyển sang gửi qua email (mailto). */
  formEndpoint: "",

  /* (Tuỳ chọn) Phương án thay thế Formspree — xem hướng dẫn trong main.js (setupForm).
     Nếu muốn dùng Formspree thay vì Apps Script, dán endpoint dạng:
     "https://formspree.io/f/xxxxxxx" và đổi USE_FORMSPREE = true trong main.js. */
  formspreeEndpoint: "",

  /* --- 2) THÔNG TIN LIÊN HỆ (hiển thị ở thanh cố định, footer, trang liên hệ) --- */
  hotline: "0888 23 23 66",                 // ← ĐIỀN số hotline
  hotlineRaw: "0843555566",                // ← số không dấu cách (dùng cho link gọi)
  zalo: "0843555566",                      // ← số/zalo id (link https://zalo.me/<số>)
  email: "info@ktechviet.com",             // ← email nhận báo giá
  showroom: "C7-23, Geleximco,Nam Từ Liêm, TP. Hà Nội", // ← ĐIỀN địa chỉ showroom
  companyName: "Sonic Việt Nam",
  workingHours: "Thứ 2 – Thứ 7: 8:00 – 17:30",
};

if (typeof module !== "undefined") module.exports = { CONFIG };
