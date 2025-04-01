import { useParams } from "react-router";
import { useOneMovie } from "../../apiHooks/movieApiHooks";
import { toast } from "react-toastify";
import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";

export default function CreateComment() {
const { movieId } = useParams();
const { email } = useContext(UserContext);
const { postComment } = useOneMovie(movieId);

    const onCreateComment = async (formData) => {
        const commentData = Object.fromEntries(formData);
    
    
        if(commentData.commentContent === '') {
            toast.warning('Missing fields!');
            return;
        }

        try {
        await postComment(movieId, commentData);
        toast.success('Comment created successfully!');

        //TODO redirect or something else
        } catch (error) {
        toast.error(error.message); 
        }
        
    };

    return (
        <>
        {email
        ?
             <div className="addComment">
             <form action={onCreateComment} className="commentForm">
               <textarea type="text" name="commentContent" id="comment" cols="15" rows="5" placeholder="Add review here..."></textarea>
               <button className="addcommenBtn">Add Review</button>
             </form>
             </div> 
        :
        null
        }
        </>
    )
}