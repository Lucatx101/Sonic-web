/* ===== Trang chi tiết dòng tủ NEXT — render THUẦN từ NEXT_DATA (data/data-next.js) =====
   LUẬT: mọi số/spec lấy từ NEXT_DATA. File này KHÔNG chứa giá trị spec hardcode.
   Chỉ chứa: nhãn hiển thị (label tiếng Việt) + ánh xạ id->model->ảnh. */

// id trên web  ->  tên model trong NEXT_DATA
const NEXT_ID_TO_MODEL = {
  "next-s7": "NEXT S7", "next-s8": "NEXT S8", "next-s9": "NEXT S9",
  "next-s12": "NEXT S12", "next-s13": "NEXT S13", "next-s15": "NEXT S15",
};

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
  const img = `assets/img/products/${id}.png`;
  const groups = groupNextVariants(m);

  // Bảng spec — TẤT CẢ đọc từ NEXT_DATA (kích thước, ngăn kéo, rồi từng key trong specs)
  const specRows = [];
  if (m.dimensions_cm_display) specRows.push(["Kích thước (R×C×S)", m.dimensions_cm_display + " cm"]);
  if (m.drawers) specRows.push(["Ngăn kéo", m.drawers]);
  const sp = m.specs || {};
  for (const key of Object.keys(sp)) {
    const label = NEXT_SPEC_LABELS[key] || key;
    let val = sp[key];
    if (key === "total_loading_kg") val = val + " kg";
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
          </div>
          <div class="pd-info">
            <span class="product-card__code">Tủ đồ nghề Sonic · Nguồn: Sonic Catalogue 2026${m._source_page ? " · trang " + m._source_page : ""}</span>
            <h1>${m.model}</h1>
            <p class="pd-desc">Tủ đồ nghề chính hãng dòng Sonic NEXT. Thông số kỹ thuật dưới đây trích trực tiếp từ catalog Sonic 2026.</p>
            <ul class="modal__specs">${specRows.map(s => `<li><span>${s[0]}</span><span>${s[1]}</span></li>`).join("")}</ul>
            <div class="pd-variants">
              <label for="variant-select">Chọn cấu hình (số chi tiết):</label>
              <select id="variant-select">
                ${groups.map((v, i) => `<option value="${i}">${nextVariantLabel(v)}</option>`).join("")}
              </select>
              <p class="pd-variant-info" id="variant-info"></p>
            </div>
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
  const trayBox = root.querySelector("#next-trays");
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
    renderTrays(v.pieces);
  };
  sel.addEventListener("change", update);
  update();
  return true;
}

document.addEventListener("DOMContentLoaded", renderNextProduct);
