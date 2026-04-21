// src/adapters/productAdapter.js

function normalizeText(text = "") {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

export function mapCategoryNameToSlug(categoryName = "") {
  const normalized = normalizeText(categoryName);

  const categoryMap = {
    electronica: "electronics",
    moda: "ropa",
    "hogar y jardin": "hogar",
    alimentacion: "hogar",
    "salud y belleza": "accesorios",
  };

  return categoryMap[normalized] || "accesorios";
}

export function adaptProduct(apiProduct) {
  return {
    id: apiProduct.id,
    name: apiProduct.name,
    price: Number(apiProduct.price) || 0,
    description: apiProduct.description || "",
    category: mapCategoryNameToSlug(apiProduct.categoryName),
    image: apiProduct.imageUrl || "https://picsum.photos/300",
    stock: Number(apiProduct.stockQuantity) || 0,

    // Estos campos no vienen en la API real.
    // Se generan para no romper la UI actual.
    rating: 4.5,
    isFeatured: apiProduct.id <= 8,
  };
}

export function adaptProducts(apiProducts = []) {
  return apiProducts.map(adaptProduct);
}