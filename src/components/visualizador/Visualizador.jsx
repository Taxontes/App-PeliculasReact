import React from 'react'
import './visualizador.css'
import { useState, useEffect, useCallback } from 'react'
import { fetchSearchMovie, fetchVideoMovie } from '../../services/fetchMovies'
import { URL_IMAGE } from '../../costants/costants'
import { Loader } from '../loader/Loader'
import YouTube from 'react-youtube';

export const Visualizador = ({ movieId, setVisualizer }) => {

    const [movie, setMovie] = useState()
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true)
    const [generos, setGeneros] = useState([])


    useEffect(() => {
        const fetchData = async () => {
            try {
                const movieData = await fetchSearchMovie(movieId);
                setMovie(movieData);
                console.log(movie)
                const genreNames = movieData?.genres?.map(genre => genre.name) || [];
                setGeneros(genreNames);


                const videoData = await fetchVideoMovie(movieId);
                const allVideos = videoData.videos.results;
                const officialTrailer = allVideos.find(video => video.type === 'Trailer');

                setVideos(officialTrailer);
                setLoading(false)
            } catch (error) {
                console.error('Error al buscar la película', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();

       
    }, [movieId]);

    const cerrarVisualizador = useCallback(() => {
        setVisualizer(false);
    }, [setVisualizer]);

    return (
        <>  
          
            {!loading && movie ? (
                    <main className='main-visualizador'
                        style={{
                            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)), url('${URL_IMAGE}${movie.poster_path}')`,
                        }}>
                        <section className='visual-content-visualizador'>

                            <img
                                src={`${URL_IMAGE}${movie.poster_path}`}
                                alt={movie.Title}
                                />
                        </section>
                        <section className='info-content-visualizador'>
                                <div className='cerrar-visualizador'>
                                    <button className='btn-visualizador' onClick={cerrarVisualizador}>X</button>
                                </div>
                            <h2>{movie.original_title}</h2>

                            <p>{movie.overview}
                            <p>Géneros: {generos.join(', ')} </p>
                            <p>Fecha de producción: {movie.release_date}</p>
                            <p>Duración: {movie.runtime} min</p>
                            
                            </p>
                        </section>

                        <section className='trailer-visualizador'>
                            {videos && (
                                <YouTube
                                    videoId={videos.key}
                                    opts={{ width: '100%', height: '600px' }} />
                            )}
                        </section>
                    </main>
            )
                :
                <Loader />
        }
        </>
    )
}
