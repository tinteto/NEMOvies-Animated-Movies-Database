//TODO Welcome
import styles from './Home.module.css'
import { Link } from "react-router"
import { useLatestMovies } from "../../apiHooks/movieApiHooks"


export default function Home() {
  const { latestMovies } = useLatestMovies();

    return (
        <>
  <section className={styles.container}>
  
    <div className={styles.headings}>
    <div className={styles.welcomeMsg}>
      <h1>Welcome to NEMOvies!</h1>
      <h3>Dive into the limitless world of movie adventures! Enjoy in moderation!</h3>
          <div className="homeBtns">
              <Link to="/login" className={styles.loginBtn}>Get started</Link>
              <Link to="/about" className={styles.learnMoreBtn}>Learn more → </Link>
          </div>
    </div>
    <div className={styles.homeImg}>
      <img src="\images\brian-mcgowan-zmkZWG6r4dw-unsplash.jpg" alt="HomeImage" />
    </div>
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

      <div className={styles.noMovies}>
        {latestMovies.length === 0 &&  <h3 className="noMovies">No movies yet!</h3>}
      </div>
            
    </div> 
  
  </section>
        </>
    )
}