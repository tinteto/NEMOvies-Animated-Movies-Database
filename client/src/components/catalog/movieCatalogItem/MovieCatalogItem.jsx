//!Do not forget to pass params as desctuctured object
import { Link } from "react-router";
import styles from './MovieCatalogItem.module.css'


export default function MovieCatalogItem({_id, title, releaseDate, img}) {
    return (
    <> 
    <div className={styles.movieCard}>
        <img className={styles.imgCard} src={img} alt="MovieImg" />
        <h4 className={styles.title}>{title}</h4>
        <h4 className={styles.releaseDate}>{releaseDate}</h4>
        <Link className={styles.cardButton} to={`/catalog/${_id}/details`}>Movie Details</Link>
    </div>
</>
    )
}