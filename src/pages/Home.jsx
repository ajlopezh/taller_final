
import Header from "../components/organisms/Header";
import Footer from "../components/organisms/Footer";
import ProductGallery from "../components/organisms/ProductGallery";

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      <main className="mx-auto max-w-7xl px-6 py-10">
        <section className="mb-10 rounded-3xl border border-slate-200 bg-white px-8 py-12 shadow-sm">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-600">
            New Collection
          </p>
          <h1 className="mb-4 text-4xl font-bold text-slate-900">
            Descubre productos para tu estilo de vida
          </h1>
          <p className="max-w-2xl text-slate-500">
            Una galería inicial construida con mockdata, componentes reutilizables
            y una estética inspirada en Metronic Shop UI.
          </p>
        </section>

        <ProductGallery />
      </main>

      <Footer />
    </div>
  );
};

export default Home;