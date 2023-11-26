import React from 'react'
import { useEffect, useState } from 'react'
import { fetchSearchMovie, fetchVideoMovie } from '../../services/fetchMovies'
import './peliculas.css'
import YouTube from 'react-youtube';

export const Peliculas = () => {

    const [movie, setMovie] = useState()
    const [movieId, setMovieId] = useState(157336)
    const [videos, setVideos] = useState([]);


    useEffect(() => {

        const fetchMovie = async () => {
            try {
                const data = await fetchSearchMovie(movieId)
                setMovie(data)

            } catch (error) {
                console.error('Ocurrió un error al buscar la pelicula', error)
            }
        }
        fetchMovie(movieId)

    }, [])

    useEffect(() => {
        const fetchVideo = async () => {
            try {
                const data = await fetchVideoMovie(movieId)
                const officialTrailer = data.videos.results.find(video => video.type === 'Trailer');
                setVideos(officialTrailer)
              
            } catch (error) {
                console.error('Ocurrió un error al buscar la pelicula', error)
            }
        }
        fetchVideo()

    }, [movieId])


    return (
        <>
            <section className='movies container'>
                <h2>Películas</h2>
                <hr />
                <div className="box-container-2">
                    <div>
                        {movie ? (
                            <div>
                                <h2>{movie.title}</h2>
                                <p>{movie.overview}</p>
                                {movie.poster_path && (  // Verifica si hay una ruta de póster disponible
                                    <img
                                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                        alt={movie.title}
                                    />
                                )}
                            </div>
                        ) : (
                            <p>Cargando información de la película...</p>
                        )}
                        {videos && (
                            <div>
                                <h3>Tráiler Oficial</h3>
                                <YouTube
                                    videoId={videos.key}
                                    opts={{ width: '560', height: '315' }}
                               
                                />
                            </div>
                        )}
                    </div>
                </div>
                <div className="load-more" id='load-more-1'>
                    Cargar más
                </div>
            </section>
        </>
    )
}
