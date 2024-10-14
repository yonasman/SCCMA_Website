import styles from './carousel.module.css';
import image1 from  '../../../src/assets/images/header-bg-1.jpg' ;
import image2 from   '../../../src/assets/images/bg2.jpg' ;
import image3 from  '../../../src/assets/images/sara-job.jpg'  ;
import image4 from  '../../../src/assets/images/featured_cause_1.jpg';
import image5 from  '../../../src/assets/images/event1.jpg' ;
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel styles

const MyCarousel = () => {
    const images = [
        { id: 1, image: image1},
        { id: 2, image: image2},
        { id: 3, image: image3},
        { id: 4, image: image4 },
        { id: 5, image: image5 }]
    return (
        <div className={styles.carousel_container}>
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
                renderIndicator={(onClickHandler, isSelected, index, label) => {
                    const dotClass = isSelected ? `${styles.dot} ${styles.selected}` : styles.dot;
    
                    return (
                        <span
                            className={dotClass}
                            onClick={onClickHandler}
                            onKeyDown={onClickHandler}
                            value={index}
                            key={index}
                            role="button"
                            tabIndex={0} 
                            aria-label={`${label} ${index + 1}`}
                        />
                    );
                }}
            >
                {images.map((item) => (
                    <div key={item.id} className={styles.carousel_item}>
                        <img src={item.image} alt={`Slide ${item.id}`} />
                    </div>
                ))}
            </Carousel>
            <div className={styles.welcome_text}>
                <h1>Welcome to Sara Cannizzaro Child Minders Association(SCCMA)</h1>
            </div>
            <div className={styles.sccma_description}>
                <p>Founded in 2004 in Addis Ababa, SCCMA is dedicated to uplifting vulnerable families through education, vocational training, healthcare, and emotional support.</p>
            </div>
        </div>
    );
}

export default MyCarousel;
