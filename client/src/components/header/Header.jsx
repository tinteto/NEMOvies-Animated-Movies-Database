import { Link } from "react-router";

export default function Header() {
    return (
        <>
        <header class="app-header">
    <div class="app-logo">
        <Link to="/">App Name</Link>
    </div>
    <nav>
        <ul>
        <div class="user">
            <div class="home">
            <li><Link to="/">Home</Link></li>
            <li><Link to="#">Catalog</Link></li>
            <li><Link to="#">Create</Link></li>
            <li><Link to="/about">About us</Link></li>
           </div>
           
           <div class="profile">
            <li ><Link to="#">Someone's profile</Link></li>
            <li ><Link to="#">Logout</Link></li>
           </div>
        </div> 


        <div class="guest">
            <li><Link to="/login">Login</Link></li> 
            <li><Link to="/register">Register</Link></li>  
        </div>       
        </ul>
    </nav>
</header>

        </>
    )
}