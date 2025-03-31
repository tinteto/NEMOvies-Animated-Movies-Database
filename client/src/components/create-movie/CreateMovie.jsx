import { Link, useNavigate } from 'react-router';
import { useCreateMovie } from '../../apiHooks/movieApiHooks';
import { toast } from 'react-toastify';
import styles from './CreateMovie.module.css'



export default function CreateMovie() {
const redirectTo = useNavigate();
const { createMovie } = useCreateMovie();

//взимаме данните от формата чрез formData и подаваме фунцията onSubmit на формата
const onSubmit = async (formData) => {
const movieData = Object.fromEntries(formData);

if( movieData.title === '' || 
    movieData.releaseDate === '' || 
    movieData.director === '' || 
    movieData.img === '' || 
    movieData.description === '') {
    toast.warning('Missing fields!');
    return;
}

try {
const createdMovieData = await createMovie(movieData);
toast.success('Movie created successfully!');

redirectTo('/catalog');

} catch (error) {
toast.error(error.message); //грешката, която идва от сървъра
}
};


return(
<>
<div className={styles.container}>

    <form action={onSubmit}>
    <div className="title">
        <label htmlFor="title">Movie Title:</label>
        <input type="text"  id="title" name="title" placeholder="Enter movie title..." />
    </div>
    <div className="releaseDate">
        <label htmlFor="releaseDate">Release Date:</label>
        <input type="text"  id="releaseDate" name="releaseDate" placeholder="Enter release date..." />
    </div>
    <div className="creator">
        <label htmlFor="creators">Creators:</label>
        <input type="text"  id="creators" name="creators" placeholder="Enter creators' names..." />
    </div>

    <div className="stars">
        <label htmlFor="creator">Stars:</label>
        <input type="text"  id="stars" name="stars" placeholder="Enter cast's names..." />
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

    <div className="addMovieButtons">
        <button type="submit" className={styles.create}>Add Movie</button>
        <Link to={`/catalog`} className={styles.goBack}>Go Back</Link>
    </div>

    </form>
</div>
</>
    )
}