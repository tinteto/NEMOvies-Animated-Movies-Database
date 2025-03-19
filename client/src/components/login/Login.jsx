//TODO: to change Images, colors
import styles from './Login.module.css'
import { Link, useNavigate } from "react-router";
import { useActionState } from "react";

export default function Login({
  onLogin,
}) {

//const redirectTo = useNavigate();

const loginHandler = (prevousState, formData) => {
const values = Object.fromEntries(formData); // values = {email: 'radost@abv.bg', psw: '12345'}

onLogin(values.email);

//redirectTo('/catalog');

return values;

}

//на useActionState подаваме функцията, която искаме да се изпълни и initial state-а, който първоначално ще бъде формичка със празни полета
//отговорът ще бъде стейта на формата = values,
const [values, loginAction, isPending ] = useActionState(loginHandler, {email: '', psw: ''}); //useActionState(fn, initialState)

  

return (
    <>
    <div className={styles.loginContainer}>
        <form action={loginAction}>
          <div className={styles.imgcontainer}>
            <img src="./../../../assets/surja-sen-das-raj-KKwyJpbJyf8-unsplash.jpg" alt="Avatar" className="avatar"/>
          </div>
  
          <div className={styles.container}>
               <label htmlFor="email"><b>Email</b></label>
               <input type="text" placeholder="Enter Email" name="email" />

               <label htmlFor="psw"><b>Password</b></label>
               <input type="password" placeholder="Enter Password" name="psw" />
    
                <button className={styles.loginBtn} type="submit" disabled={isPending}>Login</button>

                <p className={styles.registerHere}>You don't have an account yet? <Link to="/register">Register here!</Link></p>
           </div>
        </form>
    </div>
    </>
    )
}