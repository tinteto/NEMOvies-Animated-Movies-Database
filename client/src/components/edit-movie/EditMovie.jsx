//TODO: try-catch
import styles from './EditMovie.module.css'

import { useNavigate, useParams } from 'react-router'
import { useEditMovie, useOneMovie } from '../../apiHooks/movieApiHooks'

export default function EditMovie() {
const redirectTo = useNavigate();
const { movieId } = useParams();
const { movie } = useOneMovie(movieId);
const { editMovie } = useEditMovie();


const onFormEdit = async (formData) => {
    //при попълване на ъпдейтнатите данни ги вземаме и ги пращаме на сървъра
    const movieData = Object.fromEntries(formData);

    await editMovie(movieId, movieData);

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