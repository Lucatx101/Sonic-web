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
  const previewImage = document.getElementById("tools-preview-image");
  const previewTitle = document.getElementById("tools-preview-title");
  const previewDescription = document.getElementById("tools-preview-description");
  const previewAction = document.getElementById("tools-preview-action");

  function setText(element, value) {
    if (element) element.textContent = value;
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

    if (previewImage) {
      previewImage.src = activeCategory.image;
      previewImage.alt = activeCategory.imageAlt;
    }
    setText(previewTitle, activeCategory.name);
    setText(previewDescription, activeCategory.description);
    if (previewAction) {
      previewAction.href = `contact.html?cfg=${encodeURIComponent(activeCategory.name)}`;
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

  window.addEventListener("hashchange", () => syncFromHash(true));

  renderPageContent();
  renderCategoryGrid();
  syncFromHash(false);
})();
