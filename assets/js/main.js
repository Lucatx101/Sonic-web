/* ===== Sonic Vietnam — Tương tác & render ===== */

/* --- Thư viện SVG minh họa (không phụ thuộc ảnh ngoài) --- */
const SVG = {
  // Tủ đồ nghề với số ngăn tuỳ biến
  toolbox(drawers = 7, accent = "#e2001a") {
    const rows = Math.max(3, Math.min(8, Math.round(drawers / 2)));
    const top = 22, bodyTop = 60, bodyH = 150, w = 180, x = 30;
    const gap = bodyH / rows;
    let kéo = "";
    for (let i = 0; i < rows; i++) {
      const y = bodyTop + 6 + i * gap;
      kéo += `<rect x="${x + 8}" y="${y}" width="${w - 16}" height="${gap - 8}" rx="4" fill="#20262e" stroke="#3a424d"/>
      <rect x="${x + w / 2 - 18}" y="${y + (gap - 8) / 2 - 2}" width="36" height="4" rx="2" fill="${accent}"/>`;
    }
    return `<svg class="toolbox-illustration" viewBox="0 0 240 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Tủ đồ nghề Sonic">
      <rect x="${x}" y="${top}" width="${w}" height="34" rx="6" fill="#2b323b"/>
      <rect x="${x + 14}" y="${top + 12}" width="60" height="6" rx="3" fill="${accent}"/>
      <rect x="${x}" y="${bodyTop}" width="${w}" height="${bodyH}" rx="6" fill="#171c22" stroke="#2b323b"/>
      ${kéo}
      <rect x="${x + 20}" y="${bodyTop + bodyH + 8}" width="20" height="22" rx="3" fill="#2b323b"/>
      <rect x="${x + w - 40}" y="${bodyTop + bodyH + 8}" width="20" height="22" rx="3" fill="#2b323b"/>
      <circle cx="${x + 30}" cy="${bodyTop + bodyH + 34}" r="11" fill="#0c0f12" stroke="${accent}" stroke-width="2"/>
      <circle cx="${x + w - 30}" cy="${bodyTop + bodyH + 34}" r="11" fill="#0c0f12" stroke="${accent}" stroke-width="2"/>
    </svg>`;
  },
  foam() {
    return `<svg viewBox="0 0 240 180" xmlns="http://www.w3.org/2000/svg" aria-label="Khay mút SFS">
      <rect x="10" y="10" width="220" height="160" rx="10" fill="#1b2026"/>
      <rect x="22" y="22" width="100" height="46" rx="8" fill="#0e1216"/>
      <rect x="40" y="32" width="64" height="8" rx="4" fill="#e2001a"/><rect x="40" y="48" width="44" height="8" rx="4" fill="#5b6473"/>
      <circle cx="160" cy="46" r="22" fill="#0e1216"/><circle cx="160" cy="46" r="10" fill="#e2001a"/>
      <rect x="196" y="24" width="22" height="44" rx="6" fill="#0e1216"/>
      <rect x="22" y="80" width="196" height="78" rx="8" fill="#0e1216"/>
      <rect x="34" y="94" width="172" height="10" rx="5" fill="#3a424d"/>
      <rect x="34" y="112" width="140" height="10" rx="5" fill="#3a424d"/>
      <rect x="34" y="130" width="160" height="10" rx="5" fill="#e2001a"/>
    </svg>`;
  },
  socket() {
    return `<svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg" aria-label="Đầu khẩu">
      <rect x="30" y="40" width="40" height="80" rx="8" fill="#2b323b"/>
      <rect x="38" y="32" width="24" height="16" rx="4" fill="#e2001a"/>
      <circle cx="50" cy="100" r="13" fill="#0e1216"/>
      <rect x="92" y="60" width="80" height="14" rx="7" fill="#3a424d"/>
      <circle cx="160" cy="67" r="20" fill="#2b323b"/><circle cx="160" cy="67" r="9" fill="#0e1216"/>
      <rect x="86" y="92" width="70" height="12" rx="6" fill="#5b6473"/>
      <circle cx="92" cy="98" r="9" fill="#e2001a"/>
    </svg>`;
  },
  wrench() {
    return `<svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg" aria-label="Cờ lê">
      <g fill="#2b323b">
        <rect x="40" y="70" width="120" height="14" rx="7" transform="rotate(-18 100 77)"/>
      </g>
      <circle cx="52" cy="98" r="20" fill="#2b323b"/><circle cx="52" cy="98" r="9" fill="#0e1216"/>
      <path d="M150 36 a18 18 0 1 0 18 18 l-9 0 a9 9 0 1 1 -9 -9 z" fill="#e2001a"/>
    </svg>`;
  },
  screwdriver() {
    return `<svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg" aria-label="Tua vít">
      <rect x="30" y="66" width="70" height="28" rx="12" fill="#e2001a"/>
      <rect x="44" y="72" width="46" height="6" rx="3" fill="#b80016"/>
      <rect x="100" y="74" width="50" height="12" rx="3" fill="#5b6473"/>
      <rect x="150" y="76" width="22" height="8" rx="2" fill="#2b323b"/>
    </svg>`;
  },
  pliers() {
    return `<svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg" aria-label="Kìm">
      <path d="M70 30 L100 78 L92 132 L80 132 L86 82 L58 40 Z" fill="#2b323b"/>
      <path d="M130 30 L100 78 L108 132 L120 132 L114 82 L142 40 Z" fill="#3a424d"/>
      <rect x="78" y="120" width="14" height="26" rx="6" fill="#e2001a"/>
      <rect x="108" y="120" width="14" height="26" rx="6" fill="#e2001a"/>
      <circle cx="100" cy="78" r="6" fill="#0e1216"/>
    </svg>`;
  },
  torque() {
    return `<svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg" aria-label="Cờ lê lực">
      <rect x="30" y="74" width="120" height="14" rx="7" fill="#2b323b"/>
      <rect x="34" y="76" width="70" height="10" rx="5" fill="#e2001a"/>
      <circle cx="150" cy="81" r="20" fill="#2b323b"/><circle cx="150" cy="81" r="9" fill="#0e1216"/>
      <rect x="44" y="60" width="28" height="6" rx="3" fill="#5b6473"/>
    </svg>`;
  },
  workshop() {
    return `<svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg" aria-label="Thiết bị xưởng">
      <rect x="60" y="40" width="80" height="50" rx="10" fill="#2b323b"/>
      <rect x="72" y="52" width="56" height="26" rx="6" fill="#e2001a"/>
      <rect x="92" y="90" width="16" height="40" rx="4" fill="#3a424d"/>
      <rect x="74" y="128" width="52" height="10" rx="5" fill="#2b323b"/>
    </svg>`;
  },
};

