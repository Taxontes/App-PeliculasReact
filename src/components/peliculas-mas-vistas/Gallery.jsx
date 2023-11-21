
import { useEffect, useState } from 'react'
import './gallery.css'
import { API_KEYTMDB, API_URL, URL_IMAGE } from '../../costants/costants.js'

export const Gallery = () => {

    const [movies, setMovies] = useState([]);
    const [totalPaginas, setTotalPaginas] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)
   

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await fetch(`${API_URL}/discover/movie?api_key=${API_KEYTMDB}&page=${currentPage}`);
                const data = await response.json();

                setMovies(data.results);
                setTotalPaginas(data.total_pages)
                setCurrentPage(data.page)
            } catch (error) {
                console.error('Error al obtener las películas', error);
            }
        };

        fetchMovies();
    }, [currentPage]);


    const siguientePagina = () => {
        setCurrentPage((prev) => parseInt(prev, 10) + 1);
    }

    
    
    const anteriorPagina = () => {
        
    }



    return (
        <>
            <section className='movies container'>
                <h2>Películas más vistas</h2>
                <hr />
                <div className="box-container-1">
                    {movies.map((item) => (
                        <div className="box-1" key={item.id}>
                            <div className="content">
                                <img src={`${URL_IMAGE}${item.poster_path}`} alt="" />
                                <h3>Título: <br /> {item.title}</h3>
                                <h3>Descripción: <br /> </h3>
                                <p>{item.overview}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="load-more" id='load-more-1'>
                    Cargar más
                </div>
                <div className="paginado">
                    <button className='back'><img src="/icons/arrowLeft.png" alt="" /></button>
                    <div className="numeracion">
                      <span className='paginaActual'>{currentPage}</span>  de {totalPaginas}
                    </div>
                   
                    <button className='next' onClick={siguientePagina}><img src="/icons/arrowRight.png" alt="" /></button>
                </div>
            </section>
        </>
    );
};
