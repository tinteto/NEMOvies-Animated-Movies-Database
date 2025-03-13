//TODO: try-catch
import { useNavigate, useParams } from 'react-router'
import styles from './EditMovie.module.css'
import apiService from '../../services/apiService';
import { useEffect, useState } from 'react';

export default function EditMovie() {
const [movie, setMovie] = useState({});
//взимаме id-to от url-a
const { movieId } = useParams();
const redirectTo = useNavigate();

//правим заявка за конкретния филм и го запазваме във стейта, от стейта въвеждаме във формата препопулираните данни
useEffect(() => {
apiService.getOneMovieById(movieId)
.then(result => {
    setMovie(result)
}
)}, [movieId]);


const onFormEdit = async (formData) => {
    //при попълване на ъпдейтнатите данни ги вземаме и ги пращаме на сървъра
    const movieData = Object.fromEntries(formData);

    await apiService.editMovieById(movieId, movieData);

    redirectTo(`/catalog/${movieId}/details`);
}


    return(
<>
<div className={styles.container}>

    <form action={onFormEdit}>
    <div className="title">
        <label htmlFor="title">Title:</label>
        <input type="text"  id="title" name="title" defaultValue={movie.title}/>
    </div>

    <div className="img">
        <label>Image: <input type="text" id="img" name="img" defaultValue={movie.img} /></label>
    </div>
 

    <div className="description">
        <label htmlFor="description">Description:</label>
        <textarea 
        type="text" 
        name="description" 
        id="description" 
        rows="5"
        defaultValue={movie.description}
        ></textarea>
    </div>

   {/*  <div className="steps">
        <label htmlFor="steps">Instructions:</label>
       <textarea 
       type="text" 
       name="steps" 
       id="steps" 
       rows="5" 
       placeholder="Enter all info required..."
       ></textarea>
    </div> */}

    <div className="editMovieButtons">
        <button  type="submit" className="edit">Edit Movie</button> 
        <button className="cancel">Cancel</button>
    </div>

    </form>
</div>
</>
    )
}