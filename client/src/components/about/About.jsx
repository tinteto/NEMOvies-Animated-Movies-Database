import styles from './About.module.css'

export default function About() {
    return (
        <>
  <div className={styles.aboutSection}>
    <h1>About us</h1>
    <h2>Hello little movie lover! Welcome to the vast world of animated adventures!</h2>
    <p>We know <strong>Nemo and Dory, Elsa and Anna, Timon and Pumba</strong> and many more are your favourite characters in the world!</p>
    <p>We are here to help you get to know their story better!</p>
    <p><strong>Still, don't forget the games with friends!</strong></p>
  </div>
  
  <div className={styles.aboutRow}>
    <div className={styles.aboutColumn}>
      <div className={styles.aboutCard}>
        <img src="\images\david-clode-zo9eZVVLIWk-unsplash.jpg" alt="teamMemberPhoto" />
        <div className={styles.aboutContainer}>
          <h2>Radostina Georgieva</h2>
          <p className={styles.title}>Founder</p>
          <p className={styles.keenEye}>Just a grown-up kids' movies enthusiast!</p>
          <p className={styles.email}>radostina@example.com</p>
        </div>
      </div>
    </div>
  
    <div className={styles.aboutColumn}>
      <div className={styles.aboutCard}>
        <img src="\images\sebastian-pena-lambarri-poly_hmhwJs-unsplash.jpg" alt="teamMemberPhoto" />
        <div className={styles.aboutContainer}>
          <h2>Dimitar Georgiev</h2>
          <p className={styles.title}>Designer</p>
          <p className={styles.keenEye}>I am just here to help!</p>
          <p className={styles.email}>dimitar@example.com</p>
        </div>
      </div>
    </div>
  </div>
        </>
    )
}



