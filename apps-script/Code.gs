/**
 * Sonic Việt Nam — Google Apps Script nhận yêu cầu báo giá và ghi vào Google Sheet.
 *
 * CÁCH DÙNG: xem hướng dẫn chi tiết trong apps-script/HUONG-DAN.md
 * Tóm tắt:
 *   1. Tạo Google Sheet mới.
 *   2. Extensions → Apps Script, dán toàn bộ file này.
 *   3. (Tuỳ chọn) đổi NOTIFY_EMAIL để nhận email thông báo mỗi lead.
 *   4. Deploy → New deployment → Web app → Execute as "Me",
 *      Who has access "Anyone" → Deploy → copy URL "/exec".
 *   5. Dán URL đó vào CONFIG.formEndpoint trong assets/js/config.js
 */

// (Tuỳ chọn) Email nhận thông báo mỗi khi có lead mới. Để "" nếu không cần.
var NOTIFY_EMAIL = "";

// Tên tab/sheet sẽ ghi dữ liệu (tự tạo nếu chưa có).
var SHEET_NAME = "Leads";

// Thứ tự cột ghi vào sheet.
var FIELDS = ["name", "phone", "email", "company", "product", "quantity", "message", "page"];

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    var data = parseBody_(e);

    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);

    // Tạo dòng tiêu đề nếu sheet trống.
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Thời gian"].concat(FIELDS));
      sheet.getRange(1, 1, 1, FIELDS.length + 1).setFontWeight("bold");
    }

    var row = [new Date()];
    for (var i = 0; i < FIELDS.length; i++) row.push(String(data[FIELDS[i]] || ""));
    sheet.appendRow(row);

    if (NOTIFY_EMAIL) {
      try {
        MailApp.sendEmail({
          to: NOTIFY_EMAIL,
          subject: "🔔 Yêu cầu báo giá mới — " + (data.name || "Khách"),
          body: FIELDS.map(function (f) { return f + ": " + (data[f] || ""); }).join("\n"),
        });
      } catch (mailErr) { /* bỏ qua lỗi gửi mail, vẫn ghi sheet */ }
    }

    return json_({ ok: true });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

// Cho phép mở URL bằng trình duyệt để kiểm tra deployment.
function doGet() {
  return json_({ ok: true, service: "Sonic Việt Nam lead endpoint" });
}

// Đọc dữ liệu cả khi gửi dạng JSON (text/plain) lẫn form-urlencoded.
function parseBody_(e) {
  if (e && e.postData && e.postData.contents) {
    try { return JSON.parse(e.postData.contents); } catch (ignore) {}
  }
  return (e && e.parameter) ? e.parameter : {};
}

function json_(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
