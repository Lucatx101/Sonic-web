/* Shared NEXT MSS detail renderer. Product facts come only from NEXT_MSS_DATA. */
(function () {
  "use strict";

  function escapeHtml(value) {
    return String(value ?? "").replace(/[&<>'"]/g, char => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;",
    })[char]);
  }

  function notFoundMarkup() {
    return `<section class="mss-detail mss-detail--empty">
      <div class="container">
        <h1>Không tìm thấy sản phẩm</h1>
        <p>Sản phẩm bạn tìm không tồn tại hoặc chưa nằm trong danh mục NEXT MSS hiện tại.</p>
        <a class="btn btn--primary" href="next-mss.html">Quay lại danh sách NEXT MSS</a>
      </div>
    </section>`;
  }

  function imageMarkup(product) {
    if (!product.image) {
      return '<div class="mss-image-placeholder">Hình ảnh đang được cập nhật</div>';
    }
    return `<img class="mss-detail__image" src="${escapeHtml(product.image)}" alt="${escapeHtml(product.name_vi)}">`;
  }

  function dimensionMarkup(product) {
    if (!product.dimension_image) return "";
    return `<figure class="mss-dimension-block">
      <img class="mss-dimension-image" src="${escapeHtml(product.dimension_image)}"
        alt="Sơ đồ kích thước ${escapeHtml(product.name_vi)}">
    </figure>`;
  }

  function compatibilityMarkup(product) {
    const accessorySkus = product.compatible_accessory_skus || [];
    const productSkus = product.compatible_product_skus || [];
    if (!accessorySkus.length && !productSkus.length) return "";
    const sections = [];
    if (accessorySkus.length) {
      sections.push(`<div><h2>Phụ kiện tương thích</h2><ul>${accessorySkus.map(code =>
        `<li>Mã sản phẩm ${escapeHtml(code)}</li>`).join("")}</ul></div>`);
    }
    if (productSkus.length) {
      sections.push(`<div><h2>Sản phẩm tương thích</h2><ul>${productSkus.map(code =>
        `<li>Mã sản phẩm ${escapeHtml(code)}</li>`).join("")}</ul></div>`);
    }
    return `<section class="mss-detail__accessories" aria-label="Thông tin tương thích">${sections.join("")}</section>`;
  }

  function initMssProduct() {
    const data = typeof NEXT_MSS_DATA !== "undefined" ? NEXT_MSS_DATA : null;
    const root = document.getElementById("mss-product-page");
    if (!root) return;

    const sku = new URLSearchParams(window.location.search).get("id");
    const product = data && sku ? data.products.find(item => item.sku === sku && item.verified !== false) : null;
    if (!product) {
      root.innerHTML = notFoundMarkup();
      return;
    }

    document.title = `${product.name_vi} — Sonic Việt Nam`;
    const specRows = [
      ["Mã sản phẩm", product.sku],
      ["Nhóm sản phẩm", product.group_vi],
      ["Kích thước", product.dimensions_display],
      ...product.specs_vi.map(value => ["Thông số", value]),
    ].filter(row => row[1]);
    const compatibility = compatibilityMarkup(product);
    const quoteHref = `contact.html?pid=${encodeURIComponent(product.sku)}&cfg=${encodeURIComponent(product.name_vi)}`;

    root.innerHTML = `<section class="mss-detail">
      <div class="container">
        <nav class="breadcrumb" aria-label="Điều hướng">
          <a href="index.html">Trang chủ</a> / <a href="next-mss.html">NEXT MSS</a> / ${escapeHtml(product.name_vi)}
        </nav>
        <div class="mss-detail__grid">
          <div class="mss-detail__gallery">
            <div class="mss-detail__media">${imageMarkup(product)}</div>
            ${dimensionMarkup(product)}
          </div>
          <div class="mss-detail__content">
            <p class="mss-detail__line">NEXT MSS</p>
            <p class="mss-detail__group">${escapeHtml(product.group_vi)}</p>
            <h1>${escapeHtml(product.name_vi)}</h1>
            <dl class="mss-detail__specs">
              ${specRows.map(row => `<div><dt>${escapeHtml(row[0])}</dt><dd>${escapeHtml(row[1])}</dd></div>`).join("")}
            </dl>
            ${compatibility}
            <div class="mss-detail__actions">
              <a class="btn btn--primary" href="${quoteHref}">Yêu cầu báo giá</a>
              <a class="btn btn--ghost" id="mss-zalo-link" href="#" target="_blank" rel="noopener">Chat Zalo</a>
              <a class="mss-detail__back" href="next-mss.html">← Quay lại danh sách</a>
            </div>
          </div>
        </div>
      </div>
    </section>`;

    root.addEventListener("error", event => {
      if (!(event.target instanceof HTMLImageElement)) return;
      if (event.target.classList.contains("mss-dimension-image")) {
        event.target.closest(".mss-dimension-block")?.remove();
        return;
      }
      const placeholder = document.createElement("div");
      placeholder.className = "mss-image-placeholder";
      placeholder.textContent = "Hình ảnh đang được cập nhật";
      event.target.replaceWith(placeholder);
    }, true);

    const zalo = document.getElementById("mss-zalo-link");
    if (zalo && typeof CONFIG !== "undefined") {
      zalo.href = `https://zalo.me/${CONFIG.zalo || CONFIG.hotlineRaw || ""}`;
    }
  }

  document.addEventListener("DOMContentLoaded", initMssProduct);
})();
