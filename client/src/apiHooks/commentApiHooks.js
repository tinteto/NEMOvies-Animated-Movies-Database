import { useContext, useEffect, useReducer } from "react";
import { UserContext } from "../contexts/userContext";

const apiUrl = 'http://localhost:3030/data/comments';


function commentsReducer(state, action) {
    switch (action.type) {
        case 'ADD_COMMENT':
            return [...state, action.payload];
        case 'GET_ALL':
            return action.payload;
        default:
            return state;
    }
};

//get comments for movie - onMount
export const useComments = (movieId) => {
    const { accessToken } = useContext(UserContext);
    // const [comments, setComments] = useState([]);
    const [comments, dispatch] = useReducer(commentsReducer, []);


useEffect(() => {
const searchParams = new URLSearchParams({
    where: `movieId="${movieId}"`,
    load: `author=_ownerId:users`,
});

    fetch(`${apiUrl}?${searchParams.toString()}`, {
        method: 'GET',
        headers: {
            'X-Authorization': accessToken,
        }
        })
    .then(response => response.json())
    .then(result => 
        dispatch({type: 'GET_ALL', payload: result}))

}, [movieId, accessToken]);

return {
    comments,
    addComment: (commentData) => dispatch({type: 'ADD_COMMENT', payload: commentData }),
}
}


//postComment - on event
export const useCreateComment = () => {
    const { accessToken } = useContext(UserContext);

    async function createComment(movieId, comment) {
        const response = await fetch(`${apiUrl}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': accessToken,
            },
            body: JSON.stringify({comment, movieId}), 
        });
    
        if(!response.ok) {
            const result = await response.json();
            throw result;
        }
    
        const result = await response.json();
        return result;
    }

    return { createComment };
}



