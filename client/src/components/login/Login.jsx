//TODO: to change Images, colors
import { Link } from "react-router";
import styles from './Login.module.css'

export default function Login() {
    return (
    <>
    <div className={styles.loginContainer}>
        <form>
          <div className={styles.imgcontainer}>
            <img src="./../../../assets/surja-sen-das-raj-KKwyJpbJyf8-unsplash.jpg" alt="Avatar" className="avatar"/>
          </div>
  
          <div className={styles.container}>
               <label for="email"><b>Email</b></label>
               <input type="text" placeholder="Enter Email" name="email" />

               <label for="psw"><b>Password</b></label>
               <input type="password" placeholder="Enter Password" name="psw" />
    
                <button type="submit">Login</button>

                <p className={styles.registerHere}>You don't have an account yet? <Link to="/register">Register here!</Link></p>
           </div>
        </form>
    </div>
    </>
    )
}