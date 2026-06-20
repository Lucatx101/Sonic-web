/* ===== Trang chi tiết dòng tủ NEXT — render THUẦN từ NEXT_DATA (data/data-next.js) =====
   LUẬT: mọi số/spec lấy từ NEXT_DATA. File này KHÔNG chứa giá trị spec hardcode.
   Chỉ chứa: nhãn hiển thị (label tiếng Việt) + ánh xạ id->model->ảnh. */

// id trên web  ->  tên model trong NEXT_DATA
const NEXT_ID_TO_MODEL = {
  "next-s7": "NEXT S7", "next-s8": "NEXT S8", "next-s9": "NEXT S9",
  "next-s12": "NEXT S12", "next-s13": "NEXT S13", "next-s15": "NEXT S15",
};

// id trên web -> ảnh tủ đơn nền trắng (hero) crop từ trang giới thiệu model.
// s9 giữ đường dẫn cũ (assets/img/products/) — không đụng. Model mới dùng đường dẫn này.
const NEXT_HERO = {
  "next-s7": "assets/products/next/s7-hero.png",
  "next-s8": "assets/products/next/s8-hero.png",
  "next-s12": "assets/products/next/s12-hero.png",
  "next-s13": "assets/products/next/s13-hero.png",
  "next-s15": "assets/products/next/s15-hero.png",
};

// id trên web -> ảnh banner lifestyle (crop từ trang giới thiệu model trong catalog).
// Chỉ điền khi đã xác định đúng trang + ảnh; chưa có -> không hiện banner.
const NEXT_BANNERS = {
  "next-s9": "assets/products/next-banners/s9-banner.png",
  "next-s7": "assets/products/next-banners/s7-banner.png",
  "next-s8": "assets/products/next-banners/s8-banner.png",
  "next-s12": "assets/products/next-banners/s12-banner.png",
  "next-s13": "assets/products/next-banners/s13-banner.png",
  "next-s15": "assets/products/next-banners/s15-banner.png",
};

// id trên web -> ảnh bản vẽ kỹ thuật (dimension) crop từ trang giới thiệu model.
// Chỉ điền khi đã xác định đúng trang + ảnh; chưa có -> không hiện ảnh dimension.
const NEXT_DIMS = {
  "next-s9": "assets/products/next-dims/s9-dim.png",
  "next-s7": "assets/products/next-dims/s7-dim.png",
  "next-s8": "assets/products/next-dims/s8-dim.png",
  "next-s12": "assets/products/next-dims/s12-dim.png",
  "next-s13": "assets/products/next-dims/s13-dim.png",
  "next-s15": "assets/products/next-dims/s15-dim.png",
};

// Nhãn màu theo VỊ TRÍ trong skus[] (quy ước CLAUDE.md: index 0=Xám, 1=Đen, 2=Đỏ).
const NEXT_COLOR_BY_INDEX = ["Xám", "Đen", "Đỏ"];
const NEXT_COLOR_DOT = { "Xám": "#474A51", "Đen": "#222", "Đỏ": "#d11f2a" };

// Nhãn tiếng Việt cho từng KEY của object specs (chỉ là nhãn — giá trị đọc từ data).
const NEXT_SPEC_LABELS = {
  worktop: "Mặt bàn",
  slides: "Ray trượt",
  shallow_slides: "Ray ngăn nông",
  deep_slides: "Ray ngăn sâu",
  casters: "Bánh xe",
  drawer_blocking: "Chặn ngăn kéo",
  total_loading_kg: "Tải trọng tổng",
};

// Dịch GIÁ TRỊ spec sang tiếng Việt qua data/next-i18n.js (khoá = đúng chuỗi gốc).
// Không có bản dịch -> giữ nguyên văn gốc, KHÔNG bịa nghĩa.
function viValue(val) {
  if (typeof val === "string" && typeof NEXT_VALUE_VI !== "undefined" && NEXT_VALUE_VI[val] !== undefined) {
    return NEXT_VALUE_VI[val];
  }
  return val;
}

function nextModelById(id) {
  const name = NEXT_ID_TO_MODEL[id];
  if (!name || typeof NEXT_DATA === "undefined") return null;
  return (NEXT_DATA.models || []).find(m => m.model === name) || null;
}

