import styles from './staffList.module.css'
import image from '../../../src/assets/images/girl-img.jpg'

function StaffList() {
  return (
    <>
            <div className={styles.staffList_container}>
                    <h1>Staffs</h1>
                    <div className={styles.staffList_wrapper}>
                            <div>
                                <img src={image} alt="" />
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                            </div>
                            <div>
                                <img src={image} alt="" />
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                            </div>
                            <div>
                                <img src={image} alt="" />
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                            </div>
                    </div>
            </div>
    </>
  )
}

export default StaffList
