import styles from './Home.module.css'
import { Link } from "react-router"
import { useLatestMovies } from "../../apiHooks/movieApiHooks"


export default function Home() {
  const { latestMovies } = useLatestMovies();

    return (
        <>
  <section className={styles.container}>
  
    <div className={styles.headings}>
      <h1>Welcome!</h1>
      <h3>Dive in the limitless world of Disney movies adventures!</h3>
      <p>Enjoy in moderation!</p>
    </div> 

    <div className={styles.latest}>
      <h1>Latest Movies</h1>
    </div>

    <div className={styles.homePage}>
          {latestMovies.map(movie => (
          <div className={styles.movie} key={movie._id}>
          <div className={styles.img}>
              <img src={movie.img} />
          </div>
          <h3>{movie.title}</h3>
          <h6>{movie.releaseDate}</h6>

          <div className={styles.movieBtn}>
              <Link to={`catalog/${movie._id}/details`} className={styles.detailsBtn}>Movie Details</Link>
          </div>
          </div>
          ))}

      <div className="noMovies">
        {latestMovies.length === 0 &&  <p className={styles.noMovies}>No adventures yet!</p>}
      </div>
            
    </div> 
  
  </section>
        </>
    )
}