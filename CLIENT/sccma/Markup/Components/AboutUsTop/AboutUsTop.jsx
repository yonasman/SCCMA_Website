import styles from './aboutUsTop.module.css'
import {Link} from 'react-router-dom'
import image from '../../../src/assets/images/girl-img.jpg'

function AboutUsTop() {
  return (
    <>
        <div className={styles.aboutUsTop_container}>
            <div className={styles.aboutText_container}>
                    <h2>Welcome to Sara Cannizzaro Child Minders Association(SCCMA)</h2>
                    <p>SCCMA is dedicated to empowering communities through compassionate outreach, innovative programs, and sustainable solutions. We believe in creating a positive impact by addressing the needs of those we serve, fostering a spirit of collaboration, and inspiring hope for a brighter future.</p>
                    <div className={styles.donate_btn}>
                        <Link to='/donate'>Donate</Link>
                    </div>
            </div>
            <div className={styles.img_container}>
                <img src={image} alt="" />
                <div className={styles.circle_one}></div>
                <div className={styles.circle_two}></div>
                <div className={styles.circle_three}></div>
                <div className={styles.circle_four}></div>
            </div>
            <div>

            </div>
        </div>
    </>
  )
}

export default AboutUsTop
