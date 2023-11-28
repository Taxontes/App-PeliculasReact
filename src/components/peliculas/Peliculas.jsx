import React from 'react'
import { useEffect, useState,useCallback } from 'react'
import { fetchPeliculasBySearch } from '../../services/fetchMovies'
import { URL_IMAGE } from '../../costants/costants'
import { Loader } from '../loader/Loader.jsx';
import { useBusqueda } from '../../context/BusquedaContext.jsx';
import debounce from 'just-debounce-it'
import './pelicula.css'


export const Peliculas = () => {

    const {busqueda} = useBusqueda()
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)
  
  
    const debouncedFetch = useCallback(
        debounce(async (searchTerm) => {
            try {
                const data = await fetchPeliculasBySearch(searchTerm);
                setMovies(data.resultado);
            } catch (error) {
                console.error('Ocurrió un error al buscar la película', error);
            } finally {
                setLoading(false);
            }
        }, 1000),
        []
    );

    useEffect(() => {
       
        debouncedFetch(busqueda);

    }, [busqueda, debouncedFetch]);

   
    
    return (
        <>
            <section className='search container'>
                <h2 className='title-search'>Resultados de búsqueda</h2>
                <hr />
                <div className="peliculas-contenedor">
                    <div className='search-content'>
                        {movies && (
                            movies.map((item) => (
                                <div key={item.id}>
                                    <img src={item.poster_path ? `${URL_IMAGE}${item.poster_path}` : '/notFound.jpg'} alt="Poster de cada película devuelta por la Api" />
                                    <h1 className='title-movie-searched'>{item.original_title}</h1>
                                   
                                </div>
                            ))
                        )}
                        {loading && <Loader/>}

                        {!loading && movies.length === 0 && <p className='not-found-movies'>No se encontraron películas disponibles tras su búsqueda</p>}  
                     
                        </div>
                    </div>
                
            </section>
        </>
    )
}
