//TODO Edit details information, comments section
import styles from './MovieDetails.module.css';
import { useContext, useEffect, useOptimistic, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router';
import { UserContext } from '../../contexts/userContext';
import { useDeleteMovie, useOneMovie } from '../../apiHooks/movieApiHooks';
import { toast } from 'react-toastify';
import { useComments, useCreateComment } from '../../apiHooks/commentApiHooks';
import { v4 as uuid } from 'uuid'
import MovieComments from '../comments/MovieComments';
import CreateComment from '../create-comment/CreateComment';

export default function MovieDetails() {
    const redirectTo = useNavigate();
    const { email, _id: userId } = useContext(UserContext);
    const { movieId } = useParams();
    const { movie } = useOneMovie(movieId);
    const { deleteMovie } = useDeleteMovie();

    const { createComment } = useCreateComment();
    const { comments, addComment } = useComments(movieId);
    const [ optimisticComments, setOptimisticComments] = useOptimistic(comments, (state, newComment) => [...state, newComment]);
  
  
    const movieDeleteClickHandler = async () => {
    const isApproved = confirm(`Are you sure you want to delete ${movie.title} movie?`);

    if(!isApproved) {
        return;
    }

    
    try {
        await deleteMovie(movieId);
        toast.success('Movie deleted successfully!')
    
        redirectTo('/catalog');
    } catch (error) {
        toast.error(error.message);
    }
    };

    const onCreateCommentHandler = async (formData) => {
        const comment = formData.get('comment');
   
        if(comment === '') {
            toast.warning('Missing fields!');
            return;
        }
    
        const newOptimisticComment = {
            _id: uuid(),
            _ownerId: userId,
            movieId,
            comment,
            pending: true,
            author: {
                email,
            }
        };

    try {
        //optimistic update
        setOptimisticComments(newOptimisticComment);

        //server update
        const commentResult = await createComment(movieId, comment);
        console.log(commentResult);
          
        //Local state update
        addComment({ ...commentResult, author: { email }});
        toast.success('Review created successfully!');
    } catch (error) {
        toast.error(error.message); 
    }
        
    };



    return(
        <>
    <div className={styles.movieContainer}>
        <div className={styles.movieDetails}>
            <img src={movie.img} alt="Movie Poster" />
            <div className={styles.text}>
                <h1>{movie.title}</h1>
                <h4 className={styles.date}>Release Date: {movie.releaseDate}</h4>
                <h2>Creators: {movie.creators}</h2>
                <h2>Stars: {movie.stars}</h2>
                <p>{movie.description}</p>
               
                <div className={styles.btnContainer}>
                    {userId === movie._ownerId
                    ? 
                    ( 
                    <>
                    <Link to={`/catalog/${movieId}/edit`} className={styles.btnEdit}>Edit</Link>
                    <Link onClick={movieDeleteClickHandler} className={styles.btnDelete}>Delete</Link>
                    </> 
                    )
                    : 
                    null
                    }
       
                </div>
            </div>
        </div>
    </div>

<MovieComments  comments={optimisticComments}/>

<CreateComment 
email={email}
movieId={movieId}
onCreate={onCreateCommentHandler}
/>
</>
    )
}