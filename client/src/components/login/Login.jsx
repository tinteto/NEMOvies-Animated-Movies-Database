import styles from './Login.module.css'
import { Link, useNavigate } from "react-router";
import { useActionState, useContext } from "react";
import { useLogin } from '../../apiHooks/authApiHooks';
import { UserContext } from '../../contexts/userContext';
import { toast } from 'react-toastify';

export default function Login() {
const redirectTo = useNavigate();
const { userLoginHandler } = useContext(UserContext);
const { login } = useLogin();

const loginHandler = async (prevousState, formData) => {
const values = Object.fromEntries(formData); 

try {
const authData = await login(values.email, values.password);

userLoginHandler(authData); 

toast.success('Successful login!');

redirectTo('/');

} catch (error) {
toast.error(error.message);
}
//return values;
}


const [values, loginAction, isPending ] = useActionState(loginHandler, {email: '', password: ''}); 

  

return (
    <>
    <div className={styles.loginContainer}>
        <form action={loginAction}>
          <div className={styles.imgContainer}>
            <img src="\images\james-a-molnar-AHq2twkynao-unsplash.jpg" alt="Avatar" className={styles.avatar}/>
          </div>
  
          <div className={styles.dataContainer}>
               <label htmlFor="email"><b>Email</b></label>
               <input type="text" placeholder="Enter Email" name="email" />

               <label htmlFor="psw"><b>Password</b></label>
               <input type="password" placeholder="Enter Password" name="password" />
    
                <button className={styles.loginBtn} type="submit" disabled={isPending}>Login</button>

                <p className={styles.registerHere}>You don't have an account yet? <Link to="/register">Register here!</Link></p>
           </div>
        </form>
    </div>
    </>
    )
}