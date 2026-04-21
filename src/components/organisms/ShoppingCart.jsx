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
      <section className="mx-auto w-full max-w-6xl px-4 py-10">
        <Title>Carrito de compras</Title>

        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-slate-500">Tu carrito está vacío.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-10">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <Title>Shopping Cart</Title>

        <Button variant="secondary" onClick={clearCart}>
          Vaciar carrito
        </Button>
      </div>

      <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
        {/* TABLA DE PRODUCTOS */}
        <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
          {/* Encabezados */}
          <div className="grid grid-cols-6 border-b border-slate-200 px-6 py-4 text-xs font-semibold uppercase text-slate-500">
            <span>Image</span>
            <span className="col-span-2">Description</span>
            <span className="text-center">Qty</span>
            <span className="text-center">Unit Price</span>
            <span className="text-center">Total</span>
          </div>

          {/* Filas */}
          <div className="divide-y divide-slate-200">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-6 items-center gap-4 px-6 py-5"
              >
                {/* Imagen */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-16 w-16 rounded-lg object-cover"
                />

                {/* Descripción */}
                <div className="col-span-2">
                  <h3 className="text-sm font-semibold text-slate-900">
                    {item.name}
                  </h3>
                  <p className="text-xs text-slate-500">
                    Ref: {item.id}
                  </p>
                </div>

                {/* Cantidad */}
                <div className="flex items-center justify-center gap-2">
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="h-8 w-8 rounded border border-slate-300 text-sm font-bold"
                  >
                    -
                  </button>

                  <span className="min-w-[24px] text-center text-sm font-semibold">
                    {item.quantity}
                  </span>

                  <button
                    onClick={() => addToCart(item)}
                    className="h-8 w-8 rounded border border-slate-300 text-sm font-bold"
                  >
                    +
                  </button>
                </div>

                {/* Precio unitario */}
                <p className="text-center text-sm text-slate-700">
                  ${item.price}
                </p>

                {/* Total + eliminar */}
                <div className="flex items-center justify-center gap-2">
                  <span className="text-sm font-semibold text-slate-900">
                    ${item.price * item.quantity}
                  </span>

                  <button
                    onClick={() => deleteFromCart(item.id)}
                    className="text-xs text-slate-400 hover:text-red-500"
                  >
                    ✕
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RESUMEN */}
        <aside className="h-fit rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">
            Resumen de compra
          </h2>

          <div className="mt-6 space-y-4">
            <div className="flex justify-between text-sm text-slate-600">
              <span>Productos</span>
              <span>{cartItems.length}</span>
            </div>

            <div className="flex justify-between border-t border-slate-200 pt-4">
              <span className="text-base font-medium text-slate-700">
                Total
              </span>
              <span className="text-2xl font-bold text-slate-900">
                ${total}
              </span>
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