import React from 'react'
import './header.css'
import { useBusqueda } from '../../context/BusquedaContext.jsx'

export const Header = () => {

    const { busqueda, setBusqueda } = useBusqueda()


    const handleSearch = (event) => { 
        const newSearch= event.target.value
        setBusqueda(newSearch)
     
    }
    
    const handleSubmit = (event) => {
        event.preventDefault()
        setBusqueda(busqueda)
      
    }
  
    return (
        <>
            <header className='header'>
                <div className="menu container">
                    <a href="#" className='logo'>Nefli</a>
                    <input type="checkbox" id='menu' />
                    <label htmlFor="menu">
                        <img className='menu-icon' src="/menu.png" alt="menu" />
                    </label>

                    <nav className='navbar'>
                        <ul>
                            <li><a href="#">Inicio</a></li>
                            <li><a href="#">Películas</a></li>
                            <li><a href="#">Series</a></li>
                            <li><a href="#">Géneros</a></li>
                        </ul>

                    </nav>
                    <div className="buscador">
                        <form action="" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                className='input-buscador'
                                placeholder='Buscador...'
                                value={busqueda}
                                onChange={handleSearch}
                            />
                            <button className='btn-buscador' onSubmit={handleSubmit}>🔍</button>
                        </form>

                    </div>
                </div>
                <div className="header-content container">
                    <div className="header1">
                        <img src="/venom.png" alt="" />
                        <a href="#" className='btn-2'> Ver ahora</a>
                    </div>
                    <div className="header2">
                        <h1>Las mejores <br />películas</h1>
                        <img src="/play.png" alt="" />
                    </div>
                </div>
            </header>
        </>
    )
}
