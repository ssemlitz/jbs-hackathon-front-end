import styles from './Landing.module.css'
import LandingPic from '../../assets/landing-flower-bg.png'

const Landing = ({ user }) => {
  return (
    <div className={styles.landingBg}>
      <div className={styles.flowerLandDiv}>
        <img className={styles.flowerLandImg} src={ LandingPic } alt="Landing Page Flower" />
      </div>
      <div className={styles.landingTextDiv}>
        <div className={styles.h1Div}>
          <h1 className={styles.h1}>re/mind</h1>
        </div>
        <div className={styles.subtextDiv}>
          <h3 className={styles.h3}>grow with intentional gratitude</h3>
          <h4 className={styles.h4}><a href="https://today.duke.edu/2016/02/resilience" className={styles.dukeLink}>based on a groundbreaking study from Duke University</a></h4>
        </div>
      </div>
    </div>
  )
}

export default Landing
