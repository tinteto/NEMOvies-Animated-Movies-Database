//TODO: change colors and eventually add image - @InsideTheMagic source for the image
import styles from './PageNotFound.module.css'
import { Link } from "react-router";

export default function PageNotFound () {
    return (
        <>
    <div className={styles.errorContainer}>
  
        <div className={styles.errorImage}>
        <img src="\images\E2bge_2XwAA7ef9.png" alt="" />
        </div>

        <div className={styles.errorMessage}>
        <h1>404</h1>
        <p>Sorry! We are having troubles <strong>Finding Nemo</strong>! Please try again later or search another adventure!</p>
        <Link className={styles.homeLink} to="/">Go to Homepage</Link>
        </div>
    </div>
 
        </>
    )
}