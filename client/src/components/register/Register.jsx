//TODO: change colors
import { Link } from "react-router";
import styles from './Register.module.css'

export default function Register() {
    return (
    <>
    <div className={styles.registerContainer}>

        <form>
             <div className={styles.container}>
             <h1>Sign Up</h1>
             <p className="fillIn">Please fill in this form to create an account.</p>
             <hr/>
  

             <label htmlFor="username"><b>Username</b></label>
             <input type="text" placeholder="Enter Username" name="name" />
   

 

             <label htmlFor="email"><b>Email</b></label>
             <input type="text" placeholder="Enter Email" name="email" />


             <label htmlFor="psw"><b>Password</b></label>
             <input type="password" placeholder="Enter Password" name="psw" />


             <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
             <input type="password" placeholder="Repeat Password" name="psw-repeat" />


             <div className={styles.clearfix}>
                <button type="submit" className="signupbtn">Sign Up</button>
             </div>

             <p className={styles.signInHere}>You already have an account? <Link to="/login">Sign in here!</Link></p>
             </div>
        </form>
    </div>
    </>
    )
}