import Button from "../atoms/Button";

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="overflow-hidden bg-slate-100">
        <img
          src={product.image}
          alt={product.name}
          className="h-64 w-full object-cover transition duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <span className="text-xs font-semibold uppercase tracking-wide text-blue-600">
          {product.category}
        </span>

        <h3 className="text-lg font-semibold text-slate-800">
          {product.name}
        </h3>

        <p className="line-clamp-2 text-sm text-slate-500">
          {product.description}
        </p>

        <div className="mt-auto flex items-center justify-between pt-2">
          <div className="flex flex-col">
            <span className="text-xl font-bold text-slate-900">
              ${product.price}
            </span>
            <span className="text-xs text-slate-400">
              Stock: {product.stock}
            </span>
          </div>

          <Button
            onClick={() => onAddToCart?.(product)}
            className="px-4 py-2"
          >
            Agregar
          </Button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;