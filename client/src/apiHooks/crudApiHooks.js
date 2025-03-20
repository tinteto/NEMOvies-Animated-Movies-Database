import { useContext } from "react";
import { UserContext } from "../contexts/userContext";

const apiUrl = 'http://localhost:3030';


export const useCreateMovie = () => {
    const { accessToken } = useContext(UserContext);
    
    async function createMovie(title, img, description) {
        const response = await fetch(`${apiUrl}/data/movies`, {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json', 
               'X-Authorization': accessToken,
            },
            body: JSON.stringify({ title, img, description}),
         });
      
         const result = await response.json();
     
         return result;
    }

    return {
        createMovie,
    }

  }