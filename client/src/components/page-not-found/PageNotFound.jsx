//TODO: change colors and eventually add image
import styles from './PageNotFound.module.css'
import { Link } from "react-router";

export default function PageNotFound () {
    return (
        <>
    <div className={styles.errorContainer}>
        <h1>404</h1>
        <p>Sorry! We are having troubles Finding Nemo! Please try again later or search another adventure!</p>
        <Link className={styles.homeLink} to="/">Go to Homepage</Link>
    </div>
        </>
    )
}