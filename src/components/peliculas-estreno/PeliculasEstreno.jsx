import React from 'react'
import { useId } from 'react'
import './peliculasEstreno.css'
export const PeliculasEstreno = () => {
    const peliculas = [
        {
            id: useId(),
            title: 'Pelicula1',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quibusdam, est dicta sit voluptatibus quae similique, quidem quisquam tenetur suscipit nobis? Quia nobis quidem est tempora repudiandae totam ipsum iste!',
            imagen: "/12.jpg"

        },
        {
            id: useId(),
            title: 'Pelicula1',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quibusdam, est dicta sit voluptatibus quae similique, quidem quisquam tenetur suscipit nobis? Quia nobis quidem est tempora repudiandae totam ipsum iste!',
            imagen: "/12.jpg"

        },
        {
            id: useId(),
            title: 'Pelicula1',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quibusdam, est dicta sit voluptatibus quae similique, quidem quisquam tenetur suscipit nobis? Quia nobis quidem est tempora repudiandae totam ipsum iste!',
            imagen: "/12.jpg"

        },
        {
            id: useId(),
            title: 'Pelicula1',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quibusdam, est dicta sit voluptatibus quae similique, quidem quisquam tenetur suscipit nobis? Quia nobis quidem est tempora repudiandae totam ipsum iste!',
            imagen: "/12.jpg"

        },
        {
            id: useId(),
            title: 'Pelicula1',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quibusdam, est dicta sit voluptatibus quae similique, quidem quisquam tenetur suscipit nobis? Quia nobis quidem est tempora repudiandae totam ipsum iste!',
            imagen: "/12.jpg"

        },
        {
            id: useId(),
            title: 'Pelicula1',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quibusdam, est dicta sit voluptatibus quae similique, quidem quisquam tenetur suscipit nobis? Quia nobis quidem est tempora repudiandae totam ipsum iste!',
            imagen: "/12.jpg"

        },
        {
            id: useId(),
            title: 'Pelicula1',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quibusdam, est dicta sit voluptatibus quae similique, quidem quisquam tenetur suscipit nobis? Quia nobis quidem est tempora repudiandae totam ipsum iste!',
            imagen: "/12.jpg"

        },
        {
            id: useId(),
            title: 'Pelicula1',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quibusdam, est dicta sit voluptatibus quae similique, quidem quisquam tenetur suscipit nobis? Quia nobis quidem est tempora repudiandae totam ipsum iste!',
            imagen: "/12.jpg"

        },

    ]
  return (
      <>
          <section className='movies container'>
              <h2>Películas de estreno</h2>
              <hr />
              <div className="box-container-3">
                  {peliculas.map((item) => (
                      <div className="box-3" key={item.id}>
                          <div className="content">
                              <img src={item.imagen} alt="" />
                              <h3>{item.title}</h3>
                              <p>{item.description}</p>
                          </div>
                      </div>
                  ))}
              </div>
          </section>
      </>
  )
}