const ICONS = {
  toolbox: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18"/></svg>',
  foam: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 9h4M7 13h7M14 8h3"/></svg>',
  socket: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/></svg>',
  wrench: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.8-2.8z"/></svg>',
  screwdriver: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21l4-4M7 17l9-9 2-5-5 2-9 9 3 3z"/></svg>',
  pliers: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 3l3 8 3-8M12 11v10M9 21h6"/></svg>',
  torque: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12h12"/><circle cx="18" cy="12" r="3"/><path d="M5 9v6"/></svg>',
  workshop: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3v6M8 9h8l-1 12H9L8 9z"/></svg>',
};

function artFor(p) {
  if (p.img && p.img.startsWith("toolbox")) return SVG.toolbox(p.drawers || 7);
  if (SVG[p.img]) return SVG[p.img]();
  return SVG.workshop();
}

/* --- Render danh mục --- */
function renderCategories() {
  const el = document.getElementById("cat-grid");
  if (!el) return;
  el.innerHTML = CATEGORIES.map(c => `
    <a class="cat-card" href="products.html#${c.id}">
      <div class="cat-card__icon">${ICONS[c.icon] || ""}</div>
      <span class="cat-card__tag">${c.tagline}</span>
      <h3>${c.name}</h3>
      <p>${c.desc}</p>
    </a>`).join("");
}

/* --- Render sản phẩm --- */
function productCard(p) {
  const cat = CATEGORIES.find(c => c.id === p.category);
  const meta = [];
  if (p.pieces) meta.push(`<span class="chip">${p.pieces} chi tiết</span>`);
  if (p.drawers) meta.push(`<span class="chip">${p.drawers} ngăn kéo</span>`);
  if (p.dims) meta.push(`<span class="chip">${p.dims}</span>`);
  return `
  <article class="product-card" data-id="${p.id}" data-cat="${p.category}">
    <div class="product-card__media">
      ${p.badge ? `<span class="product-card__badge">${p.badge}</span>` : ""}
      ${artFor(p)}
    </div>
    <div class="product-card__body">
      <span class="product-card__code">Mã: ${p.code} · ${cat ? cat.name : ""}</span>
      <h3 class="product-card__name">${p.name}</h3>
      <p class="product-card__desc">${p.desc}</p>
      <div class="product-card__meta">${meta.join("")}</div>
      <div class="product-card__foot">
        <button class="product-card__cta" data-open="${p.id}">Xem chi tiết →</button>
      </div>
    </div>
  </article>`;
}

