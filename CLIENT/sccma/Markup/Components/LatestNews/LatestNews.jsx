import styles from './latestNews.module.css'
import newsImage from '../../../src/assets/images/event1.jpg' 
import { Link } from 'react-router-dom'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
function LatestNews() {
  return (
    <>
      <div className={styles.latestNews_container}>
                <div className={styles.news_img_container}>
                        <img src={newsImage} alt="latest news image" />
                </div>
                <div className={styles.news_text_container}>
                        <h1>Latest News</h1>
                        <p>
                        Your contributions help us drive positive change, support various initiatives, and strengthen our community.Your contributions help us drive positive change, support various initiatives, and strengthen our community.
                        </p>
                        <div className={styles.readMore_container}>
                            <Link to="#">Read More <ArrowCircleRightIcon/></Link>
                        </div>
                </div>
      </div>
    </>
  )
}

export default LatestNews
