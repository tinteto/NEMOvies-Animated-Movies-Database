import { useEffect, useState } from "react"
import styles from './Search.module.css'
import { Link } from "react-router";

export default function Search() {
    const [ searchWord, setSearchWord] = useState('');
    const [ movies, setMovies ] = useState([]);

    const searchMovieHandler = (ev) => {
        setSearchWord(ev.target.value);  
    }


const fetchMovies = async (query) => {
  const encodedQuery = encodeURIComponent(`title like "${query}"`)
  const response = await fetch(
    `http://localhost:3030/data/movies?where=${encodedQuery}`
 
  );
  const result = await response.json();
  setMovies(result);
};


useEffect(() => {
if(searchWord) {
    fetchMovies(searchWord);
} else {
    setMovies([]);
}
}, [searchWord]);


    return(
    <>
      <div className={styles.searchMovies}>
      <h2>Search movies</h2>
      <input
        type="text"
        placeholder="Search movies..."
        value={searchWord}
        onChange={searchMovieHandler}
      />
    <ul>
      {movies.length > 0 
      ? (
      movies.map((movie) =>  <li key={movie._id}><Link to={`/catalog/${movie._id}/details`}> {movie.title} </Link></li>)
    )
      : 
    (
      <p>No movies found!</p>
    )}
      </ul>
    </div>
    </>
    )
}