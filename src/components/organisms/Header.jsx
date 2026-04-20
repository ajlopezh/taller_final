
import { useState } from "react";
import Button from "../atoms/Button";
import MiniCart from "./MiniCart";
import { useCartStore } from "../../store/cartStore";

const Header = () => {
  const [isMiniCartOpen, setIsMiniCartOpen] = useState(false);

  const cartItems = useCartStore((state) => state.cartItems);
  const total = useCartStore((state) => state.total);

  const cartCount = cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-4">
        <div className="flex items-center justify-between text-sm text-slate-500">
          <div className="hidden md:block">Compra fácil y rápido</div>

          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-blue-600">Mi cuenta</a>
            <a href="#" className="hover:text-blue-600">Wishlist</a>
            <a href="#" className="hover:text-blue-600">Checkout</a>
            <a href="#" className="hover:text-blue-600">Login</a>
          </div>
        </div>

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">
              My Store
            </h1>
            <p className="text-sm text-slate-500">
              Inspired by Metronic Shop UI
            </p>
          </div>

          <div className="flex flex-1 items-center gap-3 md:mx-8">
            <input
              type="text"
              placeholder="Buscar productos..."
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div
            className="relative pb-3"
            onMouseEnter={() => setIsMiniCartOpen(true)}
            onMouseLeave={() => setIsMiniCartOpen(false)}
          >
            <Button variant="secondary" className="min-w-[200px] justify-center">
              {cartCount} items | ${total}
            </Button>

            {isMiniCartOpen && <MiniCart />}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;