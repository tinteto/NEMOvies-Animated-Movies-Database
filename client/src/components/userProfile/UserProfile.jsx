import { useContext } from 'react'
import styles from './UserProfile.module.css'
import { UserContext } from '../../contexts/userContext'
import { Link } from 'react-router';
import { useUserProfile } from '../../apiHooks/authApiHooks';

export default function UserProfile() {
const { userProfile } = useUserProfile();

    return (
        <>        
<div className={styles.profileContainer}>
    <div className={styles.profileCard}>
        <img src="./../../../assets/rachel-kelli-MLhzDGWnKPk-unsplash.jpg" alt="ProfilePicture" />
        <p>Name: </p>
        <h2>{userProfile.username}</h2>
        <p>Contact me here:</p>
        <h3>{userProfile.email}</h3>

     <Link to={`/my-profile/edit`} className={styles.editProfileBtn}>Edit profile</Link>
    </div>
</div>
        </>
    )
}