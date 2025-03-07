import { Link } from "react-router";

export default function Home() {
    return (
        <>
        <div className="container">
  
  <div className="welcome">
  
    <div className="headings">
      <h3>Welcome to My App  <Link to="/about"> Read more ➪ </Link></h3>
      <h1>Some text here</h1>
      <p>Some text here </p>
  

      <div className="guest">
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