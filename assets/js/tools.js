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
  const searchForm = document.getElementById("tools-search-form");
  const searchInput = document.getElementById("tools-search-input");
  const searchReset = document.getElementById("tools-search-reset");
  const searchResults = document.getElementById("tools-search-results");
  const specialtyGroupState = new Map();
  const SEARCH_RESULT_LIMIT = 16;
  let searchIndex = [];
  let activeSearchResults = [];
  let searchDebounce = 0;

  function setText(element, value) {
    if (element) element.textContent = value;
  }

  function createElement(tagName, className, text) {
    const element = document.createElement(tagName);
    if (className) element.className = className;
    if (text !== undefined) element.textContent = text;
    return element;
  }

  function contactHref(category, subject, group) {
    const subjectLabel = subject?.sku
      ? `${subject.name} (SKU ${subject.sku})`
      : subject?.name;
    const contextParts = [category.name];
    if (group?.name) contextParts.push(group.name);
    if (subjectLabel) contextParts.push(subjectLabel);
    const context = contextParts.join(" – ");
    return `contact.html?cfg=${encodeURIComponent(context)}`;
  }

  function productDetailHref(product) {
    return `tool-product.html?id=${encodeURIComponent(product.sku)}`;
  }

  function normalizeSearchText(value) {
    return String(value ?? "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[đĐ]/g, "d")
      .toLowerCase()
      .replace(/\s+/g, " ")
      .trim();
  }

  function flattenSearchFields(value) {
    if (value === null || value === undefined) return [];
    if (Array.isArray(value)) return value.flatMap(flattenSearchFields);
    if (typeof value === "object") return Object.values(value).flatMap(flattenSearchFields);
    return [String(value)];
  }

  function escapeSelector(value) {
    if (window.CSS?.escape) return window.CSS.escape(String(value));
    return String(value).replace(/["\\]/g, "\\$&");
  }

  function getFamilySkuIndex(family) {
    return family.columns?.findIndex((column) => column.key === "sku" || column.label === "SKU") ?? -1;
  }

  function getFamilyVariantSku(family, variant) {
    const skuIndex = getFamilySkuIndex(family);
    return skuIndex >= 0 ? String(variant[skuIndex] || "").trim() : "";
  }

  function addSearchEntry(entries, entry, fields) {
    const haystack = normalizeSearchText(flattenSearchFields(fields).join(" "));
    if (!haystack) return;

    entries.push({
      ...entry,
      haystack,
      titleNormalized: normalizeSearchText(entry.title),
      skuNormalized: normalizeSearchText(entry.sku)
    });
  }

  function productSearchFields(product) {
    return [
      product.sku,
      product.name,
      product.description,
      product.details,
      product.aliases,
      product.imageAlt,
      product.features,
      product.includedItems,
      product.specs
    ];
  }

  function buildSearchIndex() {
    const entries = [];

    categories.forEach((category) => {
      addSearchEntry(
        entries,
        {
          type: "category",
          label: "Danh mục",
          title: category.name,
          categoryId: category.id,
          meta: "Danh mục dụng cụ"
        },
        [category.name, category.description, category.scope, category.imageAlt]
      );

      category.families?.forEach((family) => {
        addSearchEntry(
          entries,
          {
            type: "family",
            label: "Nhóm sản phẩm",
            title: family.name,
            categoryId: category.id,
            familyId: family.id,
            meta: category.name
          },
          [
            category.name,
            category.description,
            family.name,
            family.description,
            family.imageAlt,
            family.columns?.map((column) => column.label),
            family.variants
          ]
        );

        family.variants?.forEach((variant) => {
          const sku = getFamilyVariantSku(family, variant);
          addSearchEntry(
            entries,
            {
              type: "sku",
              label: "Chủng loại",
              title: sku ? `${family.name} — SKU ${sku}` : family.name,
              categoryId: category.id,
              familyId: family.id,
              sku,
              meta: `${category.name} / ${family.name}`
            },
            [category.name, family.name, family.description, sku, variant]
          );
        });
      });

      category.items?.forEach((item) => {
        collectItemSearchEntries(entries, category, item);
      });

      category.groups?.forEach((group) => {
        addSearchEntry(
          entries,
          {
            type: "group",
            label: "Nhóm ứng dụng",
            title: group.name,
            categoryId: category.id,
            groupId: group.id,
            meta: category.name
          },
          [category.name, category.description, group.name, group.description, group.imageAlt]
        );

        group.items?.forEach((item) => {
          collectItemSearchEntries(entries, category, item, group);
        });
      });
    });

    return entries;
  }

  function collectItemSearchEntries(entries, category, item, group) {
    const itemMeta = [category.name, group?.name].filter(Boolean).join(" / ");

    if (item.type === "product") {
      addSearchEntry(
        entries,
        {
          type: "product",
          label: "Sản phẩm",
          title: item.name,
          categoryId: category.id,
          groupId: group?.id,
          itemId: item.sku,
          sku: item.sku,
          detailUrl: item.detailEnabled ? productDetailHref(item) : "",
          meta: itemMeta || category.name
        },
        [category.name, category.description, group?.name, group?.description, productSearchFields(item)]
      );
      return;
    }

    addSearchEntry(
      entries,
      {
        type: "family",
        label: "Nhóm sản phẩm",
        title: item.name,
        categoryId: category.id,
        groupId: group?.id,
        familyId: item.id,
        meta: itemMeta || category.name
      },
      [
        category.name,
        category.description,
        group?.name,
        group?.description,
        item.name,
        item.description,
        item.imageAlt,
        item.products
      ]
    );

    item.products?.forEach((product) => {
      addSearchEntry(
        entries,
        {
          type: "sku",
          label: "Chủng loại",
          title: product.name,
          categoryId: category.id,
          groupId: group?.id,
          familyId: item.id,
          sku: product.sku,
          detailUrl: product.detailEnabled ? productDetailHref(product) : "",
          meta: [category.name, group?.name, item.name].filter(Boolean).join(" / ")
        },
        [
          category.name,
          category.description,
          group?.name,
          group?.description,
          item.name,
          item.description,
          item.imageAlt,
          productSearchFields(product)
        ]
      );
    });
  }

  function getSearchScore(entry, query, tokens) {
    let score = 0;
    if (entry.skuNormalized && entry.skuNormalized === query) score += 120;
    if (entry.skuNormalized && entry.skuNormalized.startsWith(query)) score += 70;
    if (entry.titleNormalized === query) score += 65;
    if (entry.titleNormalized.startsWith(query)) score += 38;
    if (entry.titleNormalized.includes(query)) score += 24;
    tokens.forEach((token) => {
      if (entry.skuNormalized?.includes(token)) score += 20;
      if (entry.titleNormalized.includes(token)) score += 12;
    });
    if (entry.type === "product") score += 8;
    if (entry.type === "sku") score += 6;
    if (entry.detailUrl) score += 4;
    return score;
  }

  function findSearchMatches(query) {
    const normalizedQuery = normalizeSearchText(query);
    if (!normalizedQuery) return [];

    const tokens = normalizedQuery.split(" ").filter(Boolean);
    return searchIndex
      .filter((entry) => tokens.every((token) => entry.haystack.includes(token)))
      .map((entry) => ({
        ...entry,
        score: getSearchScore(entry, normalizedQuery, tokens)
      }))
      .sort((a, b) => b.score - a.score || a.title.localeCompare(b.title, "vi"))
      .slice(0, SEARCH_RESULT_LIMIT);
  }

  function clearSearchHighlights() {
    document.querySelectorAll(".is-search-highlight").forEach((element) => {
      element.classList.remove("is-search-highlight");
    });
  }

  function renderSearchResults(query) {
    if (!searchResults || !searchReset) return;

    const trimmedQuery = query.trim();
    searchReset.hidden = !trimmedQuery;
    searchResults.replaceChildren();

    if (!trimmedQuery) {
      searchResults.hidden = true;
      activeSearchResults = [];
      clearSearchHighlights();
      return;
    }

    activeSearchResults = findSearchMatches(trimmedQuery);
    searchResults.hidden = false;

    if (!activeSearchResults.length) {
      const empty = createElement(
        "p",
        "tools-search__empty",
        "Không tìm thấy dụng cụ phù hợp. Thử nhập SKU hoặc tên nhóm khác."
      );
      searchResults.appendChild(empty);
      return;
    }

    const intro = createElement(
      "p",
      "tools-search__summary",
      "Chọn một kết quả để mở đúng nhóm hoặc trang chi tiết."
    );
    const list = createElement("ul", "tools-search__list");

    activeSearchResults.forEach((entry, index) => {
      const item = createElement("li", "tools-search__item");
      const control = entry.detailUrl ? document.createElement("a") : document.createElement("button");
      control.className = "tools-search__result";
      control.dataset.searchIndex = String(index);

      if (entry.detailUrl) {
        control.href = entry.detailUrl;
      } else {
        control.type = "button";
      }

      const label = createElement("span", "tools-search__result-label", entry.label);
      const title = createElement("span", "tools-search__result-title", entry.title);
      const meta = createElement("span", "tools-search__result-meta", entry.meta);
      control.append(label, title, meta);

      if (entry.sku) {
        control.appendChild(createElement("span", "tools-search__result-sku", `SKU ${entry.sku}`));
      }

      item.appendChild(control);
      list.appendChild(item);
    });

    searchResults.append(intro, list);
  }

  function openToggleForEntry(entry) {
    if (!preview) return;
    const selectors = [];
    if (entry.familyId) {
      selectors.push(`[data-family-toggle="${escapeSelector(entry.familyId)}"]`);
      selectors.push(`[data-tool-family-toggle="${escapeSelector(entry.familyId)}"]`);
    }

    const toggle = selectors.length ? preview.querySelector(selectors.join(",")) : null;
    if (toggle && toggle.getAttribute("aria-expanded") !== "true") {
      toggle.click();
    }
  }

  function findSearchTarget(entry) {
    if (!preview) return null;
    if (entry.sku) {
      const skuTarget = preview.querySelector(`[data-search-sku="${escapeSelector(entry.sku)}"]`);
      if (skuTarget) return skuTarget;
    }

    if (entry.familyId) {
      const familyTarget = preview.querySelector(`[data-search-family="${escapeSelector(entry.familyId)}"]`);
      if (familyTarget) return familyTarget;
    }

    if (entry.itemId) {
      const itemTarget = preview.querySelector(`[data-search-item="${escapeSelector(entry.itemId)}"]`);
      if (itemTarget) return itemTarget;
    }

    if (entry.groupId) {
      return document.getElementById("tools-specialty-group-panel");
    }

    return preview;
  }

  function activateSearchResult(entry) {
    if (!entry?.categoryId) return;

    clearSearchHighlights();
    if (entry.groupId) specialtyGroupState.set(entry.categoryId, entry.groupId);

    if (readHash() !== entry.categoryId) {
      window.location.hash = entry.categoryId;
    }

    renderPreview(entry.categoryId, true);

    window.setTimeout(() => {
      openToggleForEntry(entry);

      window.setTimeout(() => {
        const target = findSearchTarget(entry);
        if (!target) return;

        target.classList.add("is-search-highlight");
        target.scrollIntoView({
          behavior: reducedMotion.matches ? "auto" : "smooth",
          block: "center"
        });
      }, 60);
    }, 80);
  }

  function updateSearchResults() {
    renderSearchResults(searchInput?.value || "");
  }

  function queueSearchUpdate() {
    window.clearTimeout(searchDebounce);
    searchDebounce = window.setTimeout(updateSearchResults, 120);
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
    const skuIndex = getFamilySkuIndex(family);

    family.columns.forEach((column) => {
      const th = document.createElement("th");
      th.scope = "col";
      th.textContent = column.label;
      headerRow.appendChild(th);
    });

    const tbody = document.createElement("tbody");
    family.variants.forEach((variant) => {
      const row = document.createElement("tr");
      if (skuIndex >= 0 && variant[skuIndex]) {
        row.dataset.searchSku = String(variant[skuIndex]).trim();
      }
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
    article.dataset.searchFamily = family.id;
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

  function createItemProductList(category, item, group) {
    const list = createElement("ul", "tools-family-products");

    item.products.forEach((product) => {
      const row = createElement("li", "tools-family-products__item");
      row.dataset.searchSku = product.sku;
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
      quote.href = contactHref(category, product, group);
      quote.textContent = "Yêu cầu báo giá";
      actions.appendChild(quote);

      row.append(copy, actions);
      list.appendChild(row);
    });

    return list;
  }

  function createToolItemCard(category, item, index, group) {
    const article = createElement("article", `tools-item-card tools-item-card--${item.type}`);
    const contentId = item.type === "family" ? `tools-item-family-${item.id}` : "";
    article.dataset.searchItem = item.id || item.sku || "";
    if (item.type === "family") article.dataset.searchFamily = item.id;
    if (item.sku) article.dataset.searchSku = item.sku;

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
      quote.href = contactHref(category, item, group);
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
      quote.href = contactHref(category, item, group);
      quote.textContent = "Tư vấn lựa chọn";

      actions.append(toggle, quote);
    }

    body.appendChild(actions);
    article.append(media, body);

    if (item.type === "family") {
      const details = createElement("div", "tools-item-card__details");
      details.id = contentId;
      details.hidden = true;
      details.appendChild(createItemProductList(category, item, group));
      article.appendChild(details);
    }

    article.style.setProperty("--item-index", String(index));
    return article;
  }

  function createSpecialtyGroupNav(category, activeGroup) {
    const nav = createElement("div", "tools-specialty-nav");
    nav.setAttribute("role", "tablist");
    nav.setAttribute("aria-label", "Nhóm ứng dụng dụng cụ chuyên dụng ô tô");

    category.groups.forEach((group) => {
      const button = document.createElement("button");
      const isActive = group.id === activeGroup.id;
      button.type = "button";
      button.className = "tools-specialty-nav__button";
      button.dataset.specialtyGroup = group.id;
      button.setAttribute("role", "tab");
      button.setAttribute("aria-selected", String(isActive));
      button.setAttribute("aria-controls", "tools-specialty-group-panel");
      button.textContent = group.name;
      nav.appendChild(button);
    });

    return nav;
  }

  function renderSpecialtyPreview(category) {
    if (!preview) return;

    const activeGroupId = specialtyGroupState.get(category.id) || category.groups[0]?.id;
    const activeGroup =
      category.groups.find((group) => group.id === activeGroupId) || category.groups[0];
    if (!activeGroup) {
      renderFallbackPreview(category);
      return;
    }

    preview.className = "tools-preview tools-preview--specialty";
    preview.dataset.toolsPreviewCategory = category.id;
    preview.setAttribute("aria-labelledby", "tools-preview-title");

    const head = createElement("div", "tools-family-panel__head");
    const title = createElement("h3", null, category.name);
    title.id = "tools-preview-title";
    const description = createElement("p", null, category.description);
    head.append(title, description);

    const nav = createSpecialtyGroupNav(category, activeGroup);

    const panel = createElement("div", "tools-specialty-panel");
    panel.id = "tools-specialty-group-panel";
    panel.setAttribute("role", "tabpanel");

    const groupHeader = createElement("div", "tools-specialty-panel__head");
    const groupMedia = createElement("figure", "tools-specialty-panel__media");
    const image = document.createElement("img");
    image.src = activeGroup.image;
    image.alt = activeGroup.imageAlt;
    image.width = 960;
    image.height = 640;
    image.loading = "lazy";
    groupMedia.appendChild(image);

    const groupCopy = createElement("div", "tools-specialty-panel__copy");
    groupCopy.append(
      createElement("h4", null, activeGroup.name),
      createElement("p", null, activeGroup.description)
    );
    groupHeader.append(groupMedia, groupCopy);

    const itemGrid = createElement("div", "tools-item-grid tools-item-grid--specialty");
    activeGroup.items.forEach((item, index) => {
      itemGrid.appendChild(createToolItemCard(category, item, index, activeGroup));
    });

    panel.append(groupHeader, itemGrid);
    preview.replaceChildren(head, nav, panel);
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

    if (activeCategory.groups?.length) {
      renderSpecialtyPreview(activeCategory);
    } else if (activeCategory.items?.length) {
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
      const groupButton = event.target.closest("[data-specialty-group]");
      if (groupButton) {
        const category = categories.find(
          (item) => item.id === preview.dataset.toolsPreviewCategory
        );
        if (!category) return;

        specialtyGroupState.set(category.id, groupButton.dataset.specialtyGroup);
        renderSpecialtyPreview(category);
        return;
      }

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

  if (searchForm && searchInput && searchResults && searchReset) {
    searchForm.addEventListener("submit", (event) => {
      event.preventDefault();
      if (activeSearchResults[0]?.detailUrl) {
        window.location.href = activeSearchResults[0].detailUrl;
      } else {
        activateSearchResult(activeSearchResults[0]);
      }
    });

    searchInput.addEventListener("input", queueSearchUpdate);

    searchReset.addEventListener("click", () => {
      searchInput.value = "";
      searchInput.focus();
      renderSearchResults("");
    });

    searchResults.addEventListener("click", (event) => {
      const control = event.target.closest("[data-search-index]");
      if (!control) return;

      const entry = activeSearchResults[Number(control.dataset.searchIndex)];
      if (!entry) return;

      if (control.tagName !== "A") {
        event.preventDefault();
        activateSearchResult(entry);
      }
    });
  }

  window.addEventListener("hashchange", () => syncFromHash(true));

  renderPageContent();
  renderCategoryGrid();
  searchIndex = buildSearchIndex();
  renderSearchResults("");
  syncFromHash(false);
})();
