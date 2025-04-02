export default function MovieComments ( { comments }) {
console.log(comments);

return (
<>
<div className="commentsSection">
<h4>User Reviews</h4>

<ul>
    {comments.length > 0
    ? comments.map(comment => (
        <li key={comment._id} className="comment" >
          <p> {comment.author.email}: {comment.comment}</p>  
        </li>
    ))

    : <p className="noComments">No reviews yet!</p>
    }
</ul>
</div>
</>
    );
}