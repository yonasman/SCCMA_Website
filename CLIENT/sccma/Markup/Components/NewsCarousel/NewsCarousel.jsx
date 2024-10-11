import styles from './newsCarousel.module.css'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import image1 from '../../../src/assets/images/bg2.jpg'
import image2 from '../../../src/assets/images/event1.jpg'
import image3 from '../../../src/assets/images/header-bg-1.jpg'
import image4 from '../../../src/assets/images/featured_cause_1.jpg'

function NewsCarousel() {
  return (
    <>
        <div className={styles.newsCarousel_container}>
                    <Carousel 
                        showArrows={true}
                        autoPlay={true}
                        infiniteLoop={true}
                        showStatus={false}
                        showThumbs={false}
                        interval={2000}
                        transitionTime={500}
                        dynamicHeight={true}
                        useKeyboardArrows={true}
                        swipeable={true}
                        stopOnHover={true}
                        emulateTouch={true}
                    >
                        {/* {images with text} */}
                        <div>
                            <img src={image1} alt="" />
                            <div className={styles.legend}>Your contributions help us drive positive change, support various initiatives, and strengthen our community. Join us in making a meaningful impact—every donation counts towards building a brighter future for all!</div>
                        </div>
                        <div>
                            <img src={image2} alt="" />
                            <div className={styles.legend}>Your contributions help us drive positive change, support various initiatives, and strengthen our community. Join us in making a meaningful impact—every donation counts towards building a brighter future for all!</div>
                        </div>
                        <div>
                            <img src={image3} alt="" />
                            <div className={styles.legend}>Your contributions help us drive positive change, support various initiatives, and strengthen our community. Join us in making a meaningful impact—every donation counts towards building a brighter future for all!</div>
                        </div>
                        <div>
                            <img src={image4} alt="" />
                            <div className={styles.legend}>Your contributions help us drive positive change, support various initiatives, and strengthen our community. Join us in making a meaningful impact—every donation counts towards building a brighter future for all!</div>
                        </div>
                    </Carousel>
        </div>
    </>
  )
}

export default NewsCarousel
