export default function PageNotFound () {
    return (
        <>
    <div className="error-container">
        <h1>404</h1>
        <p>Oops! The page you're looking for can't be found.</p>
        <a className="home-link" href="/home">Go to Homepage</a>
    </div>
        </>
    )
}