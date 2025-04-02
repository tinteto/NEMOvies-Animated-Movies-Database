import styles from './PageNotFound.module.css'
import { Link } from "react-router";

export default function PageNotFound () {
    return (
        <>
    <div className={styles.errorContainer}>
  
        <div className={styles.errorImage}>
        <img src="\images\brian-mcgowan-857R--_CvP0-unsplash.jpg" alt="" />
        </div>

        <div className={styles.errorMessage}>
        <h1>404</h1>
        <p>Sorry! "There seems to be no sign of intelligent life anywhere"! Please try again later!</p>
        <Link className={styles.homeLink} to="/">Go to Homepage</Link>
        </div>
    </div>
 
        </>
    )
}