// Gộp biến thể theo (pieces + dimensions); gộp skus[]; loại biến thể verified:false.
// Đọc hoàn toàn từ mảng variants của NEXT_DATA.
function groupNextVariants(model) {
  const map = new Map();
  for (const v of model.variants || []) {
    if (v.verified === false) continue;            // ẩn mã chưa xác minh
    const dim = v.dimensions || model.dimensions_cm_display || "";
    const key = v.pieces + "|" + dim;
    if (!map.has(key)) map.set(key, { pieces: v.pieces, dimensions: dim, skus: [], config: v.config || null });
    map.get(key).skus.push(...(v.skus || []));
  }
  return [...map.values()].sort((a, b) => a.pieces - b.pieces);
}

function nextVariantLabel(v) {
  // pieces là SỐ đọc từ NEXT_DATA; "Thùng trống" chỉ là nhãn UI cho cấu hình 0 món.
  return v.pieces > 0 ? v.pieces + " chi tiết" : "Thùng trống (chưa kèm dụng cụ)";
}

function renderNextProduct() {
  const root = document.getElementById("product-page");
  if (!root) return false;
  const id = new URLSearchParams(location.search).get("id");
  const m = nextModelById(id);
  if (!m) return false;   // không phải model NEXT -> để renderer khác xử lý

  document.title = m.model + " — Sonic Việt Nam";
  const img = NEXT_HERO[id] || `assets/img/products/${id}.png`;
  const groups = groupNextVariants(m);

  // Bảng spec — TẤT CẢ đọc từ NEXT_DATA (kích thước, ngăn kéo, rồi từng key trong specs)
  const specRows = [];
  if (m.dimensions_cm_display) specRows.push(["Kích thước (R×C×S)", m.dimensions_cm_display + " cm"]);
  if (m.drawers) specRows.push(["Ngăn kéo", viValue(m.drawers)]);
  const sp = m.specs || {};
  for (const key of Object.keys(sp)) {
    const label = NEXT_SPEC_LABELS[key] || key;
    let val = sp[key];
    if (key === "total_loading_kg") val = val + " kg";
    else val = viValue(val);
    specRows.push([label, String(val)]);
  }

  root.innerHTML = `
    <section class="page-hero" style="padding:40px 0">
      <div class="container">
        <div class="breadcrumb">
          <a href="index.html">Trang chủ</a> / <a href="products.html">Sản phẩm</a>
          / <a href="products.html#toolboxes">Tủ đồ nghề</a> / ${m.model}
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="pd-grid">
          <div class="pd-media">
            <img class="product-photo" src="${img}" alt="${m.model}"
                 onerror="this.style.display='none'">
            ${NEXT_DIMS[id] ? `<img class="product-photo" src="${NEXT_DIMS[id]}" alt="${m.model} — bản vẽ kích thước"
                 style="margin-top:14px" onerror="this.remove()">` : ""}
            ${NEXT_BANNERS[id] ? `<img class="product-photo" src="${NEXT_BANNERS[id]}" alt="${m.model} — không gian xưởng"
                 style="margin-top:14px;border-radius:12px" onerror="this.remove()">` : ""}
          </div>
          <div class="pd-info">
            <p class="pd-subtitle">Tủ đồ nghề chính hãng dòng Sonic NEXT</p>
            <h1>${m.model}</h1>
            <ul class="modal__specs">${specRows.map(s => `<li><span>${s[0]}</span><span>${s[1]}</span></li>`).join("")}</ul>
            <div class="pd-variants">
              <label for="variant-select">Chọn cấu hình (số chi tiết):</label>
              <select id="variant-select">
                ${groups.map((v, i) => `<option value="${i}">${nextVariantLabel(v)}</option>`).join("")}
              </select>
              <p class="pd-variant-info" id="variant-info"></p>
            </div>
            <div id="next-skus" style="margin:6px 0 14px"></div>
            <div id="next-trays" style="margin:8px 0 18px"></div>
            <div class="pd-actions">
              <a class="btn btn--primary" id="quote-btn" href="contact.html?pid=${id}">Yêu cầu báo giá</a>
              <a class="btn btn--ghost" id="zalo-btn" target="_blank" rel="noopener" href="#">Chat Zalo</a>
            </div>
            <p class="form__note" style="margin-top:16px">Sản phẩm trưng bày theo catalog — vui lòng liên hệ để được tư vấn &amp; báo giá.</p>
          </div>
        </div>
      </div>
    </section>`;

  // Zalo từ CONFIG (nếu có)
  const zalo = root.querySelector("#zalo-btn");
  if (zalo && typeof CONFIG !== "undefined") zalo.href = "https://zalo.me/" + (CONFIG.zalo || CONFIG.hotlineRaw || "");

  // Selector cấu hình
  const sel = root.querySelector("#variant-select");
  const info = root.querySelector("#variant-info");
  const qbtn = root.querySelector("#quote-btn");
  const skuBox = root.querySelector("#next-skus");
  const trayBox = root.querySelector("#next-trays");
  // Khối mã SKU + màu theo index (CLAUDE.md: 0=Xám, 1=Đen, 2=Đỏ).
  // 1 mã (thùng trống các model 1 màu) -> hiện 1 mã, KHÔNG nhãn màu.
  const renderSkus = (skus) => {
    if (!skuBox) return;
    const list = skus || [];
    if (!list.length) { skuBox.innerHTML = ""; return; }
    const single = list.length === 1;
    const rows = list.map((sku, i) => {
      if (single) {
        return `<li style="display:flex;align-items:center;gap:8px;padding:4px 0">
          <span style="font-weight:700;font-family:monospace">${sku}</span></li>`;
      }
      const color = NEXT_COLOR_BY_INDEX[i] || ("Vị trí " + (i + 1));
      const dot = NEXT_COLOR_DOT[color] || "#bbb";
      return `<li style="display:flex;align-items:center;gap:8px;padding:4px 0">
        <span style="width:12px;height:12px;border-radius:50%;background:${dot};border:1px solid #00000022;flex:0 0 auto"></span>
        <span style="font-weight:700;font-family:monospace">${sku}</span>
        <span style="font-size:12px;color:var(--grey)">— ${color}</span></li>`;
    }).join("");
    skuBox.innerHTML =
      `<div style="font-size:13px;font-weight:700;color:var(--black);margin-bottom:2px">Mã SKU theo màu</div>
       <ul style="list-style:none;margin:0;padding:0">${rows}</ul>`;
  };
  const renderTrays = (pieces) => {
    if (!trayBox) return;
    const cfg = (typeof NEXT_TRAYS !== "undefined") && NEXT_TRAYS[id] && NEXT_TRAYS[id][String(pieces)];
    if (!cfg) { trayBox.innerHTML = ""; return; }   // cấu hình chưa có dữ liệu khay -> bỏ qua
    const cards = cfg.trays.map(t => {
      const ok = t.confidence === "cao" && t.image;
      const media = ok
        ? `<img src="${t.image}" alt="${t.sku}" style="width:100%;height:110px;object-fit:contain;background:#f5f6f8;border-radius:8px">`
        : `<div style="height:110px;display:flex;align-items:center;justify-content:center;background:#f5f6f8;border:1px dashed #c9ced6;border-radius:8px;color:#8a93a0;font-size:12px;text-align:center;padding:6px">Ảnh: không xác định</div>`;
      return `<div style="border:1px solid var(--line);border-radius:10px;padding:10px">
        ${media}
        <div style="font-weight:700;margin-top:8px;font-size:13px">Mã ${t.sku}</div>
        <div style="font-size:12px;color:var(--grey)">Ngăn ${t.drawer}${t.name ? " · " + t.name : ""}${t.pieces ? " · " + t.pieces + " món" : ""}</div>
      </div>`;
    }).join("");
    trayBox.innerHTML =
      `<h3 style="font-size:16px;margin:6px 0 10px;color:var(--black)">Khay foam trong cấu hình ${pieces} chi tiết (${cfg.trays.length} khay)</h3>
       <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:12px">${cards}</div>
       <p class="form__note" style="margin-top:10px">Ảnh khay crop từ trang cấu hình catalog; khay không có tên = chưa có trang bán lẻ riêng.</p>`;
  };
  const update = () => {
    const v = groups[+sel.value];
    const label = nextVariantLabel(v);
    info.innerHTML = `Đã chọn cấu hình: <b>${label}</b> · ${v.dimensions} cm`;
    qbtn.href = `contact.html?pid=${id}&cfg=${encodeURIComponent(label)}`;
    renderSkus(v.skus);
    renderTrays(v.pieces);
  };
  sel.addEventListener("change", update);
  update();
  return true;
}

document.addEventListener("DOMContentLoaded", renderNextProduct);
