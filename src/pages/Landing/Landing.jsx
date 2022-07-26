import styles from './Landing.module.css'

const Landing = ({ user }) => {
  return (
    <div className={styles.landingBg}>
      <div className={styles.flowerLandDiv}>
        <img className={styles.flowerLandImg} src="../../public/landing-flower-bg.png" alt="Landing Page Flower" />
      </div>
      <div className={styles.landingTextDiv}>
        <div className={styles.h1Div}>
          <h1 className={styles.h1}>re/frame</h1>
        </div>
        <div className={styles.subtextDiv}>
          <h3 className={styles.h3}>grow with intentional gratitude</h3>
          <h4 className={styles.h4}>based on groundbreaking study from Duke University</h4>
        </div>
      </div>
    </div>
  )
}

export default Landing
