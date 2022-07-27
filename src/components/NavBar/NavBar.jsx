import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'

const NavBar = ({ user, handleLogout, profile }) => {
  return (
    <>
      <header className='App-header'>
        {user ?
          <nav>
            <Link className={styles.navLink} to="/">home</Link>
            <Link className={styles.navLink}  to={`/profiles/${user.profile}`}>profile</Link>
            <Link className={styles.navLink}  to="" onClick={handleLogout}>log out</Link>
            <Link className={styles.navLink}  to="/changePassword">change password</Link>
          </nav>
        :
        <>
          <nav>
            <Link className={styles.navLink}  to="/login">log in</Link>
            <Link className={styles.navLink}  to="/signup">sign up</Link>
          </nav>
        </>
        }
      </header>
    </>
  )
}

export default NavBar
