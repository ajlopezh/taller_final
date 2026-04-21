// src/adapters/categoryAdapter.js

function normalizeText(text = "") {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

function getCategoryIcon(name = "") {
  const normalized = normalizeText(name);

  const iconMap = {
    electronica: "💻",
    moda: "👕",
    alimentacion: "🛒",
    "hogar y jardin": "🏠",
    "salud y belleza": "✨",
  };

  return iconMap[normalized] || "🛍️";
}

function getCategorySlug(name = "") {
  const normalized = normalizeText(name);

  const slugMap = {
    electronica: "electronics",
    moda: "ropa",
    alimentacion: "hogar",
    "hogar y jardin": "hogar",
    "salud y belleza": "accesorios",
  };

  return slugMap[normalized] || "accesorios";
}

export function adaptCategory(apiCategory) {
  return {
    id: apiCategory.id,
    name: apiCategory.name,
    slug: getCategorySlug(apiCategory.name),
    icon: getCategoryIcon(apiCategory.name),
  };
}

export function adaptCategories(apiCategories = []) {
  return apiCategories.map(adaptCategory);
}