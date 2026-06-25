/* ===== MSS+ product detail renderer ===== */
(function () {
  "use strict";

  const data = typeof MSS_PLUS_DATA !== "undefined" ? MSS_PLUS_DATA : null;
  const root = document.getElementById("mss-plus-product-root");
  if (!data || !root) return;

  const groups = new Map(data.groups.map(group => [group.id, group.name]));

  function escapeHtml(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function fallbackMarkup(product) {
    return `
      <span class="mss-plus-detail__fallback" role="img" aria-label="Chưa có ảnh riêng cho ${escapeHtml(product.name)}">
        <span>MSS+</span>
        <small>SKU ${escapeHtml(product.sku)}</small>
      </span>`;
  }

  function imageMarkup(product) {
    if (!product.image) return fallbackMarkup(product);
    return `
      <img
        class="mss-plus-detail__image"
        src="${escapeHtml(product.image)}"
        alt="${escapeHtml(product.name)}"
        data-mss-plus-detail-image
      />`;
  }

  function invalidState(message) {
    root.innerHTML = `
      <section class="mss-plus-detail mss-plus-detail--empty">
        <div class="container">
          <span class="mss-plus-detail__eyebrow">Sonic MSS+</span>
          <h1>Không tìm thấy sản phẩm.</h1>
          <p>${escapeHtml(message)}</p>
          <a class="btn btn--primary" href="mss-plus.html#mss-plus-catalog">Quay lại danh mục MSS+</a>
        </div>
      </section>`;
  }

  function relatedMarkup(product) {
    const related = (product.relatedProducts || [])
      .map(sku => data.products.find(item => item.sku === sku))
      .filter(Boolean);
    if (!related.length) return "";
    return `
      <section class="mss-plus-related" aria-labelledby="mss-plus-related-title">
        <div class="container">
          <h2 id="mss-plus-related-title">Sản phẩm liên quan</h2>
          <div class="mss-plus-related__grid">
            ${related.map(item => `
              <a href="mss-plus-product.html?id=${encodeURIComponent(item.sku)}">
                <span>${escapeHtml(groups.get(item.group) || item.group)}</span>
                <strong>${escapeHtml(item.name)}</strong>
                <small>SKU ${escapeHtml(item.sku)}</small>
              </a>`).join("")}
          </div>
        </div>
      </section>`;
  }

  function renderProduct(product) {
    const groupName = groups.get(product.group) || product.group;
    const quoteUrl = `contact.html?sp=${encodeURIComponent(product.sku)}`;
    const specificationRows = [
      ...(product.dimensions ? [{ label: "Kích thước", value: product.dimensions }] : []),
      ...(product.specifications || []),
    ].filter(row => row.label && row.value);

    document.title = `${product.name} — Sonic MSS+ | Sonic Việt Nam`;
    root.innerHTML = `
      <section class="mss-plus-detail">
        <div class="container">
          <nav class="breadcrumb" aria-label="Breadcrumb">
            <a href="index.html">Trang chủ</a> /
            <a href="mss-plus.html">MSS+</a> /
            <a href="mss-plus.html#mss-plus-catalog">${escapeHtml(groupName)}</a> /
            <span>SKU ${escapeHtml(product.sku)}</span>
          </nav>
          <div class="mss-plus-detail__grid">
            <div class="mss-plus-detail__gallery">
              <figure class="mss-plus-detail__media">
                ${imageMarkup(product)}
              </figure>
              ${product.dimensionImage ? `
                <figure class="mss-plus-detail__dimension">
                  <figcaption>Kích thước sản phẩm</figcaption>
                  <img src="${escapeHtml(product.dimensionImage)}" alt="Bản vẽ kích thước ${escapeHtml(product.name)}" />
                </figure>` : ""}
            </div>
            <div class="mss-plus-detail__content">
              <span class="mss-plus-detail__eyebrow">${escapeHtml(groupName)}</span>
              <p class="mss-plus-detail__sku">SKU ${escapeHtml(product.sku)}</p>
              <h1>${escapeHtml(product.name)}</h1>
              ${specificationRows.length ? `
                <dl class="mss-plus-detail__specs">
                  ${specificationRows.map(row => `
                    <div><dt>${escapeHtml(row.label)}</dt><dd>${escapeHtml(row.value)}</dd></div>`).join("")}
                </dl>` : ""}
              ${(product.compatibility || []).length ? `
                <div class="mss-plus-detail__compatibility">
                  <h2>Tương thích</h2>
                  <ul>${product.compatibility.map(item => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
                </div>` : ""}
              <div class="mss-plus-detail__actions">
                <a class="btn btn--primary" href="${quoteUrl}">Yêu cầu báo giá · SKU ${escapeHtml(product.sku)}</a>
                <a class="btn btn--ghost" data-cfg="hotline" data-cfg-href-only href="tel:">Gọi tư vấn: <span data-cfg="hotline"></span></a>
                <a class="mss-plus-detail__zalo" data-cfg="zalo" data-cfg-href-only href="#" target="_blank" rel="noopener">Chat Zalo</a>
              </div>
              <a class="mss-plus-detail__back" href="mss-plus.html#mss-plus-catalog">← Trở lại danh mục MSS+</a>
            </div>
          </div>
        </div>
      </section>
      ${relatedMarkup(product)}`;

    const image = root.querySelector("[data-mss-plus-detail-image]");
    if (image) {
      image.addEventListener("error", () => {
        image.outerHTML = fallbackMarkup(product);
      }, { once: true });
    }
  }

  const rawId = new URLSearchParams(window.location.search).get("id");
  const id = String(rawId ?? "").trim();
  if (!id || !/^\d{5,7}$/.test(id)) {
    invalidState("SKU trong đường dẫn không hợp lệ.");
    return;
  }

  const product = data.products.find(item => item.sku === id);
  if (!product) {
    invalidState(`Không có SKU ${id} trong danh mục MSS+ đã xác minh.`);
    return;
  }

  renderProduct(product);
})();
