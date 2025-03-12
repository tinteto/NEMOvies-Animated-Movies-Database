//TODO: change colors
import styles from './PageNotFound.module.css'
import { Link } from "react-router";

export default function PageNotFound () {
    return (
        <>
    <div className={styles.errorContainer}>
        <h1>404</h1>
        <p>Oops! The page you're looking for can't be found.</p>
        <Link className={styles.homeLink} to="/">Go to Homepage</Link>
    </div>
        </>
    )
}