import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../atoms/Button";
import MiniCart from "./MiniCart";
import { useCartStore } from "../../store/cartStore";
import { useProductStore } from "../../store/productStore";
import { useUserStore } from "../../store/userStore";

const Header = () => {
  const [isMiniCartOpen, setIsMiniCartOpen] = useState(false);

  const cartItems = useCartStore((state) => state.cartItems);
  const total = useCartStore((state) => state.total);

  const searchTerm = useProductStore((state) => state.searchTerm);
  const setSearchTerm = useProductStore((state) => state.setSearchTerm);

  const currentUser = useUserStore((state) => state.currentUser);
  const logoutUser = useUserStore((state) => state.logoutUser);

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-4">
        <div className="flex items-center justify-between text-sm text-slate-500">
          <div className="hidden md:block">Compra fácil y rápido</div>

          <div className="flex items-center gap-4">
            {currentUser ? (
              <>
                <span className="font-medium text-slate-700">
                  Hola, {currentUser.firstName}
                </span>
                <button
                  onClick={logoutUser}
                  className="font-medium text-red-500 transition hover:text-red-600"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/registro" className="hover:text-blue-600">
                  Registro
                </Link>
                <Link to="/login" className="hover:text-blue-600">
                  Login
                </Link>
              </>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <Link to="/">
              <h1 className="text-2xl font-bold tracking-tight text-slate-900">
                My Store
              </h1>
            </Link>
            <p className="text-sm text-slate-500">
              Inspired by Metronic Shop UI
            </p>
          </div>

          <div className="flex flex-1 items-center gap-3 md:mx-8">
            <input
              type="text"
              placeholder="Buscar productos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
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