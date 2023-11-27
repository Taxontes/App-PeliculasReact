import React from 'react'
import { useEffect, useState } from 'react'
import { fetchPeliculasBySearch } from '../../services/fetchMovies'
import { URL_IMAGE } from '../../costants/costants'
import { Loader } from '../loader/Loader.jsx';

import './pelicula.css'


export const Peliculas = () => {

    const [titleMovie, setTitleMovie] = useState('batman')
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)
  

    useEffect(() => {

        const fetchMovieSearching = async () => {
            try {
                const data = await fetchPeliculasBySearch(titleMovie)
                console.log(data.resultado)
                setMovies(data.resultado)

            } catch (error) {
                console.error('Ocurrió un error al buscar la pelicula', error)
            } finally {
                setLoading(false)
            }
        }
        fetchMovieSearching()

    }, [titleMovie])



    return (
        <>
            <section className='search container'>
                <h2>Resultados de búsqueda</h2>
                <hr />
                <div className="peliculas-contenedor">
                    <div className='search-content'>
                        { movies ? (
                            movies.map((item) => (
                                <div key={item.id}>
                                    <img src={item.poster_path ? `${URL_IMAGE}${item.poster_path}` : '/notFound.jpg'} alt="" />
                                    <h1>{item.original_title}</h1>
                                   
                                </div>
                            ))
                        ) : (
                            <p>No se encontraron películas</p>
                        )}
                        {loading && <Loader/>}
                        </div>
                    </div>
                
            </section>
        </>
    )
}
