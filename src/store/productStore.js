import { create } from "zustand";

export const useProductStore = create((set, get) => ({
  products: [],
  filteredProducts: [],
  searchTerm: "",
  activeCategory: "all",

  setProducts: (products) => {
    set({
      products,
      filteredProducts: products,
    });
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