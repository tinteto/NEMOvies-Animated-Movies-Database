//TODO: to change Images, colors

import { Link } from "react-router";

export default function Login() {
    return (
    <>
    <div className="loginContainer">
        <form>
          <div className="imgcontainer">
            <img src="./../../../assets/surja-sen-das-raj-KKwyJpbJyf8-unsplash.jpg" alt="Avatar" className="avatar"/>
          </div>
  
          <div className="container">
               <label for="email"><b>Email</b></label>
               <input type="text" placeholder="Enter Email" name="email" />

               <label for="psw"><b>Password</b></label>
               <input type="password" placeholder="Enter Password" name="psw" />
    
                <button type="submit">Login</button>

                <p className="registerHere">You don't have an account yet? <Link to="/register">Register here!</Link></p>
           </div>
        </form>
    </div>
    </>
    )
}