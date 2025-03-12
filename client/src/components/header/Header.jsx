import { Link } from "react-router";
import styles from './Header.module.css';


export default function Header() {
    return (
        <>
<header className={styles.appHeader}>
    <div className={styles.appLogo}>
        <Link to="/">App Name</Link>
    </div>
    <nav>
        <ul>
        <div className={styles.user}>
            <div className={styles.home}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/catalog">Catalog</Link></li>
            <li><Link to="/create-movie">Create</Link></li>
            <li><Link to="/about">About us</Link></li>
           </div>
           
           <div className={styles.profile}>
            <li ><Link to="#">Someone's profile</Link></li>
            <li ><Link to="#">Logout</Link></li>
           </div>
        </div> 


        <div className={styles.guest}>
            <li><Link to="/login">Login</Link></li> 
            <li><Link to="/register">Register</Link></li>  
        </div>       
        </ul>
    </nav>
</header>

        </>
    )
}