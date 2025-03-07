//TODO: change html and class
import styles from './Create.module.css'

export default function Create() {
    return(
        <>
        <div className={styles.container}>

        <form>
    <div className="recipeName">
        <label for="name">Name:</label>
        <input type="text"  name="name" placeholder="Enter name..." />
    </div>

    <div className="img">
        <label>Image: <input type="text" name="img" placeholder="Image URL" /></label>
    </div>
 

    <div className="ingredients">
        <label for="ingredients">Ingredients:</label>
        <textarea 
        type="text" 
        name="ingredients" 
        id="ingredients" 
        placeholder="Enter all info required..."
        rows="5"
        ></textarea>
    </div>

    <div className="steps">
        <label for="steps">Instructions:</label>
       <textarea 
       type="text" 
       name="steps" 
       id="steps" 
       rows="5" 
       placeholder="Enter all info required..."
       ></textarea>
    </div>

    <div className="create-recipe-buttons">
        <button type="submit" className="create">Create item</button>
        <button className="cancel">Cancel</button>
    </div>

        </form>
        </div>
        </>
    )
}