import styles from './carousel.module.css';
import images from '../../../src/data/data'; 
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel styles

const MyCarousel = () => {
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
