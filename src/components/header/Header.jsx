import React from 'react'
import './header.css'
import { useBusqueda } from '../../context/BusquedaContext.jsx'
import { Link } from 'react-scroll';
import { IconMenu } from '../../icons/IconoMenu.jsx';


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
                    <a href="#" className='logo'>Reelsz</a>
                    <input type="checkbox" id='menu' />
                    <label htmlFor="menu">
                        <IconMenu/>
                    </label>

                    <nav className='navbar'>
                        <ul>
                            <li><a href="#">Inicio</a></li>
                            <li><Link className='enlace-react' to="trailers" smooth={true} duration={500}>Películas</Link></li>
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
                        <img src="/thorLogo.png" alt="Logo de la primera película de thor" />
                        <Link to="trailers" smooth={true} duration={500} className='btn-2'> Ver películas</Link>
                    </div>
                </div>
            </header>
        </>
    )
}
