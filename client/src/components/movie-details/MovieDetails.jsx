import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import apiService from '../../services/apiService';
import styles from './MovieDetails.module.css';

export default function MovieDetails() {
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
                    <button className="btn edit">Edit</button>
                    <button className="btn delete">Delete</button>
                </div>
            </div>
        </div>
    </div>
        </>
    )
}