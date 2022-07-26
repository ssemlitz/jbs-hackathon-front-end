import { useState } from 'react'
import { Link} from 'react-router-dom'
import styles from './AffirmationForm.module.css'
import * as profileService from '../../services/profileService'

const AffirmationForm = (props, { user }) => {
  const [profile, setProfile] = useState()
  const [formData, setFormData] = useState({
    thankful1: '',
    thankful2: '',
    thankful3: '',
    thingsIDidWell: '',
    selfComp: '',
  })

  console.log(profile)


  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async evt => {
    evt.preventDefault()
    handleAddAffirmation(formData)
    setFormData({
      thankful1: '',
      thankful2: '',
      thankful3: '',
      thingsIDidWell: '',
      selfComp: '',
    })
  }


  const handleAddAffirmation = async (newAffirmationData) => {
    const updatedProfile = await profileService.create(newAffirmationData, user.profile)
    setProfile(updatedProfile)
  }



  return (
    <div className={styles.formBodyDiv}>
      <form
        className={styles.formBody}
        autoComplete="off"
        onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          <label htmlFor="thankful">Three things you're thankful for</label>
          <ol className={styles.orderedInput}>
            <input
              type="text"
              className="thankful-1"
              id="thankful-1"
              name="thankful1"
              value={formData.thankful1}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              className="thankful-2"
              id="thankful-2"
              name="thankful2"
              value={formData.thankful2}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              className="thankful-3"
              id="thankful-3"
              name="thankful3"
              value={formData.thankful3}
              onChange={handleChange}
              required
            />
          </ol>
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="thingsIDidWell" className={styles.label}>One thing you did well today</label>
          <input
            type="text"
            autoComplete="off"
            id="didwell"
            value={formData.thingsIDidWell}
            name="thingsIDidWell"
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="selfComp" className={styles.label}>One thing you like about yourself</label>
          <input
            type="text"
            autoComplete="off"
            id="selfComp"
            value={formData.selfComp}
            name="selfComp"
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.buttonsDiv}>
          <button
            className={styles.button17}
            type="submit">
            Submit
          </button>
          <Link to="/">
            <button className={styles.button17}>Cancel</button>
          </Link>
        </div>
      </form>
    </div>
  )
}

export default AffirmationForm
