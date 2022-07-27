import styles from './AffirmationCard.module.css'
import { Link } from 'react-router-dom'

const AffirmationCard = (props) => {
  
  return (
    <>
      <div className={styles.affirmationCardDiv}>
        <div className={styles.cardBodyDiv}>
          <div className={styles.thankfulDiv}>
            <div className={styles.labelDiv}>
              <h3 className={styles.h3}>Three things you're thankful for</h3>
            </div>
            <div className={styles.thankfulContentDiv}>
              <ol>
                <li>{props.affirmation.thankful1}</li>
                <li>{props.affirmation.thankful2}</li>
                <li>{props.affirmation.thankful3}</li>
              </ol>
            </div>
          </div>

          <div className={styles.didWellDiv}>
            <div className={styles.labelDiv}>
              <h3 className={styles.h3}>One thing you did well</h3>
            </div>
            <div className={styles.didWellContentDiv}>
              <h4 className={styles.h4}>{props.affirmation.thingsIDidWell}</h4>
            </div>
          </div>

          <div className={styles.selfCompDiv}>
            <div className={styles.labelDiv}>
              <h3 className={styles.h3}>One thing you like about yourself</h3>
            </div>
            <div className={styles.selfCompContentDiv}>
              <h4 className={styles.h4}>{props.affirmation.selfComp}</h4>
            </div>
          </div>

          <div className={styles.buttonHolder}>
            <button className={styles.button17} onClick={() => props.handleDeleteAffirmation(props.affirmation._id)}>Delete</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default AffirmationCard