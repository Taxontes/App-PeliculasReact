import { API_KEYTMDB, API_URL } from "../costants/costants.js";

export const fetchPeliculas = async (currentPage) => {

   
  try {
    const response = await fetch(
      `${API_URL}/discover/movie?api_key=${API_KEYTMDB}&page=${currentPage}`
      );
      
      const data = await response.json();
      const resultado = data.results
      const paginasTotales = data.total_pages
      
      return { resultado, paginasTotales };
      
  } catch (error) {
    console.error("Error al obtener las películas", error);
  }

};
