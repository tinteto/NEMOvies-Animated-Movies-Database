//TODO date transfrom
import { useParams } from "react-router"
import { useOneMovie } from "../../apiHooks/movieApiHooks";
import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";


export default function MovieComments () {
    const { movieId } = useParams();
    const { allComments } = useOneMovie(movieId);
    console.log(allComments);

 
    return (
        <>
<div className="commentsSection">
<h4>User Reviews</h4>
    {allComments.map(comment => (
  <div className="comment" key={comment._id}>
  <p>On {comment._createdOn} User review: {comment.commentContent}</p>
    
</div>
    ))}

    <div className="noComments">
        {allComments.length === 0 && <p className="noComments">No reviews yet!</p>}
    </div>
</div>
        </>
    )
}