import { useState } from 'react'
import styles from './CreateComment.module.css'

export default function CreateComment( { email, onCreate }) {
const [isToggled, setIsToggled] = useState(false);

const handleToggle = () => {
  setIsToggled(!isToggled);
};


    return (
        <>
        {email 
        ?
        <div className={styles.addComment}>
          <button className={styles.onToggle} onClick={handleToggle}>
          {isToggled
          ? 'Add Review'
          : 'Add Review' }

          </button>

      {isToggled &&     
      <form className={styles.commentForm} action={onCreate}>
      <textarea type="text" name="comment" id="comment" cols="15" rows="5" placeholder="Add review here..."></textarea>
      <button className={styles.addcommenBtn}>Add Review</button>
      </form>
      }
      </div> 
        : 
        null
        }
         
        </>
    )
}