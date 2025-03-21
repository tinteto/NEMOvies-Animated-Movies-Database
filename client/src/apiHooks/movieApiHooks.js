import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/userContext";

const apiUrl = 'http://localhost:3030';

//useAllMovies - on mount
export const useAllMovies = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(`${apiUrl}/data/movies`)
      .then((response) => response.json())
      .then((result) => {
        setMovies(result);
      });
  }, []);

  return {
    movies,
  };
};

// useCreateMovie - on event
export const useCreateMovie = () => { 
    const { accessToken } = useContext(UserContext);
    
    async function createMovie(movieData) {
        const response = await fetch(`${apiUrl}/data/movies`, {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json', 
               'X-Authorization': accessToken,
            },
            body: JSON.stringify(movieData),
         });
      
         const result = await response.json();
     
         return result;
    }

    return {
        createMovie,
    }

  }

