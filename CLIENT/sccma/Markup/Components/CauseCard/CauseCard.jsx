import styles from './causeCard.module.css'
import {Link} from "react-router-dom"
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
function CauseCard({image,link,altText}) {
  return (
    <>
      <div className={styles.causeCard_container}>
        <img src={image} alt={altText} />
        <div className={styles.causeCard_text_container}>
            <h3>IISMAS food items donation to families.</h3>
            <p>IISMAS is an Italian based NGO involved in numero...</p>
            <div className={styles.readMore_container}>
                <Link To={link}>Read More <ArrowCircleRightIcon/></Link>
           </div>
        </div>
      </div>
    </>
  )
}

export default CauseCard
