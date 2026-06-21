/* Data-driven NEXT MSS listing. Product facts come only from NEXT_MSS_DATA. */
(function () {
  "use strict";

  function escapeHtml(value) {
    return String(value ?? "").replace(/[&<>'"]/g, char => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;",
    })[char]);
  }

  function imageMarkup(product) {
    if (!product.image) {
      return '<div class="mss-image-placeholder">Hình ảnh đang được cập nhật</div>';
    }
    return `<img src="${escapeHtml(product.image)}" alt="${escapeHtml(product.name_vi)}" loading="lazy">`;
  }

  function quoteUrl(product) {
    return `contact.html?pid=${encodeURIComponent(product.sku)}&cfg=${encodeURIComponent(product.name_vi)}`;
  }

  function cardMarkup(product) {
    return `<article class="mss-card" data-group="${escapeHtml(product.group_id)}">
      <a class="mss-card__media" href="mss-product.html?id=${encodeURIComponent(product.sku)}"
         aria-label="Xem chi tiết ${escapeHtml(product.name_vi)}">
        ${imageMarkup(product)}
      </a>
      <div class="mss-card__body">
        <span class="mss-card__group">${escapeHtml(product.group_vi)}</span>
        <h2><a href="mss-product.html?id=${encodeURIComponent(product.sku)}">${escapeHtml(product.name_vi)}</a></h2>
        <dl class="mss-card__facts">
          <div><dt>Mã sản phẩm</dt><dd>${escapeHtml(product.sku)}</dd></div>
          <div><dt>Kích thước</dt><dd>${escapeHtml(product.dimensions_display)}</dd></div>
        </dl>
        <div class="mss-card__actions">
          <a class="mss-card__detail" href="mss-product.html?id=${encodeURIComponent(product.sku)}">Xem chi tiết</a>
          <a class="btn btn--primary btn--sm" href="${quoteUrl(product)}">Yêu cầu báo giá</a>
        </div>
      </div>
    </article>`;
  }

  function initMssListing() {
    const data = typeof NEXT_MSS_DATA !== "undefined" ? NEXT_MSS_DATA : null;
    const grid = document.getElementById("mss-product-grid");
    const filters = document.getElementById("mss-filters");
    if (!data || !grid || !filters) return;

    const title = document.getElementById("mss-title");
    const intro = document.getElementById("mss-intro");
    if (title) title.textContent = data.line.title_vi;
    if (intro) intro.textContent = data.line.intro_vi;

    const availableGroups = data.groups.filter(group =>
      data.products.some(product => product.group_id === group.id));
    const filterItems = [{ id: "all", name_vi: "Tất cả" }, ...availableGroups];

    const render = groupId => {
      const products = groupId === "all"
        ? data.products
        : data.products.filter(product => product.group_id === groupId);
      grid.innerHTML = products.length
        ? products.map(cardMarkup).join("")
        : '<p class="mss-empty">Chưa có sản phẩm trong nhóm này.</p>';
    };

    filters.innerHTML = filterItems.map((group, index) =>
      `<button type="button" class="mss-filter__button${index === 0 ? " is-active" : ""}"
        data-mss-filter="${escapeHtml(group.id)}">${escapeHtml(group.name_vi)}</button>`).join("");

    filters.addEventListener("click", event => {
      const button = event.target.closest("[data-mss-filter]");
      if (!button) return;
      filters.querySelectorAll("[data-mss-filter]").forEach(item =>
        item.classList.toggle("is-active", item === button));
      render(button.dataset.mssFilter);
    });

    grid.addEventListener("error", event => {
      if (!(event.target instanceof HTMLImageElement)) return;
      const placeholder = document.createElement("div");
      placeholder.className = "mss-image-placeholder";
      placeholder.textContent = "Hình ảnh đang được cập nhật";
      event.target.replaceWith(placeholder);
    }, true);

    render("all");
  }

  document.addEventListener("DOMContentLoaded", initMssListing);
})();
