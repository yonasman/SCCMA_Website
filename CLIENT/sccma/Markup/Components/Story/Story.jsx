import styles from './story.module.css'
import image from '../../../src/assets/images/header-bg-1.jpg'
function Story() {
  return (
    <>
       <div className={styles.story_container}>
            <div className={styles.aboutStory_container}>
                    <h2>Story About Us</h2>
            </div>
            <div className={styles.storyText_container}>
                    <div>
                        <p>Founded in 2004 by Sara’s Family, SCCMA is a registered charity organization based in Addis Ababa, Ethiopia, inspired by the values expressed in Sara’s poem. In its 15 years of operation, the organization has supported 600 beneficiaries, including 400 children from broken and extremely poor families. The Sara Center offers a nursery, kindergarten, sewing and embroidery training, cooking and catering training, an after-school library, and a health care program. Through its Distance Support Scheme, SCCMA aims to enhance the financial stability and emotional development of both children and their guardians, believing that every child deserves the opportunity to reach their full potential.</p>
                    </div>
                    <div>
                        <img src={image} alt="" />
                    </div>
            </div>
       </div>
    </>
  )
}

export default Story
