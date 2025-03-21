import { Link } from "react-router"
import { useLatestMovies } from "../../apiHooks/movieApiHooks"

export default function Home() {
  const { latestMovies } = useLatestMovies();

    return (
        <>
  <section className="container">
  
    <div className="headings">
      <h1>Movie App</h1>
      <p>Some description about movie app here </p>
    </div> 

    <div className="homePage">
          <h1>Latest Movies</h1>

          {latestMovies.map(movie => (
          <div className="movie">
          <div className="img">
              <img src={movie.img} />
          </div>
          <h3>{movie.title}</h3>
          <div className="movieBtn">
              <Link to={`catalog/${movie._id}/details`} className="detailsBtn">Details</Link>
          </div>
          </div>
          ))}

        {latestMovies.length === 0 &&  <p className="noMovies">No movies yet!</p>}
            
    </div> 
  
  </section>
        </>
    )
}