function Inicio() {
  return (
    <section id="inicio" className="border-b border-stone-200 bg-stone-100">
      <article className="mx-auto grid max-w-6xl gap-8 px-6 py-20 md:grid-cols-2 md:items-center">
        <header>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">Tienda</p>
          <h1 className="text-4xl font-black tracking-tight text-stone-950 md:text-6xl">
            Compra de forma sencilla
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-stone-600">
            Una tienda web construida con React, Vite y Tailwind CSS, con una estructura clara y fácil de modificar.
          </p>
          <a href="#productos" className="mt-8 inline-block rounded-full bg-stone-900 px-6 py-3 font-semibold text-white hover:bg-stone-700">
            Ver producto
          </a>
        </header>
        <aside className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-stone-200">
          <h2 className="text-2xl font-bold text-stone-900">Sobre esta tienda</h2>
          <p className="mt-3 leading-7 text-stone-600">
            El contenido comercial se mantiene limitado a la información disponible, sin inventar precios, promociones o datos de contacto.
          </p>
        </aside>
      </article>
    </section>
  )
}

export default Inicio