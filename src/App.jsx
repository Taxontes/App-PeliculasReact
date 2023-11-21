import './App.css'
import { Header } from './components/header/Header'
import { Gallery } from './components/peliculas-mas-vistas/Gallery'
import { Peliculas } from './components/peliculas/Peliculas'
import { PeliculasEstreno } from './components/peliculas-estreno/PeliculasEstreno'
import { Footer } from './components/footer/Footer'
function App() {
 
  return (
    <>
      <Header />
      <Gallery />
      <Peliculas />
      <PeliculasEstreno />
      <Footer />
      
    </>
  )
}

export default App
