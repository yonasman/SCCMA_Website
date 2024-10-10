import styles from './missionCard.module.css'

function MissionCard({image, title, description,altText}) {
  return (
    <>
        <div className={styles.missionCard_container}>
                <img src={image} alt={altText} />
                <h2>{title}</h2>
                <p>{description}</p>
        </div>
    </>
  )
}

export default MissionCard
