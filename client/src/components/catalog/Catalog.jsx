import MovieCatalogItem from './movieCatalogItem/MovieCatalogItem';
import styles from './Catalog.module.css'
import { useEffect, useState } from 'react';


export default function Catalog() {
const [movies, setMovies] = useState([]);
const [page, setPage] = useState(1);
// const [total, setTotal] = useState(0);
const pageSize = 4;

useEffect(() => {
const offset = (page - 1) * pageSize;

fetch(`http://localhost:3030/data/movies?offset=${offset}&pageSize=${pageSize}`)
.then(response => response.json())
.then(result => {
    setMovies(result);
   // setTotal(total);
    
});
}, [page]);


// const totalPages = Math.ceil(total / pageSize);

    return(
<>
<section className={styles.catalogPage}>
    <h1>Browse Movies</h1>
    <div className={styles.movies}>
    {movies.map(movie => <MovieCatalogItem key={movie._id} {...movie} />)}
    </div>

   <div className={styles.noMovies}>
    {movies.length === 0 && <h3 className={styles.noMovies}>No Movies yet!</h3>}
   </div>

   <div className={styles.pagination}>
  <button className="prev" onClick={() => setPage(prev => Math.max(prev - 1, 1))} >Prev</button>
  <span> Page {page}</span>
  <button className="next" onClick={() => setPage(prev => prev + 1)} disabled={movies.length === 0}>Next</button>
</div>

</section>
</>
    )
}