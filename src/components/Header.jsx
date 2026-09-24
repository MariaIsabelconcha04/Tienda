function Header({ cantidad }) {
  return (
    <header className="sticky top-0 z-10 border-b border-stone-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4" aria-label="Navegación principal">
        <a href="#inicio" className="text-xl font-bold tracking-tight text-stone-900">
          Tienda
        </a>
        <ul className="flex flex-wrap items-center justify-end gap-4 text-sm font-medium text-stone-600">
          <li><a className="hover:text-stone-950" href="#inicio">Inicio</a></li>
          <li><a className="hover:text-stone-950" href="#productos">Productos</a></li>
          <li><a className="hover:text-stone-950" href="#carrito">Carrito ({cantidad})</a></li>
          <li><a className="hover:text-stone-950" href="#contacto">Contacto</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header