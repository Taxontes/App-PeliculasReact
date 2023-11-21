import './App.css'
import { Header } from './components/header/Header'
import { Gallery } from './components/peliculas-mas-vistas/Gallery'
import { Peliculas } from './components/peliculas/Peliculas'
import { PeliculasEstreno } from './components/peliculas-estreno/PeliculasEstreno'
function App() {
 
  return (
    <>
      <Header />
      <Gallery />
      <Peliculas />
      <PeliculasEstreno />
    
      
    </>
  )
}

export default App
