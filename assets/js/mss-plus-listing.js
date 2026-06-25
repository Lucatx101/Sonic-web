/* ===== MSS+ catalog — listing, search và filter ===== */
(function () {
  "use strict";

  const data = typeof MSS_PLUS_DATA !== "undefined" ? MSS_PLUS_DATA : null;
  const root = document.getElementById("mss-plus-product-grid");
  const setupRoot = document.getElementById("mss-plus-setup-grid");
  const searchInput = document.getElementById("mss-plus-search");
  const groupSelect = document.getElementById("mss-plus-group");
  const resetButton = document.getElementById("mss-plus-reset");
  const resultCount = document.getElementById("mss-plus-result-count");

  if (!data || !root || !setupRoot || !searchInput || !groupSelect || !resetButton || !resultCount) return;

  const groups = new Map(data.groups.map(group => [group.id, group.name]));
  const setupProducts = data.products.filter(product => product.group === "setups");
  const catalogProducts = data.products.filter(product => product.group !== "setups");
  const state = { query: "", group: "all" };

  function escapeHtml(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function normalize(value) {
    return String(value ?? "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .trim();
  }

  function fallbackMarkup(product) {
    return `
      <span class="mss-plus-catalog__fallback" role="img" aria-label="Chưa có ảnh riêng cho ${escapeHtml(product.name)}">
        <span>MSS+</span>
        <small>SKU ${escapeHtml(product.sku)}</small>
      </span>`;
  }

  function imageMarkup(product) {
    if (!product.image) return fallbackMarkup(product);
    return `
      <img
        src="${escapeHtml(product.image)}"
        alt="${escapeHtml(product.name)}"
        loading="lazy"
        data-mss-plus-image
        data-sku="${escapeHtml(product.sku)}"
      />`;
  }

  function productCard(product) {
    const groupName = groups.get(product.group) || product.group;
    const detailsUrl = `mss-plus-product.html?id=${encodeURIComponent(product.sku)}`;
    const quoteUrl = `contact.html?sp=${encodeURIComponent(product.sku)}`;
    return `
      <article class="mss-plus-catalog-card">
        <a class="mss-plus-catalog-card__media" href="${detailsUrl}" aria-label="Xem chi tiết ${escapeHtml(product.name)}">
          ${imageMarkup(product)}
        </a>
        <div class="mss-plus-catalog-card__body">
          <span class="mss-plus-catalog-card__group">${escapeHtml(groupName)}</span>
          <h3><a href="${detailsUrl}">${escapeHtml(product.name)}</a></h3>
          <p class="mss-plus-catalog-card__sku">SKU ${escapeHtml(product.sku)}</p>
          ${product.dimensions ? `<p class="mss-plus-catalog-card__dimensions">${escapeHtml(product.dimensions)}</p>` : ""}
          <div class="mss-plus-catalog-card__actions">
            <a class="mss-plus-catalog-card__detail" href="${detailsUrl}">Xem chi tiết</a>
            <a class="btn btn--primary btn--sm" href="${quoteUrl}">Yêu cầu báo giá</a>
          </div>
        </div>
      </article>`;
  }

  function filteredProducts() {
    const query = normalize(state.query);
    return catalogProducts.filter(product => {
      const groupMatches = state.group === "all" || product.group === state.group;
      const queryMatches = !query || normalize(`${product.name} ${product.sku}`).includes(query);
      return groupMatches && queryMatches;
    });
  }

  function render() {
    const products = filteredProducts();
    resultCount.textContent = `Hiển thị ${products.length} / ${catalogProducts.length} sản phẩm`;
    root.innerHTML = products.length
      ? products.map(productCard).join("")
      : `
        <div class="mss-plus-catalog__empty">
          <h3>Không tìm thấy sản phẩm phù hợp.</h3>
          <p>Hãy thử SKU, tên sản phẩm hoặc một nhóm khác.</p>
        </div>`;
  }

  function renderGroups() {
    groupSelect.innerHTML = [
      `<option value="all">Tất cả nhóm sản phẩm</option>`,
      ...data.groups
        .filter(group => group.id !== "setups")
        .map(group => `<option value="${escapeHtml(group.id)}">${escapeHtml(group.name)}</option>`),
    ].join("");
  }

  function handleImageError(event) {
    const image = event.target.closest("[data-mss-plus-image]");
    if (!image) return;
    const product = data.products.find(item => item.sku === image.dataset.sku);
    if (product) image.outerHTML = fallbackMarkup(product);
  }

  root.addEventListener("error", handleImageError, true);
  setupRoot.addEventListener("error", handleImageError, true);

  searchInput.addEventListener("input", () => {
    state.query = searchInput.value;
    render();
  });

  groupSelect.addEventListener("change", () => {
    state.group = groupSelect.value;
    render();
  });

  resetButton.addEventListener("click", () => {
    state.query = "";
    state.group = "all";
    searchInput.value = "";
    groupSelect.value = "all";
    render();
    searchInput.focus();
  });

  renderGroups();
  setupRoot.innerHTML = setupProducts.map(productCard).join("");
  render();
})();
