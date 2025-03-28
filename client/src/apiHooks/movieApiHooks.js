import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/userContext";

const apiUrl = 'http://localhost:3030';

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

    return { createMovie };

};


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

  return { movies };
};

//useRecentMovies - onMount
export const useLatestMovies = () => {
    const [latestMovies, setLatest] = useState([]);
 
    useEffect(() => {
        const searchParams = new URLSearchParams({
            sortBy: '_createdOn desc',
            pageSize: 4,
            select: '_id,img,title,releaseDate'

        });
    
        fetch(`${apiUrl}/data/movies?${searchParams}`)
        .then(response => response.json())
        .then(result => 
            setLatest(result)
        )}, [])

return { latestMovies };

}


//useOneMovie - onMount
export const useOneMovie = (movieId) => {
const [movie, setMovie] = useState({});

useEffect(() => {
    fetch(`${apiUrl}/data/movies/${movieId}`)
    .then(response => response.json())
    .then(result => {
       setMovie(result)
    })
}, [movieId]);
    
return { movie }
};

//useEditMovie - on Event
export const useEditMovie = () => {
    const { accessToken } = useContext(UserContext);

   async function editMovie(movieId, movieData) {
        const response = await fetch(`${apiUrl}/data/movies/${movieId}`, {
            method: 'PUT',
            headers: {
               'Content-Type': 'application/json',
               'X-Authorization': accessToken,
            },
            //трябва да подам и id-то, защото при редакция сървъра не праща автоматично id
            body: JSON.stringify({ ...movieData, _id: movieId }),
         });
      
         const result = await response.json();
      
         return result;
        }
    return { editMovie }

 }

 //useDeleteMovie - onEvent
export const useDeleteMovie = () => {
    const { accessToken } = useContext(UserContext);

    async function deleteMovie(movieId) {
        const response = await fetch(`${apiUrl}/data/movies/${movieId}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
              'X-Authorization': accessToken,
           }
        })
          return response; 
    }

    return { deleteMovie };
 
   }



 //! get all comments for an item
 //(`${apiUrl}/data/comments?where=itemId%3D%22${itemId}%22`)
 //!post comment for an item
 // (`${apiUrl}/data/comments`), send payload
 //!search items
 //(`${apiUrl}/data/items?where=name%20LIKE%20%22${query}%22`);