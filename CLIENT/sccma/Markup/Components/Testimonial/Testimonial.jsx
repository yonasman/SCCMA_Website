import styles from './testimonial.module.css'
import image1 from '../../../src/assets/images/bg2.jpg'
import image2 from '../../../src/assets/images/event1.jpg'
import image3 from '../../../src/assets/images/girl-img.jpg'

function Testimonial() {
  return (
    <>
        <div className={styles.testimonial_container}>
            <h2>Testimonials</h2>
            <div className={styles.testimonial_profile_wrapper}>
                <div>
                    <img src={image1} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div>
                    <img src={image2} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div>
                    <img src={image3} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Testimonial