function renderProducts(filter = "all", limit = null) {
  const grid = document.getElementById("product-grid");
  if (!grid) return;
  let list = filter === "all" ? PRODUCTS : PRODUCTS.filter(p => p.category === filter);
  if (limit) list = list.slice(0, limit);
  grid.innerHTML = list.length
    ? list.map(productCard).join("")
    : `<p class="empty-note">Chưa có sản phẩm trong danh mục này. Vui lòng liên hệ để được tư vấn.</p>`;
}

/* --- Bộ lọc --- */
function renderFilters() {
  const bar = document.getElementById("filters");
  if (!bar) return;
  const items = [{ id: "all", name: "Tất cả" }, ...CATEGORIES.map(c => ({ id: c.id, name: c.name }))];
  bar.innerHTML = items.map((c, i) =>
    `<button class="filter-btn ${i === 0 ? "active" : ""}" data-filter="${c.id}">${c.name}</button>`).join("");
  bar.addEventListener("click", e => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;
    bar.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderProducts(btn.dataset.filter);
  });
}

/* --- Modal chi tiết --- */
function setupModal() {
  const modal = document.getElementById("modal");
  if (!modal) return;
  document.body.addEventListener("click", e => {
    const open = e.target.closest("[data-open]");
    if (open) {
      const p = PRODUCTS.find(x => x.id === open.dataset.open);
      if (p) showModal(p, modal);
    }
    if (e.target.matches("[data-close], .modal")) closeModal(modal);
  });
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(modal); });
}
function showModal(p, modal) {
  const cat = CATEGORIES.find(c => c.id === p.category);
  modal.querySelector(".modal__media").innerHTML = artFor(p);
  const specs = [];
  specs.push(["Mã sản phẩm", p.code]);
  if (cat) specs.push(["Danh mục", cat.name]);
  if (p.pieces) specs.push(["Số chi tiết", p.pieces + " món"]);
  if (p.drawers) specs.push(["Số ngăn kéo", p.drawers]);
  if (p.dims) specs.push(["Kích thước", p.dims]);
  modal.querySelector(".modal__body").innerHTML = `
    <button class="modal__close" data-close aria-label="Đóng">×</button>
    ${p.badge ? `<span class="product-card__badge" style="position:static;display:inline-block">${p.badge}</span>` : ""}
    <h3>${p.name}</h3>
    <p>${p.desc}</p>
    <ul class="modal__specs">${specs.map(s => `<li><span>${s[0]}</span><span>${s[1]}</span></li>`).join("")}</ul>
    <a class="btn btn--primary" href="contact.html?sp=${encodeURIComponent(p.code)}">Yêu cầu báo giá</a>`;
  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeModal(modal) {
  modal.classList.remove("open");
  document.body.style.overflow = "";
}

/* --- Menu mobile --- */
function setupNav() {
  const nav = document.querySelector(".nav");
  const toggle = document.querySelector(".nav__toggle");
  if (toggle) toggle.addEventListener("click", () => nav.classList.toggle("nav--open"));
}

/* --- Hero illustration --- */
function renderHeroArt() {
  const el = document.getElementById("hero-art");
  if (el) el.innerHTML = SVG.toolbox(13);
  const fa = document.getElementById("feature-art");
  if (fa) fa.innerHTML = SVG.foam();
}

/* --- Form liên hệ --- */
function setupForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;
  const sp = new URLSearchParams(location.search).get("sp");
  if (sp) {
    const msg = form.querySelector('[name="message"]');
    if (msg) msg.value = `Tôi quan tâm đến sản phẩm mã ${sp}. Vui lòng tư vấn và báo giá.`;
  }
  form.addEventListener("submit", e => {
    e.preventDefault();
    form.querySelector(".form__success").classList.add("show");
    form.reset();
    setTimeout(() => form.querySelector(".form__success").classList.remove("show"), 6000);
  });
}

/* --- Năm hiện tại ở footer --- */
function setYear() {
  document.querySelectorAll("[data-year]").forEach(el => (el.textContent = new Date().getFullYear()));
}

/* --- Khởi tạo + xử lý hash danh mục --- */
document.addEventListener("DOMContentLoaded", () => {
  renderCategories();
  renderFilters();
  renderHeroArt();
  setupNav();
  setupModal();
  setupForm();
  setYear();

  const hash = location.hash.replace("#", "");
  if (document.getElementById("product-grid")) {
    if (hash && CATEGORIES.some(c => c.id === hash)) {
      renderProducts(hash);
      const bar = document.getElementById("filters");
      if (bar) {
        bar.querySelectorAll(".filter-btn").forEach(b => b.classList.toggle("active", b.dataset.filter === hash));
      }
    } else {
      renderProducts(document.body.dataset.limit ? "all" : "all", document.body.dataset.limit ? +document.body.dataset.limit : null);
    }
  }
});
