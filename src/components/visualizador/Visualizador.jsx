import React from 'react'
import './visualizador.css'

export const Visualizador = () => {
  return (
      <>
        <main className='main-visualizador'>
            <section className='visual-content-visualizador'>
                  <img src="/1.jpg" alt="" />
              </section>
              <section className='info-content-visualizador'>
                <h1>Titulo de la pelicula</h1>
                  <h4>Descripcion</h4>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam suscipit harum maiores et, minus officiis accusamus ratione quos obcaecati. Vel iure exercitationem sapiente aliquid iusto sequi perspiciatis aut natus officiis.
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim adipisci obcaecati natus vitae a ab amet ad delectus hic totam sint, libero excepturi pariatur dolore, esse architecto quam? Ducimus, doloremque.
                  </p>
              </section>
              <section className='trailer-visualizador'>
                <img src="bg.jpg" alt="" />
              </section> 
        </main>
      </>
  )
}
