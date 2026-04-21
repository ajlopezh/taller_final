import { Link } from "react-router-dom";
import { useCartStore } from "../../store/cartStore";
import Button from "../atoms/Button";

const ShoppingCart = () => {
  const cartItems = useCartStore((state) => state.cartItems);
  const total = useCartStore((state) => state.total);
  const addToCart = useCartStore((state) => state.addToCart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const deleteFromCart = useCartStore((state) => state.deleteFromCart);
  const clearCart = useCartStore((state) => state.clearCart);

  if (cartItems.length === 0) {
    return (
      <section className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Shopping Cart
          </h1>

          <Button variant="secondary" onClick={clearCart} className="w-full sm:w-auto">
            Vaciar carrito
          </Button>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <p className="text-slate-500">Tu carrito está vacío.</p>

          <div className="mt-6">
            <Link to="/" className="inline-block w-full sm:w-auto">
              <Button variant="secondary" className="w-full sm:w-auto">
                Seguir comprando
              </Button>
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Shopping Cart
        </h1>

        <Button variant="secondary" onClick={clearCart} className="w-full md:w-auto">
          Vaciar carrito
        </Button>
      </div>

      <div className="grid gap-6 xl:grid-cols-[2fr_1fr]">
        <div className="space-y-4 xl:hidden">
          {cartItems.map((item) => (
            <article
              key={item.id}
              className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5"
            >
              <div className="flex items-start gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-20 w-20 rounded-xl object-cover sm:h-24 sm:w-24"
                />

                <div className="min-w-0 flex-1">
                  <h3 className="truncate text-lg font-semibold text-slate-900">
                    {item.name}
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">Ref: {item.id}</p>
                  <p className="mt-2 text-sm text-slate-500">
                    Precio unitario: ${item.price}
                  </p>
                  <p className="mt-1 text-lg font-bold text-slate-900">
                    ${item.price * item.quantity}
                  </p>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-300 text-lg font-bold text-slate-800 transition hover:bg-slate-100"
                >
                  -
                </button>

                <span className="min-w-[20px] text-center text-xl font-bold text-slate-900">
                  {item.quantity}
                </span>

                <button
                  onClick={() => addToCart(item)}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-300 text-lg font-bold text-slate-800 transition hover:bg-slate-100"
                >
                  +
                </button>

                <button
                  onClick={() => deleteFromCart(item.id)}
                  className="ml-auto rounded-xl border border-red-200 px-4 py-2 text-sm font-semibold text-red-500 transition hover:bg-red-50"
                >
                  Eliminar
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="hidden overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm xl:block">
          <div className="grid grid-cols-6 border-b border-slate-200 bg-slate-50 px-6 py-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
            <span>Image</span>
            <span className="col-span-2">Description</span>
            <span className="text-center">Qty</span>
            <span className="text-center">Unit Price</span>
            <span className="text-center">Total</span>
          </div>

          <div className="divide-y divide-slate-200">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-6 items-center gap-4 px-6 py-5"
              >
                <div className="flex items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-20 w-20 rounded-xl object-cover"
                  />
                </div>

                <div className="col-span-2 min-w-0">
                  <h3 className="truncate text-xl font-semibold text-slate-900">
                    {item.name}
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">Ref: {item.id}</p>
                </div>

                <div className="flex items-center justify-center gap-3">
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-300 text-lg font-bold text-slate-800 transition hover:bg-slate-100"
                  >
                    -
                  </button>

                  <span className="min-w-[20px] text-center text-2xl font-bold text-slate-900">
                    {item.quantity}
                  </span>

                  <button
                    onClick={() => addToCart(item)}
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-300 text-lg font-bold text-slate-800 transition hover:bg-slate-100"
                  >
                    +
                  </button>
                </div>

                <div className="text-center text-2xl font-medium text-slate-700">
                  ${item.price}
                </div>

                <div className="flex items-center justify-center gap-3">
                  <span className="text-2xl font-bold text-slate-900">
                    ${item.price * item.quantity}
                  </span>

                  <button
                    onClick={() => deleteFromCart(item.id)}
                    className="text-2xl leading-none text-slate-400 transition hover:text-red-500"
                    aria-label={`Eliminar ${item.name}`}
                  >
                    ×
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Resumen de compra
          </h2>

          <div className="mt-6 space-y-5 sm:mt-8 sm:space-y-6">
            <div className="flex items-center justify-between text-base text-slate-600 sm:text-xl">
              <span>Productos</span>
              <span>{cartItems.length}</span>
            </div>

            <div className="flex items-center justify-between border-t border-slate-200 pt-5 sm:pt-6">
              <span className="text-lg font-semibold text-slate-700 sm:text-2xl">
                Total
              </span>
              <span className="text-3xl font-extrabold text-slate-900 sm:text-5xl">
                ${total}
              </span>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-4 sm:mt-8">
            <Link to="/checkout">
              <Button className="w-full">Ir a checkout</Button>
            </Link>

            <Link to="/">
              <Button variant="secondary" className="w-full">
                Seguir comprando
              </Button>
            </Link>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default ShoppingCart;