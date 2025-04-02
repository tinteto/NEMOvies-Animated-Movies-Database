import { Link, useNavigate } from "react-router";
import styles from './Register.module.css'
import { useRegister } from "../../apiHooks/authApiHooks";
import { useActionState, useContext } from "react";
import { UserContext } from "../../contexts/userContext";
import { toast } from "react-toastify";

export default function Register() {
const redirectTo = useNavigate();
const  { register } = useRegister();
const { userLoginHandler } = useContext(UserContext);

const registerHandler = async (previousState, formData) => {
const values = Object.fromEntries(formData);
const repeatPassword = formData.get('password-repeat');


if(values.password !== repeatPassword) {
    toast.warning('Password and Repeat Password do not match!');
    return;  
}

try {
const authData = await register(values.email, values.username, values.password);
console.log(authData);

userLoginHandler(authData); 

toast.success('Successful register!');

redirectTo('/');

} catch (error) {
    toast.error(error.message);
}
};

const [values, registerAction, isPending] = useActionState(registerHandler, {email: '', password: ''});
    
return (
    <>
    <div className={styles.registerContainer}>

        <form action={registerAction}>
             <div className={styles.container}>
             <p className={styles.fillIn}>Please fill in this form to create an account.</p>
             <hr/>
  
             <label htmlFor="username"><b>Username</b></label>
             <input type="text" placeholder="Enter Username" name="username" />
   
             <label htmlFor="email"><b>Email</b></label>
             <input type="text" placeholder="Enter Email" name="email" />

             <label htmlFor="psw"><b>Password</b></label>
             <input type="password" placeholder="Enter Password" name="password" />

             <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
             <input type="password" placeholder="Repeat Password" name="password-repeat" />

             <div className="clearFix">
                <button type="submit" className={styles.registerBtn} disabled={isPending} >Register</button>
             </div>

             <p className={styles.signInHere}>You already have an account? <Link to="/login">Sign in here!</Link></p>
             </div>
        </form>
    </div>
    </>
    )
}