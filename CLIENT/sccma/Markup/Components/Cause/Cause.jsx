import CauseCard from '../CauseCard/CauseCard'
import styles from './cause.module.css'
import image1 from '../../../src/assets/images/event1.jpg'
import image2 from '../../../src/assets/images/featured_cause_1.jpg'
import image3 from '../../../src/assets/images/girl-img.jpg'
import ServiceCard from '../ServiceCard/ServiceCard'
import {Link} from 'react-router-dom'
function Cause() {
  const causes = [
    {
      image : image1,
      link : '#',
      altText : 'altText',
    },
    {
      image : image2,
      link : '#',
      altText : "altText"
    },
    {
      image : image3,
      link : '#',
      altText : 'altText'
    }
  ]
  return (
    <>
        <div className={styles.cause_container}>
            <div className={styles.left_container}>
              <h2>News and Upcoming Events</h2>
              <div className={styles.card_container}>
               {causes.map((cause,i) => (
                <CauseCard key={i} image={cause.image} link={cause.link} altText={cause.altText}/>
               ))}
              </div>
            </div>
            <div className={styles.right_container}>
                <h2>Featured Cause</h2>
                <div className={styles.featured_card_container}>
                    <ServiceCard className={styles.featured_card} image={image1} title='Job Opportunities' description='At SCCMA, we just don’t train women but also link their skills and experience to potential job opportunities through our connection and partner organizations. We believe effective skills development to reduce women poverty in Ethiopia.' link='#' altText='job at sccma'/>
                    <Link to='/donate' className={styles.donate_btn}>Donate Now</Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default Cause
