import React from 'react'
import { useId } from 'react'
import './slider.css'
export const Slider = () => {

    const imagenes = [
        {
            id: useId(),
            img: '/1.jpg',
        },
        {
            id: useId(),
            img: '/7.jpg',
        },
        {
            id: useId(),
            img: '/12.jpg',
        },
        {
            id: useId(),
            img: '/4.jpg',
        },
        {
            id: useId(),
            img: '/8.jpg',
        },
        {
            id: useId(),
            img: '/9.jpg',
        },
        {
            id: useId(),
            img: '/14.jpg',
        },
        {
            id: useId(),
            img: '/15.jpg',
        },
        {
            id: useId(),
            img: '/20.jpg',
        },
        {
            id: useId(),
            img: '/24.jpg',
        },
    ]
  return (
      <>
          <div className="slider container">
              <h2 className='title-slider'>Películas destacadas</h2>
              <hr className='hr-slider'/>
              <div className="slider-track">
                  {
                      imagenes.map((item) => (
                        <div key={item.id} className="slide">
                            <img src={item.img} alt="Imagen de cartelera povista por la propia aplicación" />
                        </div>
                      ))
                  }
              </div>
          </div>
      </>
  )
}
