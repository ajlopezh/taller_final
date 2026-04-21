import Header from "../components/organisms/Header";
import Footer from "../components/organisms/Footer";
import ProductGallery from "../components/organisms/ProductGallery";

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
        <section className="mb-8 rounded-3xl border border-slate-200 bg-white px-5 py-8 shadow-sm sm:mb-10 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-blue-600 sm:text-sm">
            New Collection
          </p>

          <h1 className="mb-4 text-2xl font-bold text-slate-900 sm:text-3xl lg:text-4xl">
            Descubre productos para tu estilo de vida
          </h1>

          <p className="max-w-2xl text-sm text-slate-500 sm:text-base">
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