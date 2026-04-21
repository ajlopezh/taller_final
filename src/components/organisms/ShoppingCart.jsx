import { useCartStore } from "../../store/cartStore";
import Button from "../atoms/Button";
import Title from "../atoms/Title";

const ShoppingCart = () => {
  const cartItems = useCartStore((state) => state.cartItems);
  const total = useCartStore((state) => state.total);
  const addToCart = useCartStore((state) => state.addToCart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const deleteFromCart = useCartStore((state) => state.deleteFromCart);
  const clearCart = useCartStore((state) => state.clearCart);

  if (cartItems.length === 0) {
    return (
      <section className="mx-auto w-full max-w-5xl px-4 py-10">
        <Title>Carrito de compras</Title>

        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-slate-500">Tu carrito está vacío.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto w-full max-w-5xl px-4 py-10">
      <div className="mb-6 flex items-center justify-between">
        <Title>Carrito de compras</Title>

        <Button variant="secondary" onClick={clearCart}>
          Vaciar carrito
        </Button>
      </div>

      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 px-6 py-4">
            <h2 className="text-lg font-semibold text-slate-900">
              Productos agregados
            </h2>
          </div>

          <div className="divide-y divide-slate-200">
            {cartItems.map((item) => (
              <article
                key={item.id}
                className="flex flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-24 w-24 rounded-xl object-cover"
                />

                <div className="flex-1">
                  <h3 className="text-base font-semibold text-slate-900">
                    {item.name}
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    Precio unitario: ${item.price}
                  </p>
                  <p className="mt-1 text-sm font-medium text-slate-700">
                    Subtotal: ${item.price * item.quantity}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-300 text-lg font-semibold text-slate-700 transition hover:bg-slate-100"
                  >
                    -
                  </button>

                  <span className="min-w-[32px] text-center text-sm font-semibold text-slate-900">
                    {item.quantity}
                  </span>

                  <button
                    onClick={() => addToCart(item)}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-300 text-lg font-semibold text-slate-700 transition hover:bg-slate-100"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => deleteFromCart(item.id)}
                  className="rounded-xl bg-red-50 px-4 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-100"
                >
                  Eliminar
                </button>
              </article>
            ))}
          </div>
        </div>

        <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">
            Resumen de compra
          </h2>

          <div className="mt-4 space-y-3">
            <div className="flex items-center justify-between text-sm text-slate-600">
              <span>Productos</span>
              <span>{cartItems.length}</span>
            </div>

            <div className="flex items-center justify-between border-t border-slate-200 pt-3">
              <span className="text-base font-medium text-slate-700">Total</span>
              <span className="text-2xl font-bold text-slate-900">${total}</span>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3">
            <Button>Ir a checkout</Button>
            <Button variant="secondary">Seguir comprando</Button>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default ShoppingCart;