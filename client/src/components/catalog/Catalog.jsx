import MovieCatalogItem from './movieCatalogItem/MovieCatalogItem';
import { useAllMovies } from '../../apiHooks/movieApiHooks';
import styles from './Catalog.module.css'

export default function Catalog() {
const { movies } = useAllMovies();

    return(
<>
<section className={styles.catalogPage}>
    <h1>Ready to dive in?/ Time to dive in!</h1>
    <div className={styles.movies}>
    {movies.map(movie => <MovieCatalogItem key={movie._id} {...movie} />)}
    </div>

   <div className={styles.noMovies}>
    {movies.length === 0 && <h3 className="noMovies">No Movies Yet</h3>}
   </div>

</section>
</>
    )
}