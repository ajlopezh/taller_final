// src/services/api/fakeStoreApi.js

const BASE_URL = "https://fake-store-api-2no73ornoa-uc.a.run.app/api";

async function request(endpoint, options = {}) {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error(`HTTP ${response.status} - ${response.statusText}`);
  }

  return response.json();
}

export async function getAllProducts({
  page = 0,
  size = 20,
  sortBy = "id",
  sortDir = "asc",
} = {}) {
  const params = new URLSearchParams({
    page: String(page),
    size: String(size),
    sortBy,
    sortDir,
  });

  return request(`/products/all?${params.toString()}`);
}

export async function getProductById(id) {
  return request(`/products/${id}`);
}

export async function getAllCategories() {
  return request(`/categories/all`);
}