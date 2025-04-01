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
      

         if(!response.ok) {
            const result = await response.json();
            throw result;
        }

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


//useRecentMovies - onMount - advanced retieval - sorting and selecting properties
export const useLatestMovies = () => {
    const [latestMovies, setLatest] = useState([]);
 

    useEffect(() => {
        const searchParams = new URLSearchParams({
            sortBy: '_createdOn desc',
            pageSize: 8,
            select: '_id,img,title,releaseDate' //selecting properties

        });
    
        fetch(`${apiUrl}/data/movies?${searchParams}`)
        .then(response => response.json())
        .then(result => 
            setLatest(result)
        )}, [])

return { latestMovies };

}

//useOneMovie, load comments - onMount
export const useOneMovie = (movieId) => {
const [movie, setMovie] = useState({});
const [allComments, setAllComments] = useState([]);


//oneMovie
useEffect(() => {
    fetch(`${apiUrl}/data/movies/${movieId}`)
    .then(response => response.json())
    .then(result => {
       setMovie(result)
    })
}, [movieId]);


//load comments for movie
useEffect(() => {
    fetch(`${apiUrl}/data/comments?where=movieId%3D%22${movieId}%22`)
    .then(response => response.json())
    .then(result => 
        setAllComments(result)
    )

}, [movieId]);


//postComment - on event
const { accessToken } = useContext(UserContext);

async function postComment(movieId, commentData) {
    const response = await fetch(`${apiUrl}/data/comments`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': accessToken,
        },
        body: JSON.stringify({...commentData, movieId}),
    });

    if(!response.ok) {
        const result = await response.json();
        throw result;
    }

    const result = await response.json();
    return result;
}

return { movie, allComments, postComment };
    
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
      

         if(!response.ok) {
            const result = await response.json();
            throw result;
        }

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


        if(!response.ok) {
            const result = await response.json();
            throw result;
        }

          return response; 
    }

    return { deleteMovie };
 
}


//useUserMovies - on mount
export const useUserMovies = () => {
    const [userMovies, setUserMovies] = useState([]);
    const { _id: userId } = useContext(UserContext);
    useEffect(() => {
    fetch(`http://localhost:3030/data/movies?where=_ownerId%3D%22${userId}%22`)
    .then(response => response.json())
    .then(result => 
        setUserMovies(result)
    )
    }, []);
    
    return { userMovies };
}


 //!search items
 //(`${apiUrl}/data/items?where=name%20LIKE%20%22${query}%22`);