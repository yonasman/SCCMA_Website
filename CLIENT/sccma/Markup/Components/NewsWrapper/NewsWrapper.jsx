import EventsAndNews from '../EventsAndNews/EventsAndNews'
import styles from './newsWrapper.module.css'

function NewsWrapper() {
  return (
    <>
        <div className={styles.newsWrapper_container}>
            <h1>News And Events</h1>
            <div className={styles.news_container}>
                <EventsAndNews/>
                <EventsAndNews/>
                <EventsAndNews/>
            </div>
        </div>
    </>
  )
}

export default NewsWrapper
