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
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <div className="hidden md:block">Compra fácil y rápido</div>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            {currentUser ? (
              <>
                <span className="text-sm font-medium text-slate-700 sm:text-base">
                  Hola, {currentUser.firstName}
                </span>
                <button
                  onClick={logoutUser}
                  className="text-sm font-medium text-red-500 transition hover:text-red-600 sm:text-base"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/registro" className="text-sm hover:text-blue-600 sm:text-base">
                  Registro
                </Link>
                <Link to="/login" className="text-sm hover:text-blue-600 sm:text-base">
                  Login
                </Link>
              </>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="min-w-0">
            <Link to="/" className="inline-block">
              <h1 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                My Store
              </h1>
            </Link>
            <p className="text-xs text-slate-500 sm:text-sm">
              Inspired by Metronic Shop UI
            </p>
          </div>

          <div className="order-3 w-full lg:order-2 lg:mx-8 lg:flex-1">
            <input
              type="text"
              placeholder="Buscar productos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div
            className="relative order-2 w-full lg:order-3 lg:w-auto"
            onMouseEnter={() => setIsMiniCartOpen(true)}
            onMouseLeave={() => setIsMiniCartOpen(false)}
          >
            <Button
              variant="secondary"
              className="w-full justify-center text-sm sm:text-base lg:min-w-[220px]"
            >
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