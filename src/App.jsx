import './App.css'
import { Header } from './components/header/Header'
import { Gallery } from './components/peliculas-mas-vistas/Gallery'
import { Peliculas } from './components/peliculas/Peliculas'
import { Footer } from './components/footer/Footer'
import { Slider } from './components/slider/Slider'

import { useBusqueda } from './context/BusquedaContext'

function App() {

  const {busqueda}= useBusqueda()

  return (
    <>
    
        <section id='header'>
          <Header />
        </section>
        <section>
        {busqueda && <Peliculas />} 
        </section>
        <main>
          <Gallery />
        </main>

        <section>
          <Slider />
        </section>

        <section>
          <Footer />
        </section>
    


    </>
  )
}

export default App
