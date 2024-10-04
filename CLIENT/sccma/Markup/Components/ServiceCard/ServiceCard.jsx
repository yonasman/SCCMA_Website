import styles from './serviceCard.module.css'
import {Link} from "react-router-dom"
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';


function ServiceCard({className,image, title, description,link,altText}) {
  return (
    <>
        <div className={`${styles.card_container} ${className}`}>
            <div className={styles.img_container}>
                <img src={image} alt={altText} />
            </div>
           <div className={styles.text_container}>
           <h3>{title}</h3>
           <p>{description}</p>
           <div className={styles.readMore_container}>
                <Link To={link}>Read More <ArrowCircleRightIcon/></Link>
           </div>
           </div>
        </div> 
    </>
  )
}

export default ServiceCard
