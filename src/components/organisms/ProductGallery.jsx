
import { useEffect } from "react";
import ProductCard from "../molecules/ProductCard";
import { mockProducts } from "../../mockdata/products";
import { useProductStore } from "../../store/productStore";
import { useCartStore } from "../../store/cartStore";

const ProductGallery = () => {
  const setProducts = useProductStore((state) => state.setProducts);
  const filteredProducts = useProductStore((state) => state.filteredProducts);

  const addToCart = useCartStore((state) => state.addToCart);

  useEffect(() => {
    setProducts(mockProducts);
  }, [setProducts]);

  return (
    <section>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-slate-900">
            Productos destacados
          </h2>
          <p className="text-sm text-slate-500">
            Mostrando {filteredProducts.length} productos
          </p>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={addToCart}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductGallery;