import styles from './MovieComments.module.css'

export default function MovieComments ( { comments }) {


return (
<>
<div className={styles.commentsShow}>
<h4>User Reviews: {comments.length}</h4>

<ul>
    {comments.length > 0
    ? comments.map(comment => (
        <li key={comment._id} className={styles.comment} >
          <p> <strong>{comment.author.email}</strong>: {comment.comment}</p>  
        </li>
    ))

    : <p className={styles.noComments}>No reviews yet!</p>
    }
</ul>
</div>
</>
    );
}