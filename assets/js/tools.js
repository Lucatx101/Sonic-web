(function () {
  "use strict";

  if (typeof TOOLS_DATA === "undefined") return;

  const categories = TOOLS_DATA.categories.filter((category) => category.enabled);
  const categoryIds = new Set(categories.map((category) => category.id));
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  const heroImage = document.getElementById("tools-hero-image");
  const introTitle = document.getElementById("tools-intro-title");
  const introBody = document.getElementById("tools-intro-body");
  const introImage = document.getElementById("tools-intro-image");
  const categoryGrid = document.getElementById("tools-category-grid");
  const preview = document.getElementById("tools-category-preview");

  function setText(element, value) {
    if (element) element.textContent = value;
  }

  function createElement(tagName, className, text) {
    const element = document.createElement(tagName);
    if (className) element.className = className;
    if (text !== undefined) element.textContent = text;
    return element;
  }

  function contactHref(category, subject) {
    const subjectLabel = subject?.sku
      ? `${subject.name} (SKU ${subject.sku})`
      : subject?.name;
    const context = subjectLabel ? `${category.name} – ${subjectLabel}` : category.name;
    return `contact.html?cfg=${encodeURIComponent(context)}`;
  }

  function productDetailHref(product) {
    return `tool-product.html?id=${encodeURIComponent(product.sku)}`;
  }

  function renderPageContent() {
    if (heroImage) {
      heroImage.src = TOOLS_DATA.hero.image;
      heroImage.alt = TOOLS_DATA.hero.imageAlt;
    }
    setText(introTitle, TOOLS_DATA.intro.title);
    if (introBody) {
      introBody.replaceChildren();
      TOOLS_DATA.intro.paragraphs.forEach((text) => {
        const paragraph = document.createElement("p");
        paragraph.textContent = text;
        introBody.appendChild(paragraph);
      });
    }
    if (introImage) {
      introImage.src = TOOLS_DATA.intro.image;
      introImage.alt = TOOLS_DATA.intro.imageAlt;
    }
  }

  function createCategoryCard(category, index) {
    const card = document.createElement("a");
    card.className = "tools-category-card";
    card.href = `#${category.id}`;
    card.dataset.toolsCategory = category.id;
    card.setAttribute("aria-controls", "tools-category-preview");

    const media = document.createElement("span");
    media.className = "tools-category-card__media";

    const image = document.createElement("img");
    image.src = category.image;
    image.alt = category.imageAlt;
    image.width = 1200;
    image.height = 800;
    image.loading = "lazy";
    media.appendChild(image);

    const body = document.createElement("span");
    body.className = "tools-category-card__body";

    const number = document.createElement("span");
    number.className = "tools-category-card__number";
    number.textContent = String(index + 1).padStart(2, "0");

    const title = document.createElement("span");
    title.className = "tools-category-card__title";
    title.textContent = category.name;

    const description = document.createElement("span");
    description.className = "tools-category-card__description";
    description.textContent = category.description;

    const action = document.createElement("span");
    action.className = "tools-category-card__action";
    action.innerHTML = "Xem danh mục <span aria-hidden=\"true\">→</span>";

    body.append(number, title, description, action);
    card.append(media, body);
    return card;
  }

  function renderCategoryGrid() {
    if (!categoryGrid) return;
    const fragment = document.createDocumentFragment();
    categories.forEach((category, index) => {
      fragment.appendChild(createCategoryCard(category, index));
    });
    categoryGrid.replaceChildren(fragment);
  }

  function readHash() {
    try {
      return decodeURIComponent(window.location.hash.slice(1));
    } catch (error) {
      return "";
    }
  }

  function createFamilyTable(family) {
    const wrapper = createElement("div", "tools-family-table-wrap");
    const table = createElement("table", "tools-family-table");
    const caption = createElement("caption", "sr-only", family.name);
    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");

    family.columns.forEach((column) => {
      const th = document.createElement("th");
      th.scope = "col";
      th.textContent = column.label;
      headerRow.appendChild(th);
    });

    const tbody = document.createElement("tbody");
    family.variants.forEach((variant) => {
      const row = document.createElement("tr");
      family.columns.forEach((column, index) => {
        const td = document.createElement("td");
        td.dataset.label = column.label;
        td.dataset.column = column.key;
        td.textContent = variant[index] || "—";
        row.appendChild(td);
      });
      tbody.appendChild(row);
    });

    thead.appendChild(headerRow);
    table.append(caption, thead, tbody);
    wrapper.appendChild(table);
    return wrapper;
  }

  function createFamilyCard(category, family, index) {
    const article = createElement("article", "tools-family-card");
    const summary = createElement("div", "tools-family-card__summary");
    const media = createElement("figure", "tools-family-card__media");
    const image = document.createElement("img");
    const contentId = `tools-family-${family.id}`;

    image.src = family.image;
    image.alt = family.imageAlt;
    image.width = 960;
    image.height = 640;
    image.loading = "lazy";
    media.appendChild(image);

    const copy = createElement("div", "tools-family-card__copy");
    const title = createElement("h4", null, family.name);
    const description = createElement("p", null, family.description);

    const toggle = document.createElement("button");
    toggle.type = "button";
    toggle.className = "tools-family__toggle";
    toggle.dataset.familyToggle = family.id;
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-controls", contentId);

    const toggleText = createElement(
      "span",
      "tools-family__toggle-text",
      "Xem bảng chủng loại"
    );
    const toggleIcon = createElement("span", "tools-family__toggle-icon", "＋");
    toggleIcon.setAttribute("aria-hidden", "true");
    toggle.append(toggleText, toggleIcon);

    copy.append(title, description, toggle);
    summary.append(media, copy);

    const details = createElement("div", "tools-family-card__details");
    details.id = contentId;
    details.hidden = true;

    const tableIntro = createElement(
      "p",
      "tools-family-card__table-note",
      "Bảng dưới đây hiển thị SKU và thông số đã xác minh, không bao gồm giá hoặc tồn kho."
    );
    const cta = document.createElement("a");
    cta.className = "tools-family-card__cta";
    cta.href = contactHref(category, family);
    cta.textContent = "Yêu cầu báo giá";

    details.append(tableIntro, createFamilyTable(family), cta);
    article.style.setProperty("--family-index", String(index));
    article.append(summary, details);
    return article;
  }

  function createItemProductList(category, item) {
    const list = createElement("ul", "tools-family-products");

    item.products.forEach((product) => {
      const row = createElement("li", "tools-family-products__item");
      const copy = createElement("div", "tools-family-products__copy");
      const title = createElement("h5", null, product.name);
      const sku = createElement("span", "tools-family-products__sku", `SKU ${product.sku}`);
      copy.append(title, sku);

      if (product.details) {
        copy.appendChild(createElement("p", null, product.details));
      }

      const actions = createElement("div", "tools-family-products__actions");

      if (product.detailEnabled) {
        const detail = document.createElement("a");
        detail.className = "tools-family-products__detail";
        detail.href = productDetailHref(product);
        detail.textContent = "Xem chi tiết";
        actions.appendChild(detail);
      }

      const quote = document.createElement("a");
      quote.className = "tools-family-products__quote";
      quote.href = contactHref(category, product);
      quote.textContent = "Yêu cầu báo giá";
      actions.appendChild(quote);

      row.append(copy, actions);
      list.appendChild(row);
    });

    return list;
  }

  function createToolItemCard(category, item, index) {
    const article = createElement("article", `tools-item-card tools-item-card--${item.type}`);
    const contentId = item.type === "family" ? `tools-item-family-${item.id}` : "";

    const media = createElement("figure", "tools-item-card__media");
    const image = document.createElement("img");
    image.src = item.image;
    image.alt = item.imageAlt;
    image.width = 960;
    image.height = 720;
    image.loading = "lazy";
    media.appendChild(image);

    const body = createElement("div", "tools-item-card__body");
    const title = createElement("h4", null, item.name);
    const description = createElement("p", null, item.description);
    body.append(title);

    if (item.type === "product" && item.sku) {
      body.appendChild(createElement("span", "tools-item-card__sku", `SKU ${item.sku}`));
    }

    body.appendChild(description);

    const actions = createElement("div", "tools-item-card__actions");

    if (item.type === "product") {
      if (item.detailEnabled) {
        const detail = document.createElement("a");
        detail.className = "tools-item-card__link";
        detail.href = productDetailHref(item);
        detail.textContent = "Xem chi tiết";
        actions.appendChild(detail);
      }

      const quote = document.createElement("a");
      quote.className = "tools-item-card__quote";
      quote.href = contactHref(category, item);
      quote.textContent = "Yêu cầu báo giá";
      actions.appendChild(quote);
    } else {
      const toggle = document.createElement("button");
      toggle.type = "button";
      toggle.className = "tools-item-card__toggle";
      toggle.dataset.toolFamilyToggle = item.id;
      toggle.dataset.toggleClosed = "Xem các chủng loại";
      toggle.dataset.toggleOpen = "Thu gọn";
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-controls", contentId);

      const toggleText = createElement("span", "tools-item-card__toggle-text", "Xem các chủng loại");
      const toggleIcon = createElement("span", "tools-item-card__toggle-icon", "＋");
      toggleIcon.setAttribute("aria-hidden", "true");
      toggle.append(toggleText, toggleIcon);

      const quote = document.createElement("a");
      quote.className = "tools-item-card__quote";
      quote.href = contactHref(category, item);
      quote.textContent = "Tư vấn lựa chọn";

      actions.append(toggle, quote);
    }

    body.appendChild(actions);
    article.append(media, body);

    if (item.type === "family") {
      const details = createElement("div", "tools-item-card__details");
      details.id = contentId;
      details.hidden = true;
      details.appendChild(createItemProductList(category, item));
      article.appendChild(details);
    }

    article.style.setProperty("--item-index", String(index));
    return article;
  }

  function renderItemPreview(category) {
    if (!preview) return;
    preview.className = "tools-preview tools-preview--items";
    preview.setAttribute("aria-labelledby", "tools-preview-title");

    const head = createElement("div", "tools-family-panel__head");
    const title = createElement("h3", null, category.name);
    title.id = "tools-preview-title";
    const description = createElement("p", null, category.description);
    head.append(title, description);

    const itemGrid = createElement("div", "tools-item-grid");
    category.items.forEach((item, index) => {
      itemGrid.appendChild(createToolItemCard(category, item, index));
    });

    preview.replaceChildren(head, itemGrid);
  }

  function renderFamilyPreview(category) {
    if (!preview) return;
    preview.className = "tools-preview tools-preview--families";
    preview.setAttribute("aria-labelledby", "tools-preview-title");

    const head = createElement("div", "tools-family-panel__head");
    const title = createElement("h3", null, category.name);
    title.id = "tools-preview-title";
    const description = createElement("p", null, category.description);
    head.append(title, description);

    const familyList = createElement("div", "tools-family-list");
    category.families.forEach((family, index) => {
      familyList.appendChild(createFamilyCard(category, family, index));
    });

    preview.replaceChildren(head, familyList);
  }

  function renderFallbackPreview(category) {
    if (!preview) return;
    preview.className = "tools-preview";
    preview.setAttribute("aria-labelledby", "tools-preview-title");

    const media = createElement("figure", "tools-preview__media");
    const image = document.createElement("img");
    image.src = category.image;
    image.alt = category.imageAlt;
    image.width = 1200;
    image.height = 800;
    media.appendChild(image);

    const copy = createElement("div", "tools-preview__copy");
    const title = createElement("h3", null, category.name);
    title.id = "tools-preview-title";
    const description = createElement("p", null, category.description);
    const action = document.createElement("a");
    action.className = "tools-preview__action";
    action.href = contactHref(category);
    action.innerHTML = "Tư vấn nhóm dụng cụ <span aria-hidden=\"true\">→</span>";

    copy.append(title, description, action);
    preview.replaceChildren(media, copy);
  }

  function renderPreview(categoryId, shouldScroll) {
    const activeCategory =
      categories.find((category) => category.id === categoryId) || categories[0];
    if (!activeCategory) return;

    document.querySelectorAll("[data-tools-category]").forEach((card) => {
      const isActive = card.dataset.toolsCategory === activeCategory.id;
      card.classList.toggle("is-active", isActive);
      if (isActive) {
        card.setAttribute("aria-current", "true");
      } else {
        card.removeAttribute("aria-current");
      }
    });

    if (activeCategory.items?.length) {
      renderItemPreview(activeCategory);
    } else if (activeCategory.families?.length) {
      renderFamilyPreview(activeCategory);
    } else {
      renderFallbackPreview(activeCategory);
    }

    if (shouldScroll && preview) {
      preview.scrollIntoView({
        behavior: reducedMotion.matches ? "auto" : "smooth",
        block: "start"
      });
    }
  }

  function syncFromHash(shouldScroll) {
    const categoryId = readHash();
    const isCategoryHash = categoryIds.has(categoryId);
    renderPreview(
      isCategoryHash ? categoryId : categories[0]?.id,
      shouldScroll && isCategoryHash
    );
  }

  if (categoryGrid) {
    categoryGrid.addEventListener("click", (event) => {
      const card = event.target.closest("[data-tools-category]");
      if (!card) return;
      event.preventDefault();

      const categoryId = card.dataset.toolsCategory;
      if (readHash() === categoryId) {
        renderPreview(categoryId, true);
      } else {
        window.location.hash = categoryId;
      }
    });
  }

  if (preview) {
    preview.addEventListener("click", (event) => {
      const toggle = event.target.closest("[data-family-toggle], [data-tool-family-toggle]");
      if (!toggle) return;

      const details = document.getElementById(toggle.getAttribute("aria-controls"));
      if (!details) return;

      const isExpanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!isExpanded));
      details.hidden = isExpanded;

      const text = toggle.querySelector(".tools-family__toggle-text, .tools-item-card__toggle-text");
      const icon = toggle.querySelector(".tools-family__toggle-icon, .tools-item-card__toggle-icon");
      const closedText = toggle.dataset.toggleClosed || "Xem bảng chủng loại";
      const openText = toggle.dataset.toggleOpen || "Thu gọn bảng";
      if (text) text.textContent = isExpanded ? closedText : openText;
      if (icon) icon.textContent = isExpanded ? "＋" : "−";
    });
  }

  window.addEventListener("hashchange", () => syncFromHash(true));

  renderPageContent();
  renderCategoryGrid();
  syncFromHash(false);
})();
