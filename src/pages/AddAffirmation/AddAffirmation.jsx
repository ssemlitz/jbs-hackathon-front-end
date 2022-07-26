import AffirmationForm from "../../components/AffirmationForm/AffirmationForm";
import styles from './AddAffirmation.module.css'
import { useState, useEffect } from "react";
import * as profileService from '../../services/profileService'
import { useParams } from "react-router-dom";

const AddAffirmation = ( { user }) => {
  const [profile, setProfile] = useState()
  const { id } = useParams()



  useEffect(() => {
    const fetchProfile = async () => {
      const profileData = await profileService.show(id)
      setProfile(profileData)
    }
    fetchProfile()
  }, [id])

  return (
    <div className={styles.affirmationBg}>
      <div className={styles.affirmationHeaderDiv}>
        <h1 className={styles.h1}>You're doing great.</h1>
      </div>
      <AffirmationForm 
        profile={profile}
        />
      <div className={styles.flowerDiv}>
        <img
          className={styles.flowerImg}
          src="../../public/flower-aff-bg.png"
          alt="Img of Affirmation Flower"
        />
      </div>
    </div>
  );
};

export default AddAffirmation
