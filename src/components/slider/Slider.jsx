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
            img: '/7.jpg',
        },
        {
            id: useId(),
            img: '/12.jpg',
        },
        {
            id: useId(),
            img: '/12.jpg',
        },
        {
            id: useId(),
            img: '/12.jpg',
        },
        {
            id: useId(),
            img: '/12.jpg',
        },
        {
            id: useId(),
            img: '/12.jpg',
        },
    ]
  return (
      <>
          <div className="slider container">
              <div className="slider-track">
                  {
                      imagenes.map((item) => (
                        <div key={item.id} className="slide">
                            <img src={item.img} alt="" />
                        </div>
                      ))
                  }
              </div>
          </div>
      </>
  )
}
