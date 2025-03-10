import { useEffect, useState } from 'react'
import apiService from '../../services/apiService';
import MovieItem from './MovieItem';


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
<main className="catalog">
{movies.map(movie => <MovieItem 
key={movie._id} 
{...movie}
/>)}
</main>
 </>
    )
}