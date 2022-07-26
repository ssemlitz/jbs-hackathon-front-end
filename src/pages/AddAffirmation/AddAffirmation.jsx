import FormImg from '../../assests/flower-aff-bg.png'
import styles from './AddAffirmation.module.css'

const AddAffirmation = () => {
  return (
    <div className={styles.affirmationBg}>
      <div className={styles.affirmationHeaderDiv}>
        <h1 className={styles.h1}>You're doing great.</h1>
      </div>
      <div className={styles.formBodyDiv}>
        <form
          autoComplete="off"
          ref={formElement}
          onSubmit={handleSubmit}
          className={styles.formBody}
        >
          <label className={styles.inputLabel} htmlFor="affirmation-input">
            Three things you're thankful for
          </label>
          <input type="text" className={styles.inputContainer} required />
          <input type="text" className={styles.inputContainer} required />
          <input type="text" className={styles.inputContainer} required />

          <label className={styles.inputLabel} htmlFor="affirmation-input">
            One thing you did well today
          </label>
          <input type="text" className={styles.inputContainer2} required />

          <label className={styles.inputLabel} htmlFor="affirmation-input">
            One thing you like about yourself
          </label>
          <input type="text" className={styles.inputContainer2} required />
        </form>
        <button type="submit" className={styles.button-17}>SUBMIT</button>
      </div>
      <div className={styles.flowerDiv}>
        <img
          className={styles.flowerImg}
          src={ FormImg }
          alt="Img of Affirmation Flower"
        />
      </div>
    </div>
  );
};

export default AddAffirmation
