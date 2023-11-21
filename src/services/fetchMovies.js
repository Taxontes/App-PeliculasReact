import {API_KEY} from '../costants/costants.js'

export const fetchPeliculas = async () => {
    
try {
    const informacion = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=TODAS`);
    const result = await informacion.json();

   

} catch (error) {
    
}

}