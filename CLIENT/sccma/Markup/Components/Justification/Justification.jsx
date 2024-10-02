import styles from './justification.module.css'
import {Link} from 'react-router-dom'
function Justification() {
  return (
    <>
        <div className={styles.justification_container}>
            <div className={styles.justification_text_container}>
                <h2>Background and Justification</h2>
                <p>Despite Ethiopia's economic growth, over 23% of its population still lives below the poverty line (UNDP Ethiopia, 2018). Children are hit hardest, with 13 million living in poverty, and 2 million in extreme poverty (UNICEF Ethiopia, 2016). They face greater risks than adults, especially in households headed by informal sector workers, where 13.1% of children live in extreme poverty. Urban poor children are increasingly vulnerable to street life due to poverty, lack of education, and family instability.
                </p>
                <h3>Your donation can help protect these children and offer them a brighter future.</h3>
                <Link to='/donate' className={styles.donate_btn}>Donate Now</Link>
            </div>
        </div>
    </>
  )
}

export default Justification
