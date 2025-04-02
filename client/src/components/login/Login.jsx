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
const values = Object.fromEntries(formData); // values = {email: 'radost@abv.bg', psw: '12345'}

try {
const authData = await login(values.email, values.password); //{email: 'admin@abv.bg', username: 'Admin', _id: '60f0cf0b-34b0-4abd-9769-8c42f830dffc', accessToken: '07e04e59ed34d2ebe148be6488de3542a7efbf82bdc69f68ad2a2ff68a510fb1'}

userLoginHandler(authData); //при логване запазваме цялата информация, която ни връща сървъра

toast.success('Successful login!');

redirectTo('/');

} catch (error) {
toast.error(error.message);
}
//return values;
}

//на useActionState подаваме функцията, която искаме да се изпълни и initial state-а, който първоначално ще бъде формичка със празни полета
//отговорът ще бъде стейта на формата = values,
const [values, loginAction, isPending ] = useActionState(loginHandler, {email: '', password: ''}); //useActionState(fn, initialState)

  

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