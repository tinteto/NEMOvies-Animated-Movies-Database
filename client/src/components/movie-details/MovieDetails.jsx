import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router';
import { UserContext } from '../../contexts/userContext';
import { useDeleteMovie, useOneMovie } from '../../apiHooks/movieApiHooks';
import styles from './MovieDetails.module.css';


export default function MovieDetails() {
    const redirectTo = useNavigate();
    const { movieId } = useParams();
    const { movie } = useOneMovie(movieId);
    const { _id: userId } = useContext(UserContext);
    
   // const { email } = useContext(UserContext); //взимаме имейла от спреднатата authData, който ще ползваме по-късно за коментарите
    const { deleteMovie } = useDeleteMovie();

    const movieDeleteClickHandler = async () => {
    const isApproved = confirm(`Are you sure you want to delete ${movie.title} movie?`);

    if(!isApproved) {
        return;
    }

    await deleteMovie(movieId);

    redirectTo('/catalog');
    }


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
        </>
    )
}