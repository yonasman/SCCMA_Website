import styles from './volunteer.module.css'
import {Link} from 'react-router-dom'
function Volunteer() {
  return (
    <>
      <div className={styles.volunteer_container}>
            
            <h2>Become A Volunteer</h2>
            <p>Ready to make a meaningful impact? Join SCCMA as a volunteer and help transform the lives of children and families in Ethiopia.</p>
            <input type="text" placeholder='Enter Your Email'/>
            <Link to='#' className={styles.subscribe_btn}>Subscribe</Link>
      </div>
    </>
  )
}

export default Volunteer
