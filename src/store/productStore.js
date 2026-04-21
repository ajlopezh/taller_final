import { create } from "zustand";
import { mockProducts } from "../mockdata/products";

const PRODUCTS_API_URL =
  "https://fake-store-api-2no73ornoa-uc.a.run.app/api/products/all?page=0&size=100&sortBy=id&sortDir=asc";

function normalizeText(text = "") {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

function mapCategoryNameToSlug(categoryName = "") {
  const normalized = normalizeText(categoryName);

  const categoryMap = {
    electronica: "electronics",
    moda: "ropa",
    alimentacion: "hogar",
    "hogar y jardin": "hogar",
    "salud y belleza": "accesorios",
  };

  return categoryMap[normalized] || normalized || "sin-categoria";
}

function adaptApiProduct(apiProduct) {
  return {
    id: apiProduct.id,
    name: apiProduct.name || "",
    price: Number(apiProduct.price) || 0,
    description: apiProduct.description || "",
    category: mapCategoryNameToSlug(apiProduct.categoryName),
    image: apiProduct.imageUrl || "https://picsum.photos/300",
    stock: Number(apiProduct.stockQuantity) || 0,
    rating: 4.5,
    isFeatured: apiProduct.id <= 8,
  };
}

export const useProductStore = create((set, get) => ({
  products: [],
  filteredProducts: [],
  searchTerm: "",
  activeCategory: "all",
  isLoading: false,
  error: null,
  dataSource: "mock",

  setProducts: (products) => {
    set({
      products,
      filteredProducts: products,
      error: null,
    });
  },

  loadMockProducts: () => {
    set({
      products: mockProducts,
      filteredProducts: mockProducts,
      isLoading: false,
      error: null,
      dataSource: "mock",
    });

    get().applyFilters();
  },

  fetchProductsFromApi: async () => {
    set({
      isLoading: true,
      error: null,
    });

    try {
      const response = await fetch(PRODUCTS_API_URL);

      if (!response.ok) {
        throw new Error(`Error HTTP ${response.status} - ${response.statusText}`);
      }

      const data = await response.json();
      const apiProducts = Array.isArray(data?.content) ? data.content : [];

      if (!Array.isArray(apiProducts) || apiProducts.length === 0) {
        throw new Error("La API no devolvió productos válidos.");
      }

      const adaptedProducts = apiProducts.map(adaptApiProduct);

      set({
        products: adaptedProducts,
        filteredProducts: adaptedProducts,
        isLoading: false,
        error: null,
        dataSource: "api",
      });

      get().applyFilters();
    } catch (error) {
      console.error("Error cargando productos desde la API:", error);

      set({
        error:
          "La API externa no estuvo disponible. Se cargaron productos mock como respaldo.",
        isLoading: false,
      });

      get().loadMockProducts();
    }
  },

  setSearchTerm: (searchTerm) => {
    set({ searchTerm });
    get().applyFilters();
  },

  setActiveCategory: (category) => {
    set({ activeCategory: category });
    get().applyFilters();
  },

  applyFilters: () => {
    const { products, searchTerm, activeCategory } = get();

    let filtered = [...products];

    if (activeCategory !== "all") {
      filtered = filtered.filter(
        (product) => product.category === activeCategory
      );
    }

    if (searchTerm.trim() !== "") {
      const normalizedSearch = searchTerm.toLowerCase().trim();

      filtered = filtered.filter((product) => {
        const matchesName = product.name
          .toLowerCase()
          .includes(normalizedSearch);

        const matchesCategory = product.category
          .toLowerCase()
          .includes(normalizedSearch);

        return matchesName || matchesCategory;
      });
    }

    set({ filteredProducts: filtered });
  },

  resetFilters: () => {
    const { products } = get();

    set({
      searchTerm: "",
      activeCategory: "all",
      filteredProducts: products,
    });
  },
}));