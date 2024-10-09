import styles from './contactCard.module.css'

function ContactCard({icon : Icon, contactText, contactOne, contactTwo}) {
  return (
    <>
      <div className={styles.contactCard_container}>
            <div className={styles.cardContent_container}>
                <div>
                <Icon/>
                </div>
                <div className={styles.contactText_container}>
                    <p>{contactText}</p>
                    <p>{contactOne}</p>
                    <p>{contactTwo}</p>
                </div>
            </div>
      </div>
    </>
  )
}

export default ContactCard
