import { Link } from "react-router";
import styles from './Home.module.css';

export default function Home() {
    return (
        <>
  <div className={styles.container}>
  
  <div className={styles.welcome}>
  
    <div className={styles.headings}>
      <h3>Welcome to My App  <Link to="/about"> Read more ➪ </Link></h3>
      <h1>Some text here</h1>
      <p>Some text here </p>
  

      <div className={styles.guest}>
        <ul>
          <li>
          <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </div>

    </div>  
  
    </div>
  </div>
  
        </>
    )
}