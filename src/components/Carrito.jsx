function Carrito({ cantidad, onQuitar }) {
  return (
    <section id="carrito" className="border-y border-stone-200 bg-white">
      <article className="mx-auto max-w-6xl px-6 py-16">
        <header>
          <h2 className="text-3xl font-bold text-stone-950">Carrito</h2>
          <p className="mt-3 text-stone-600">
            {cantidad === 0 ? 'Tu carrito está vacío.' : `Tienes ${cantidad} producto(s) en el carrito.`}
          </p>
        </header>
        {cantidad > 0 && (
          <button
            type="button"
            onClick={onQuitar}
            className="mt-6 rounded-full border border-stone-300 px-5 py-3 font-semibold text-stone-800 hover:bg-stone-100"
          >
            Quitar último producto
          </button>
        )}
      </article>
    </section>
  )
}

export default Carrito