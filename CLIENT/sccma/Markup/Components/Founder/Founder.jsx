import styles from './founder.module.css'
import founderImage from '../../../src/assets/images/bg2.jpg'
function Founder() {
  return (
    <>
        <div className={styles.founder_container}>
                <div className={styles.founder_img_wrapper}>
                        <img src={founderImage} alt="sccma founder image" />
                        <p>Yonas Negese M</p>
                </div>
                <div className={styles.founder_text_wrapper}>
                        <p>Your contributions help us drive positive change, support various initiatives, and strengthen our community. Join us in making a meaningful impact—every donation counts towards building a brighter future for all!</p>
                </div>
        </div>
    </>
  )
}

export default Founder
