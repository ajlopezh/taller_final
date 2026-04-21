import { Link, useNavigate } from "react-router-dom";
import Header from "../components/organisms/Header";
import Footer from "../components/organisms/Footer";
import Button from "../components/atoms/Button";
import { useCartStore } from "../store/cartStore";
import { useUserStore } from "../store/userStore";

const Checkout = () => {
  const navigate = useNavigate();

  const cartItems = useCartStore((state) => state.cartItems);
  const total = useCartStore((state) => state.total);
  const clearCart = useCartStore((state) => state.clearCart);

  const currentUser = useUserStore((state) => state.currentUser);

  const handleConfirmPurchase = () => {
    clearCart();
    alert("Compra confirmada con éxito.");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      <main className="mx-auto w-full max-w-7xl px-4 py-8 md:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Checkout Review
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Revisa tu pedido antes de confirmar la compra.
          </p>
        </div>

        {cartItems.length === 0 ? (
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900">
              Tu carrito está vacío
            </h2>
            <p className="mt-2 text-slate-500">
              Agrega productos al carrito antes de continuar con el checkout.
            </p>

            <div className="mt-6">
              <Link to="/">
                <Button variant="secondary">Volver a la tienda</Button>
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid gap-6 xl:grid-cols-[2fr_1fr]">
            <section className="space-y-6">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-2xl font-semibold text-slate-900">
                  Productos del pedido
                </h2>

                <div className="mt-6 space-y-4">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex flex-col gap-4 rounded-xl border border-slate-200 p-4 md:flex-row md:items-center md:justify-between"
                    >
                      <div className="flex items-center gap-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-20 w-20 rounded-xl object-cover"
                        />

                        <div>
                          <h3 className="text-lg font-semibold text-slate-900">
                            {item.name}
                          </h3>
                          <p className="text-sm text-slate-500">
                            Cantidad: {item.quantity}
                          </p>
                          <p className="text-sm text-slate-500">
                            Precio unitario: ${item.price}
                          </p>
                        </div>
                      </div>

                      <div className="text-right">
                        <p className="text-sm text-slate-500">Subtotal</p>
                        <p className="text-2xl font-bold text-slate-900">
                          ${item.price * item.quantity}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-2xl font-semibold text-slate-900">
                  Datos del usuario
                </h2>

                {!currentUser ? (
                  <div className="mt-4 rounded-xl bg-amber-50 p-4 text-amber-700">
                    No has iniciado sesión. Para una experiencia más completa,
                    inicia sesión o regístrate antes de confirmar la compra.
                    <div className="mt-4 flex flex-wrap gap-3">
                      <Link to="/login">
                        <Button variant="secondary">Ir a login</Button>
                      </Link>
                      <Link to="/registro">
                        <Button variant="secondary">Ir a registro</Button>
                      </Link>
                    </div>
                  </div>
                ) : (
                  <div className="mt-6 grid gap-4 md:grid-cols-2">
                    <div className="rounded-xl border border-slate-200 p-4">
                      <p className="text-sm text-slate-500">Nombre</p>
                      <p className="text-lg font-semibold text-slate-900">
                        {currentUser.firstName} {currentUser.lastName}
                      </p>
                    </div>

                    <div className="rounded-xl border border-slate-200 p-4">
                      <p className="text-sm text-slate-500">Correo</p>
                      <p className="text-lg font-semibold text-slate-900">
                        {currentUser.email}
                      </p>
                    </div>

                    <div className="rounded-xl border border-slate-200 p-4">
                      <p className="text-sm text-slate-500">Teléfono</p>
                      <p className="text-lg font-semibold text-slate-900">
                        {currentUser.phone}
                      </p>
                    </div>

                    <div className="rounded-xl border border-slate-200 p-4">
                      <p className="text-sm text-slate-500">Ciudad</p>
                      <p className="text-lg font-semibold text-slate-900">
                        {currentUser.city}
                      </p>
                    </div>

                    <div className="rounded-xl border border-slate-200 p-4 md:col-span-2">
                      <p className="text-sm text-slate-500">Dirección</p>
                      <p className="text-lg font-semibold text-slate-900">
                        {currentUser.address}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </section>

            <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-900">
                Resumen final
              </h2>

              <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between text-slate-600">
                  <span>Productos</span>
                  <span>{cartItems.length}</span>
                </div>

                <div className="flex items-center justify-between text-slate-600">
                  <span>Total de ítems</span>
                  <span>
                    {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
                  </span>
                </div>

                <div className="flex items-center justify-between border-t border-slate-200 pt-4">
                  <span className="text-xl font-semibold text-slate-700">
                    Total a pagar
                  </span>
                  <span className="text-4xl font-extrabold text-slate-900">
                    ${total}
                  </span>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-4">
                <Button onClick={handleConfirmPurchase}>
                  Confirmar compra
                </Button>

                <Link to="/cart">
                  <Button variant="secondary" className="w-full">
                    Volver al carrito
                  </Button>
                </Link>
              </div>
            </aside>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Checkout;