import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router';
import { UserContext } from '../../contexts/userContext';
import { useDeleteMovie, useOneMovie } from '../../apiHooks/movieApiHooks';
import styles from './MovieDetails.module.css';


export default function MovieDetails() {
    const redirectTo = useNavigate();
    const { movieId } = useParams();
    const { movie } = useOneMovie(movieId);
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
        <div className="movieContainer">
        <div className="movieDetails">
            <img src={movie.img} alt="Movie Poster" />
            <div className="text">
                <h1>{movie.title}</h1>
                <p>{movie.description}</p>
                <p className="date">Release Date: {movie._createdOn}</p>
                
                <div className="btnContainer">
                    <Link to={`/catalog/${movieId}/edit`} className="btn edit">Edit</Link>
                    <button onClick={movieDeleteClickHandler} className="btn delete">Delete</button> {/* onClick={movieDeleteClickHandler} */}
                </div>
            </div>
        </div>
    </div>
        </>
    )
}