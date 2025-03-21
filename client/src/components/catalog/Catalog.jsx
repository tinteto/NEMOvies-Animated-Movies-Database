import { useEffect, useState } from 'react'
import apiService from '../../services/apiService';
import MovieCatalogItem from './movieCatalogItem/MovieCatalogItem';
import { useAllMovies } from '../../apiHooks/movieApiHooks';


export default function Catalog() {
const { movies } = useAllMovies();

    return(
<>
<section className="catalogPage">
<h1>Featured Movies</h1>
    
{movies.map(movie => <MovieCatalogItem key={movie._id} {...movie} />)}

{movies.length === 0 && <h3 className="noMovies">No Movies Yet</h3>}

</section>
</>
    )
}