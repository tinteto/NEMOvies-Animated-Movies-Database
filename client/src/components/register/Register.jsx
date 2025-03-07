export default function Register() {
    return (
    <>
    <div className="registerContainer">

        <form>
             <div className="container">
             <h1>Sign Up</h1>
             <p className="fillIn">Please fill in this form to create an account.</p>
             <hr/>
  

             <label for="username"><b>Username</b></label>
             <input type="text" placeholder="Enter Username" name="name" />
   

 

             <label for="email"><b>Email</b></label>
             <input type="text" placeholder="Enter Email" name="email" />


             <label for="psw"><b>Password</b></label>
             <input type="password" placeholder="Enter Password" name="psw" />


             <label for="psw-repeat"><b>Repeat Password</b></label>
             <input type="password" placeholder="Repeat Password" name="psw-repeat" />


             <div className="clearfix">
                <button type="submit" className="signupbtn">Sign Up</button>
             </div>

             <p className="signInHere">You already have an account? <a href="/auth/login">Sign in here!</a></p>
             </div>
        </form>
    </div>
    </>
    )
}