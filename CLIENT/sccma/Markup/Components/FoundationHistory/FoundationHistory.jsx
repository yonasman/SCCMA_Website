import styles from "./foundationHistory.module.css"
import saraImage from '../../../src/assets/images/sara.png'
function FoundationHistory() {

  return (
    <div>
      <div className={styles.foundation_container}>
            <div className={styles.foundation_text}>
                <h3>About Sara’s Center</h3>
                <p>Sara Child Minders Association, founded in 2004, was established in memory of Sara, an 11-year-old whose dreams of a world filled with love and joy continue to inspire us. After her passing, Sara's family turned her wishes into a mission to prevent child homelessness and break the cycle of poverty, creating a legacy of hope for children and families in need.</p>
            <p>Sara's dream—your donation can make a world of difference.</p>
            </div>
            <div className={styles.sara_img}>
                <img src={saraImage} alt="sara's image" />
            </div>
      </div>
    </div>
  )
}

export default FoundationHistory
