//TODO: change colors

import { Link } from "react-router";

export default function PageNotFound () {
    return (
        <>
    <div className="error-container">
        <h1>404</h1>
        <p>Oops! The page you're looking for can't be found.</p>
        <Link className="home-link" to="/">Go to Homepage</Link>
    </div>
        </>
    )
}