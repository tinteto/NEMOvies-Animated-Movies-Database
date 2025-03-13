import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router';
import apiService from '../../services/apiService';
import styles from './MovieDetails.module.css';

export default function MovieDetails() {
    const redirectTo = useNavigate();
    //сетвам филма във стейта
    const [movie, setOneMovie] = useState({});
    //взимам си id-то от url-a
    const {movieId} = useParams();
 
    
    useEffect(() => {
        apiService.getOneMovieById(movieId)
        .then(result => {
            setOneMovie(result);
    });
    }, [movieId]);


    const movieDeleteClickHandler = async () => {
    await apiService.deleteMovieById(movieId);

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
                    <button  onClick={movieDeleteClickHandler} className="btn delete">Delete</button> {/* onClick={movieDeleteClickHandler} */}
                </div>
            </div>
        </div>
    </div>
        </>
    )
}