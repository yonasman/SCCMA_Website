import styles from './staffs.module.css'
import staffImage from '../../../src/assets/images/event1.jpg'

function Staff() {
  return (
    <>
        <div className={styles.staff_container}>
                <h2>Meet the Experts Behind SCCMA: Our Dedicated and Passionate Team</h2>
                <div className={styles.staff_image_container}>
                    <img src={staffImage} alt="sccma staff images" />
                </div>
        </div>
    </>
  )
}

export default Staff
