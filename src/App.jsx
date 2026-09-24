import { useState } from 'react'
import Header from './components/Header'
import Inicio from './components/Inicio'
import Productos from './components/Productos'
import Carrito from './components/Carrito'
import Contacto from './components/Contacto'
import Footer from './components/Footer'

const producto = {
  id: 1,
  nombre: 'Empanadas Pepita',
  descripcion: 'Producto registrado en el proyecto original de Empanaditas.',
  imagen: 'https://raw.githubusercontent.com/MariaIsabelconcha04/Empanaditas/main/img/Empanada-de-carne.jpg',
}

function App() {
  const [carrito, setCarrito] = useState([])

  const agregarAlCarrito = () => {
    setCarrito((actual) => [...actual, producto])
  }

  const quitarDelCarrito = () => {
    setCarrito((actual) => actual.slice(0, -1))
  }

  return (
    <>
      <Header cantidad={carrito.length} />
      <Inicio />
      <main>
        <Productos producto={producto} onAgregar={agregarAlCarrito} />
        <Carrito cantidad={carrito.length} onQuitar={quitarDelCarrito} />
        <Contacto />
      </main>
      <Footer />
    </>
  )
}

export default App