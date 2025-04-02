export default function CreateComment( { email, onCreate }) {

    return (
        <>
        {email 
        ?
        <div className="addComment">
        <form className="commentForm" action={onCreate}>
          <textarea type="text" name="comment" id="comment" cols="15" rows="5" placeholder="Add review here..."></textarea>
          <button className="addcommenBtn">Add Review</button>
        </form>
        </div> 
        : 
        null
        }
         
        </>
    )
}