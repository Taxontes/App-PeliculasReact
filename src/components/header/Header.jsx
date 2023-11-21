import React from 'react'
import './header.css'

export const Header = () => {
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
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Inicio</a></li>
                      </ul>
                      
                  </nav>
                  <a href="#" className='btn-1'>Login</a>
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
