import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import styles from './Profile.module.css'
import * as profileService from '../../services/profileService'
import AffirmationCard from '../../components/AffirmationCard/AffirmationCard'
import { Link } from "react-router-dom"
import flowerPic from '../../assets/flower-aff-bg.png'




const Profile = ({ user }) => {
  const { id } = useParams()
  const [profile, setProfile] = useState()
  const [formData, setFormData] = useState({
    thankful1: '',
    thankful2: '',
    thankful3: '',
    thingsIDidWell: '',
    selfComp: '',
  })



  useEffect(() => {
    const fetchProfile = async () => {
      const profileData = await profileService.show(id)
      setProfile(profileData)
    }
    fetchProfile()
  }, [id])

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


  const handleDeleteAffirmation = async (affirmationId) => {
    console.log('affirmationId', affirmationId)
    const updatedProfile = await profileService.deleteOne(affirmationId)
    setProfile(updatedProfile)
  }


  return (
    <>
      <main>
        <div className={styles.profilePage}>


          {/* <div className={styles.profileGreeting}>
            <h4 className={styles.profNameh4}>{profile?.name}</h4>
          </div> */}
          <div className={styles.profilePageContents}>
          <div className={styles.flowerForm}>


            {/* affirmation form */}

            <div className={styles.formBodyDiv}>
              <form
                className={styles.formBody}
                autoComplete="off"
                onSubmit={handleSubmit}>
                <div className={styles.inputContainer}>
                  <label htmlFor="thankful">Three good things about today</label>
                  <input
                    type="text"
                    className="thankful-1"
                    id="thankful-1"
                    name="thankful1"
                    value={formData.thankful1}
                    onChange={handleChange}
                    placeholder="First good thing..."
                    required
                  />
                  <input
                    type="text"
                    className="thankful-2"
                    id="thankful-2"
                    name="thankful2"
                    value={formData.thankful2}
                    onChange={handleChange}
                    placeholder="Second good thing..."
                    required
                  />
                  <input
                    type="text"
                    className="thankful-3"
                    id="thankful-3"
                    name="thankful3"
                    value={formData.thankful3}
                    onChange={handleChange}
                    placeholder="Third good thing..."
                    required
                  />
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
                    placeholder="Something I did well..."
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
                    placeholder="I like..."
                    required
                  />
                </div>
                <div className={styles.inputContainer}>
                  <button
                    className={styles.button17}
                    type="submit">
                    Submit
                  </button>
                </div>
              </form>
            </div>
            <div className={styles.flowerImgDiv}>
              <img className={styles.flowerProfImg} src={flowerPic} alt="flowerpic" />
            </div>
            </div>






            <div className={styles.affCardDiv}>
          {profile?.affirmations?.length ?
              <>
                {profile?.affirmations?.map(affirmation =>
                  <AffirmationCard
                    key={affirmation._id}
                    affirmation={affirmation}
                    profile={user?.profile}
                    user={user}
                    handleDeleteAffirmation={handleDeleteAffirmation}
                  />
                )}
              </>
              :
              <>
                <p>Affirmations you create will appear here</p>
              </>
            }
          </div>

          </div>
          
        </div>
      </main>


    </>
  );
}

export default Profile;