(function () {
  "use strict";

  if (typeof TOOLS_DATA === "undefined") return;

  const root = document.getElementById("tool-product-root");
  if (!root) return;

  function getRequestedSku() {
    try {
      return new URLSearchParams(window.location.search).get("id")?.trim() || "";
    } catch (error) {
      return "";
    }
  }

  function createElement(tagName, className, text) {
    const element = document.createElement(tagName);
    if (className) element.className = className;
    if (text !== undefined) element.textContent = text;
    return element;
  }

  function contactHref(product) {
    const context = [
      product.category.name,
      product.group?.name,
      `${product.name} (SKU ${product.sku})`
    ].filter(Boolean).join(" – ");
    return `contact.html?cfg=${encodeURIComponent(context)}`;
  }

  function flattenProducts() {
    const products = [];

    TOOLS_DATA.categories.forEach((category) => {
      category.items?.forEach((item) => {
        if (item.type === "product" && item.detailEnabled) {
          products.push({ ...item, category });
        }

        if (item.type === "family") {
          item.products?.forEach((product) => {
            if (!product.detailEnabled) return;
            products.push({
              ...product,
              category,
              family: item,
              image: product.image || item.image,
              imageAlt: product.imageAlt || item.imageAlt
            });
          });
        }
      });

      category.groups?.forEach((group) => {
        group.items?.forEach((item) => {
          if (item.type === "product" && item.detailEnabled) {
            products.push({ ...item, category, group });
          }

          if (item.type === "family") {
            item.products?.forEach((product) => {
              if (!product.detailEnabled) return;
              products.push({
                ...product,
                category,
                group,
                family: item,
                image: product.image || item.image || group.image,
                imageAlt: product.imageAlt || item.imageAlt || group.imageAlt
              });
            });
          }
        });
      });
    });

    return products;
  }

  function renderList(title, items) {
    if (!items?.length) return null;

    const section = createElement("section", "tool-product__section");
    section.appendChild(createElement("h2", null, title));

    const list = createElement("ul", "tool-product__list");
    items.forEach((item) => list.appendChild(createElement("li", null, item)));
    section.appendChild(list);

    return section;
  }

  function renderSpecs(specs) {
    const entries = Object.entries(specs || {}).filter((entry) => entry[1]);
    if (!entries.length) return null;

    const section = createElement("section", "tool-product__section");
    section.appendChild(createElement("h2", null, "Thông số đã xác minh"));

    const grid = createElement("div", "tool-product__specs");
    entries.forEach(([label, value]) => {
      const item = createElement("div", "tool-product__spec");
      item.append(createElement("span", null, label), createElement("strong", null, value));
      grid.appendChild(item);
    });

    section.appendChild(grid);
    return section;
  }

  function renderFallback() {
    const wrap = createElement("div", "tool-product__fallback");
    const title = createElement("h1", null, "Không tìm thấy sản phẩm");
    title.id = "tool-product-title";
    const description = createElement(
      "p",
      null,
      "SKU này chưa được bật trang chi tiết hoặc không nằm trong dữ liệu dụng cụ đã xác minh."
    );
    const action = document.createElement("a");
    action.className = "tool-product__cta";
    action.href = "tools.html";
    action.textContent = "Quay lại danh mục dụng cụ";

    wrap.append(title, description, action);
    root.replaceChildren(wrap);
    document.title = "Không tìm thấy sản phẩm | Sonic Việt Nam";
  }

  function renderProduct(product) {
    const shell = createElement("article", "tool-product__shell");

    const media = createElement("figure", "tool-product__media");
    const image = document.createElement("img");
    image.src = product.image;
    image.alt = product.imageAlt || product.name;
    image.width = 960;
    image.height = 720;
    media.appendChild(image);

    const content = createElement("div", "tool-product__content");
    content.appendChild(
      createElement(
        "p",
        "tool-product__breadcrumb",
        ["Dụng cụ", product.category.name, product.group?.name].filter(Boolean).join(" / ")
      )
    );

    const title = createElement("h1", null, product.name);
    title.id = "tool-product-title";
    content.append(title, createElement("span", "tool-product__sku", `SKU ${product.sku}`));

    if (product.description) {
      content.appendChild(createElement("p", "tool-product__description", product.description));
    }

    const specs = renderSpecs(product.specs);
    if (specs) content.appendChild(specs);

    const features = renderList("Tính năng", product.features);
    if (features) content.appendChild(features);

    const includedItems = renderList("Thành phần chính", product.includedItems);
    if (includedItems) content.appendChild(includedItems);

    const actions = createElement("div", "tool-product__actions");
    const quote = document.createElement("a");
    quote.className = "tool-product__cta";
    quote.href = contactHref(product);
    quote.textContent = "Yêu cầu báo giá";
    actions.appendChild(quote);

    if (typeof CONFIG !== "undefined") {
      const call = document.createElement("a");
      call.className = "tool-product__cta";
      call.href = `tel:${CONFIG.hotlineRaw || ""}`;
      call.textContent = `Gọi tư vấn: ${CONFIG.hotline || ""}`;
      actions.appendChild(call);

      const zalo = document.createElement("a");
      zalo.className = "tool-product__cta";
      zalo.href = `https://zalo.me/${CONFIG.zalo || CONFIG.hotlineRaw || ""}`;
      zalo.target = "_blank";
      zalo.rel = "noopener";
      zalo.textContent = "Chat Zalo";
      actions.appendChild(zalo);
    }

    content.appendChild(actions);
    shell.append(media, content);
    root.replaceChildren(shell);
    document.title = `${product.name} | Sonic Việt Nam`;
  }

  const requestedSku = getRequestedSku();
  const product = flattenProducts().find((item) => item.sku === requestedSku);

  if (!product) {
    renderFallback();
  } else {
    renderProduct(product);
  }
})();
