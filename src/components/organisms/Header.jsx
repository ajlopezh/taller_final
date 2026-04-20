import Button from "../atoms/Button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-4">
        <div className="flex items-center justify-between text-sm text-slate-500">
          <div className="hidden md:block">
            Compra fácil y rápido
          </div>

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

          <div className="flex items-center gap-3">
            <Button variant="secondary">Carrito (0)</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;