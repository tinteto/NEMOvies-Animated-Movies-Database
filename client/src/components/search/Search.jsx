import { useEffect, useState } from "react"
import MovieCatalogItem from "../catalog/movieCatalogItem/MovieCatalogItem"
import styles from './Search.module.css'

export default function Search() {
    const [ searchWord, setSearchWord] = useState('');
    const [ movies, setMovies ] = useState([]);

    const searchMovieHandler = (ev) => {
        setSearchWord(ev.target.value);  
    }

const fetchMovies = async (query) => {
  const response = await fetch(
    `http://localhost:3030/data/movies?where=title%20LIKE%20%22${query}%22`
 
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
        placeholder="Search for movies..."
        value={searchWord}
        onChange={searchMovieHandler}
      />
    <ul>
      {movies.length > 0 
      ? (
      movies.map((movie) =><MovieCatalogItem key={movie._id} {...movie} />)
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