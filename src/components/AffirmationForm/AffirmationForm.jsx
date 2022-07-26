import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './AffirmationForm.module.css'
import * as authService from '../../services/authService'
import * as profileService from '../../services/profileService'

const AffirmationForm = (props, { user }) => {
  const [profile, setProfile] = useState()
  const [formData, setFormData] = useState({
    thankful1: '',
    thankful2: '',
    thankful3: '',
    didWell: '',
    iLike: '',
  })



  const navigate = useNavigate()

  const handleChange = e => {
    props.updateMessage('')
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async evt => {
    evt.preventDefault()
    try {
      await authService.login(formData)
      props.handleSignupOrLogin()
      navigate('/')
      handleAddAffirmation(formData)
      setFormData({
        thankful1: '',
        thankful2: '',
        thankful3: '',
        didWell: '',
        iLike: '',
      })
    } catch (err) {
      props.updateMessage(err.message)
    }
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
          <label htmlFor="didWell" className={styles.label}>One thing you did well today</label>
          <input
            type="text"
            autoComplete="off"
            id="didwell"
            value={formData.didWell}
            name="didWell"
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="iLike" className={styles.label}>One thing you like about yourself</label>
          <input
            type="text"
            autoComplete="off"
            id="iLike"
            value={formData.iLike}
            name="iLike"
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.buttonsDiv}>
          <button
            className={styles.button - 17}
            type="submit">
            Submit
          </button>
          <Link to="/">
            <button>Cancel</button>
          </Link>
        </div>
      </form>
    </div>
  )
}

export default AffirmationForm
