
import { useEffect, useState, useCallback } from 'react'
import './gallery.css'
import { URL_IMAGE } from '../../costants/costants.js'
import { fetchPeliculas } from '../../services/fetchMovies.js';
import { Loader } from '../loader/Loader.jsx';
import { Visualizador } from '../visualizador/Visualizador.jsx';

export const Gallery = () => {

    const [movies, setPeliculas] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPaginas, setTotalPaginas] = useState(0);
    const [isLoading, setisLoading] = useState(true)
    const [visualicer, setVisualizer] = useState(false)
    const [movieId, setMovieId] = useState()


    useEffect(() => {
        window.scrollTo(0, 0);

        const fetchData = async () => {
            try {

                const { resultado, paginasTotales } = await fetchPeliculas(currentPage);
                setPeliculas(resultado)
                setTotalPaginas(paginasTotales)
                setisLoading(false)
            } catch (error) {
                console.error('Error al obtener las películas', error);

            } finally {
                setisLoading(false)
            }
        };

        fetchData();
    }, [currentPage]);

    const siguientePagina = () => {
        setCurrentPage((prev) => parseInt(prev, 10) + 1);
        setVisualizer(false)

    }

    const anteriorPagina = () => {
        setCurrentPage((prev) => parseInt(prev, 10) - 1);
        setVisualizer(false)
    }

    const switchWindow = useCallback((id) => {
        setMovieId(id);
        if (!visualicer) {
            setVisualizer((prevVisualizer) => !prevVisualizer);
        }
    }, [visualicer, setVisualizer]);




    return (
        <>
            <section className='movies container'>
                <h2 id='trailers'>Películas más vistas</h2>
                <hr />
                {visualicer && <Visualizador movieId={movieId} setVisualizer={setVisualizer} />}
                <div className="box-container-1"  >

                    {isLoading ? <Loader /> :
                        movies.map((item) => (
                            <div id='peliculas' className="box-1" key={item.id}>
                                <div className="content">
                                    <a href='#trailers' onClick={() => switchWindow(item.id)}><img className="movie-img" src={`${URL_IMAGE}${item.poster_path}`} alt="" /></a>
                                </div>
                            </div>
                        ))}
                </div>

                <div className="paginado">
                    {currentPage === 1 ? <button className='back' style={{ display: 'none' }}><img src="/icons/arrowLeft.png" alt="" /></button> : <button onClick={anteriorPagina} className='back'><img src="/icons/arrowLeft.png" alt="" /></button>}
                    <div className="numeracion">
                        <span className='paginaActual' >{currentPage}</span>  de {totalPaginas}
                    </div>

                    <button className='next' onClick={siguientePagina}><img src="/icons/arrowRight.png" alt="" /></button>
                </div>
            </section>
        </>
    );
};
