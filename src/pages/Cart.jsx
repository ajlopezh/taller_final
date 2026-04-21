import Header from "../components/organisms/Header";
import Footer from "../components/organisms/Footer";
import ShoppingCart from "../components/organisms/ShoppingCart";

const Cart = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      <main className="w-full">
        <ShoppingCart />
      </main>

      <Footer />
    </div>
  );
};

export default Cart;