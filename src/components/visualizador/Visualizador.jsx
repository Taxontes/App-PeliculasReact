import React from 'react'
import './visualizador.css'
import { useState, useEffect } from 'react'
import { fetchSearchMovie, fetchVideoMovie } from '../../services/fetchMovies'
import { URL_IMAGE } from '../../costants/costants'
import YouTube from 'react-youtube';

export const Visualizador = () => {

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
            {
                movie && (
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
                            <h2>{movie.original_title}</h2>

                            <p>{movie.overview}
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
                )}
        </>
    )
}
