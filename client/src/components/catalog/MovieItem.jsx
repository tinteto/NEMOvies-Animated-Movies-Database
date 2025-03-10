import styles from './MovieItem.module.css'


export default function MovieItem(_id, title, description, img, _createdOn) {
    return (
    <> 
    <div className="itemCard" >
        <img className="imgCard" src={img} alt="ItemImg" />
        <h4>{title}</h4>
        <p className="date">{description}</p>
        <p><button className="cardButton" href="/">View Item</button></p> 
    </div>
    </>
    )
}