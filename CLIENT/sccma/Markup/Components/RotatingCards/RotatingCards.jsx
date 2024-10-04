import image1 from '../../../src/assets/images/bg2.jpg'
import image2 from '../../../src/assets/images/event1.jpg'
import image3 from '../../../src/assets/images/girl-img.jpg'
import image4 from '../../../src/assets/images/header-bg-1.jpg'
import image5 from '../../../src/assets/images/sara-job.jpg'
import styles from './rotatingCards.module.css'

function RotatingCards() {
    const images = [
        {
            id : 1,
            image : image1
        }, 
        {
            id : 2,
            image : image2
        },
        {
            id : 3,
            image : image3
        },
        {
            id : 4,
            image : image4
        },
        {
            id : 5,
            image : image5
        }
    ]
    return (
        <>
            <div className={styles.cards_container}>
                <div className={styles.cards_wrapper}>

                    {images.concat(images).map((image) => (
                        <div key={image.id} className={styles.rotating_cards} >
                                <img src={image.image} alt="rotating images" />
                        </div>
                    ))}
                    {/* duplicate card */}
                    {/* {images.map((image) => (
                        <div key={image.id} className={styles.rotating_cards}>
                                <img key={image.id} src={image.image} alt="rotating images" />
                        </div>
                    ))} */}
                </div>
            </div>
        </>
    )
}

export default RotatingCards
