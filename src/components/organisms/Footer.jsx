const Footer = () => {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-slate-50">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="mb-4 text-lg font-semibold text-slate-900">
            Sobre nosotros
          </h3>
          <p className="text-sm leading-6 text-slate-500">
            Tienda demo construida con React, Tailwind y arquitectura por componentes.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold text-slate-900">
            Información
          </h3>
          <ul className="space-y-2 text-sm text-slate-500">
            <li>Envíos</li>
            <li>Devoluciones</li>
            <li>Atención al cliente</li>
            <li>Contacto</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold text-slate-900">
            Contacto
          </h3>
          <ul className="space-y-2 text-sm text-slate-500">
            <li>Medellín, Colombia</li>
            <li>+57 300 000 0000</li>
            <li>info@mystore.com</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold text-slate-900">
            Newsletter
          </h3>
          <div className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Tu correo"
              className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
            <button className="rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">
              Suscribirme
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200 px-6 py-4 text-center text-sm text-slate-500">
        © 2026 My Store. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;