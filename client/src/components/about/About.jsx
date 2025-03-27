//TODO: change images and text
import styles from './About.module.css'

export default function About() {
    return (
        <>
  <div className={styles.aboutSection}>
    <h1>Some text here</h1>
    <p>Some text here </p>
    <p>Some text here</p>
  </div>
  
  <div className={styles.aboutRow}>
    <div className={styles.aboutColumn}>
      <div className={styles.aboutCard}>
        <img src="./../../assets/caju-gomes-QDq3YliZg48-unsplash.jpg" alt="teamMemberPhoto" />
        <div className={styles.aboutContainer}>
          <h2>Radostina Georgieva</h2>
          <p className={styles.title}>Founder</p>
          <p className={styles.keenEye}>Some text here</p>
          <p className={styles.email}>radostina@example.com</p>
        </div>
      </div>
    </div>
  
    <div className={styles.aboutColumn}>
      <div className={styles.aboutCard}>
        <img src="./../../assets/s-l-M3VeZnz3cLQ-unsplash.jpg" alt="teamMemberPhoto" />
        <div className={styles.aboutContainer}>
          <h2>Dimitar Georgiev</h2>
          <p className={styles.title}>Designer</p>
          <p className={styles.keenEye}>Some text here</p>
          <p className={styles.email}>dimitar@example.com</p>
        </div>
      </div>
    </div>
  </div>
        </>
    )
}



