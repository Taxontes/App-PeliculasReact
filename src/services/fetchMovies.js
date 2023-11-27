import { API_KEYTMDB, API_URL } from "../costants/costants.js";


//funcion para devolver el listado de peliculas de la API
export const fetchPeliculas = async (currentPage) => {
  try {
    const response = await fetch(
      `${API_URL}/discover/movie?api_key=${API_KEYTMDB}&page=${currentPage}`
    );

    const data = await response.json();
    const resultado = data.results;
    const paginasTotales = data.total_pages;

    return { resultado, paginasTotales };
  } catch (error) {
    console.error("Error al obtener las películas", error);
  }
};

//funcion para devolver la informacion de la pelicula por su id

export const fetchSearchMovie = async (movieId) => {
  try {
    const response = await fetch(
      `${API_URL}/movie/${movieId}?api_key=${API_KEYTMDB}`
    );

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error al obtener las películas", error);
  }
};



//funcion para devolver el video de la pelicula por su id

export const fetchVideoMovie = async (movieId) => {
  try {
    const videosResponse = await fetch(
      `${API_URL}/movie/${movieId}?api_key=${API_KEYTMDB}&append_to_response=videos`
    );
    
    if (videosResponse.ok) {
      const videosData = await videosResponse.json();
      return videosData

    } else {
      throw new Error("No se pudieron obtener los videos de la película");
    }
  } catch (error) {
    console.error("Ocurrió un error al cargar el video", error);
  }
};


//funcion para devolver los resultados optenidos por el buscador
export const fetchPeliculasBySearch = async (title) => {
  try {
    const response = await fetch(
      `${API_URL}/search/movie?query=${title}&api_key=${API_KEYTMDB}`
    );

    const data = await response.json();
    const resultado = data.results;
   

    return { resultado };

  } catch (error) {
    console.error("Error al obtener las películas", error);
  }
};

