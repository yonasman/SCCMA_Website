import styles from './teamCard.module.css'

function TeamCard({image, name, title,altText, facebook, instagram, linkedin}) {
  return (
    <>
        <div className={styles.teamCard_container}>
                <div className={styles.teamImg_container}>
                        <img src={image} alt={altText} />
                    </div>
                    <p>{name}</p>
                    <p>{title}</p>
                    <div className={styles.socialMediaLinks_container}>
                        {facebook}
                        {instagram}
                        {linkedin}
                    </div>
            </div>
    </>
  )
}

export default TeamCard
