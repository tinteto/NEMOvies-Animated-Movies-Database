import { useEffect, useState } from 'react'
import apiService from '../../services/apiService';
import MovieCatalogItem from './movieCatalogItem/MovieCatalogItem';


export default function Catalog() {
const [movies, setMovies] = useState([]);

    useEffect(() => {
    apiService.getAllItems()
    .then(result => {
        console.log(result);
        
       setMovies(result);
    })
    }, []);

    return(
<>
<section className="catalogPage">
<h1>View All Movies</h1>
    
{movies.map(movie => <MovieCatalogItem key={movie._id} {...movie} />)}

<h3 className="noItems">No Movies Yet</h3>
</section>
</>
    )
}