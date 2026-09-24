function Productos({ producto, onAgregar }) {
  return (
    <section id="productos" className="mx-auto max-w-6xl px-6 py-20">
      <header className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">Catálogo</p>
        <h2 className="mt-2 text-3xl font-bold text-stone-950">Productos</h2>
      </header>

      <ul className="grid list-none gap-8 p-0 md:grid-cols-2">
        <li>
          <article className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-stone-200">
            <img
              src={producto.imagen}
              alt="Empanada de carne del proyecto Empanaditas"
              className="h-64 w-full object-cover"
            />
            <section className="p-6">
              <h3 className="text-2xl font-bold text-stone-900">{producto.nombre}</h3>
              <p className="mt-3 leading-7 text-stone-600">{producto.descripcion}</p>
              <p className="mt-4 text-sm font-medium text-stone-500">Precio: por confirmar</p>
              <button
                type="button"
                onClick={onAgregar}
                className="mt-6 rounded-full bg-stone-900 px-5 py-3 font-semibold text-white hover:bg-stone-700"
              >
                Agregar al carrito
              </button>
            </section>
          </article>
        </li>
      </ul>
    </section>
  )
}

export default Productos