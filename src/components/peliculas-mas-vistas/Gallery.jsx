
import { useEffect, useState } from 'react'
import './gallery.css'
import { URL_IMAGE } from '../../costants/costants.js'
import { fetchPeliculas } from '../../services/fetchMovies.js';
import { Loader } from '../loader/Loader.jsx';
import { Visualizador } from '../visualizador/Visualizador.jsx';

export const Gallery = () => {
    
    const [movies, setPeliculas] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPaginas, setTotalPaginas] = useState(0);
    const [isLoading, setisLoading] = useState(false)
    const [visualicer, setVisualizer] = useState(false)



    useEffect(() => {

        setisLoading(true)
        window.scrollTo(0, 0);

        const fetchData = async () => {
            try {

         

                const { resultado, paginasTotales } = await fetchPeliculas(currentPage);
                setPeliculas(resultado)
             
                setTotalPaginas(paginasTotales)
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

    const switchWindow = () => { 
        setVisualizer((prevState) => !prevState)
       
    }


    return (
        <>
            <section  className='movies container'>
                <h2>Películas más vistas</h2>
                <hr />
                <h2 id='trailers'>{visualicer && <Visualizador/>}</h2>
                <div className="box-container-1"  >

                    {isLoading ? <Loader/> :
                        movies.map((item) => (
                            <div id='peliculas' className="box-1" key={item.id}>
                                <div className="content">
                                    <a href='#trailers' onClick={switchWindow}><img className="movie-img" src={`${URL_IMAGE}${item.poster_path}`} alt="" /></a> 
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
