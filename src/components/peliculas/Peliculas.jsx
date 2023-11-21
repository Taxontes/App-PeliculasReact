import React from 'react'
import { useId } from 'react'
import './peliculas.css'
export const Peliculas = () => {

    const peliculas = [
        {
            id: useId(),
            title: 'Pelicula1',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quibusdam, est dicta sit voluptatibus quae similique, quidem quisquam tenetur suscipit nobis? Quia nobis quidem est tempora repudiandae totam ipsum iste!',
            imagen: "/7.jpg"

        },
        {
            id: useId(),
            title: 'Pelicula1',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quibusdam, est dicta sit voluptatibus quae similique, quidem quisquam tenetur suscipit nobis? Quia nobis quidem est tempora repudiandae totam ipsum iste!',
            imagen: "/7.jpg"

        },
        {
            id: useId(),
            title: 'Pelicula1',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quibusdam, est dicta sit voluptatibus quae similique, quidem quisquam tenetur suscipit nobis? Quia nobis quidem est tempora repudiandae totam ipsum iste!',
            imagen: "/7.jpg"

        },
        {
            id: useId(),
            title: 'Pelicula1',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quibusdam, est dicta sit voluptatibus quae similique, quidem quisquam tenetur suscipit nobis? Quia nobis quidem est tempora repudiandae totam ipsum iste!',
            imagen: "/7.jpg"

        },
        {
            id: useId(),
            title: 'Pelicula1',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quibusdam, est dicta sit voluptatibus quae similique, quidem quisquam tenetur suscipit nobis? Quia nobis quidem est tempora repudiandae totam ipsum iste!',
            imagen: "/7.jpg"

        },
        {
            id: useId(),
            title: 'Pelicula1',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quibusdam, est dicta sit voluptatibus quae similique, quidem quisquam tenetur suscipit nobis? Quia nobis quidem est tempora repudiandae totam ipsum iste!',
            imagen: "/7.jpg"

        },
        {
            id: useId(),
            title: 'Pelicula1',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quibusdam, est dicta sit voluptatibus quae similique, quidem quisquam tenetur suscipit nobis? Quia nobis quidem est tempora repudiandae totam ipsum iste!',
            imagen: "/7.jpg"

        },
        {
            id: useId(),
            title: 'Pelicula1',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quibusdam, est dicta sit voluptatibus quae similique, quidem quisquam tenetur suscipit nobis? Quia nobis quidem est tempora repudiandae totam ipsum iste!',
            imagen: "/7.jpg"

        },

    ]
  return (
      <>
          <section className='movies container'>
              <h2>Películas</h2>
              <hr />
              <div className="box-container-2">
                  {peliculas.map((item) => (
                      <div className="box-2" key={item.id}>
                          <div className="content">
                              <img src={item.imagen} alt="" />
                              <h3>{item.title}</h3>
                              <p>{item.description}</p>
                          </div>
                      </div>
                  ))}
              </div>
              <div className="load-more" id='load-more-1'>
                  Cargar más
              </div>
          </section>
      </>
  )
}
