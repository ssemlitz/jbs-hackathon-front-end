import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import styles from './Profile.module.css'
import * as profileService from '../../services/profileService'
import AffirmationCard from '../../components/AffirmationCard/AffirmationCard'



const Profile = ({ user }) => {
  const { id } = useParams()
  const [profile, setProfile] = useState()


  useEffect(() => {
    const fetchProfile = async () => {
      const profileData = await profileService.show(id)
      setProfile(profileData)
    }
    fetchProfile()
  }, [id])

  const handleDeleteAffirmation = async (affirmationId) => {
    console.log('affirmationId', affirmationId)
    const updatedProfile = await profileService.deleteOne(affirmationId)
    setProfile(updatedProfile)
  }


  return (
    <>
      <main>
        <div className={styles.profilePage}>
          <div className={styles.profileGreeting}>
            <h4 className={styles.profNameh4}>{profile?.name}</h4>
          </div>
          <div className={styles.profilePageContents}>
            {profile?.userActivity?.length ?
              <>
                {profile?.affirmations?.map(affirmation =>
                  <AffirmationCard
                    key={affirmation._id}
                    affirmation={affirmation}
                    profile={profile}
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
      </main>


    </>
  );
}

export default Profile;