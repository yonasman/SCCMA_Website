import styles from './eventsAndNews.module.css'
import image1 from '../../../src/assets/images/featured_cause_1.jpg'
import { Link } from 'react-router-dom'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
function EventsAndNews() {
  return (
    <>
            <div className={styles.eventAndNews_container}>
                    <div className={styles.img_container}>
                            <img src={image1} alt="" />
                    </div>
                    <p>Your contributions help us drive positive change.
                    Your contributions help us drive positive change.
                    </p>
                    <div className={styles.readMore_container}>
                            <Link to="#">Read More <ArrowCircleRightIcon/></Link>
                    </div>
            </div>
    </>
  )
}

export default EventsAndNews
