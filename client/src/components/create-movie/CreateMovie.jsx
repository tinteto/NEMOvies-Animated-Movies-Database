//TODO: try-catch
import { useNavigate } from 'react-router';
import apiService from '../../services/apiService';
import styles from './CreateMovie.module.css'

export default function CreateMovie() {
// redirect to page
const redirectTo = useNavigate();

//взимаме данните от формата чрез formData и подаваме фунцията onSubmit на формата
const onSubmit = async (formData) => {
const movieData = Object.fromEntries(formData);
console.log(movieData);

//изпращаме взетите данни до request функцията и тя прави заявка до сървъра
await apiService.createMovie(movieData);

redirectTo('/catalog');
}

    return(
<>
<div className={styles.container}>

    <form action={onSubmit}>
    <div className="title">
        <label htmlFor="title">Title:</label>
        <input type="text"  id="title" name="title" placeholder="Enter title..." />
    </div>

    <div className="img">
        <label>Image: <input type="text" id="img" name="img" placeholder="Image URL" /></label>
    </div>
 

    <div className="description">
        <label htmlFor="description">Description:</label>
        <textarea 
        type="text" 
        name="description" 
        id="description" 
        placeholder="Enter description..."
        rows="5"
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

    <div className="addMovieButtons">
        <button type="submit" className="create">Add Movie</button>
        <button className="cancel">Cancel</button>
    </div>

    </form>
</div>
</>
    )
}