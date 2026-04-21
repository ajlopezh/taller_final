import { useCartStore } from "../../store/cartStore";
import { Link } from "react-router-dom";
import Button from "../atoms/Button";

const MiniCart = () => {
  const cartItems = useCartStore((state) => state.cartItems);
  const total = useCartStore((state) => state.total);
  const deleteFromCart = useCartStore((state) => state.deleteFromCart);

  if (cartItems.length === 0) {
    return (
      <div className="absolute right-0 top-full z-50 mt-2 w-[92vw] max-w-[360px] rounded-2xl border border-slate-200 bg-white p-4 shadow-xl sm:w-[360px] sm:p-5">
        <h3 className="mb-3 text-base font-semibold text-slate-900 sm:text-lg">
          Carrito
        </h3>
        <p className="text-sm text-slate-500">Tu carrito está vacío.</p>
      </div>
    );
  }

  return (
    <div className="absolute right-0 top-full z-50 mt-2 w-[92vw] max-w-[380px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl sm:w-[380px]">
      <div className="border-b border-slate-200 px-4 py-4 sm:px-5">
        <h3 className="text-base font-semibold text-slate-900 sm:text-lg">
          Carrito
        </h3>
        <p className="text-sm text-slate-500">Revisa tus productos agregados</p>
      </div>

      <div className="max-h-[320px] overflow-y-auto px-3 py-3 sm:px-4">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-3 border-b border-slate-100 py-3 last:border-b-0"
          >
            <img
              src={item.image}
              alt={item.name}
              className="h-14 w-14 rounded-xl object-cover sm:h-16 sm:w-16"
            />

            <div className="min-w-0 flex-1">
              <h4 className="truncate text-sm font-semibold text-slate-800">
                {item.name}
              </h4>
              <p className="text-xs text-slate-500">x {item.quantity}</p>
              <p className="text-sm font-medium text-slate-700">
                ${item.price * item.quantity}
              </p>
            </div>

            <button
              onClick={() => deleteFromCart(item.id)}
              className="rounded-full bg-slate-100 px-3 py-2 text-xs font-semibold text-slate-500 transition hover:bg-red-100 hover:text-red-600"
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      <div className="border-t border-slate-200 px-4 py-4 sm:px-5">
        <div className="mb-4 flex items-center justify-between">
          <span className="text-sm text-slate-500">Total</span>
          <span className="text-base font-bold text-slate-900 sm:text-lg">
            ${total}
          </span>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Link to="/cart" className="w-full sm:flex-1">
            <Button variant="secondary" className="w-full">
              Ver carrito
            </Button>
          </Link>

          <Link to="/checkout" className="w-full sm:flex-1">
            <Button className="w-full">Checkout</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MiniCart;