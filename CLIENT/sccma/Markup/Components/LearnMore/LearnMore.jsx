import styles from './learnMore.module.css'
function LearnMore() {
  return (
    <>
        <div className={styles.learnMore_container}>
                <h2>Learn More About SCCMA</h2>
                <div className={styles.learnMore_video_container}>
                        {/* left video container */}
                        <div className={styles.left_video_wrapper}>
                                <iframe 
                                        width="100%" 
                                        height="100%" 
                                        src="https://www.youtube.com/embed/hw_V3WpHUwo" 
                                        frameBorder="0" 
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                        allowfullscreen>
                                </iframe>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias adipisci nihil est deleniti.</p>
                        </div>
                        {/* right video container */}
                        <div className={styles.left_video_wrapper}>
                                <iframe 
                                    width="100%" 
                                    height="100%" 
                                    src="https://www.youtube.com/embed/hw_V3WpHUwo" 
                                    frameBorder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                    allowfullscreen>
                                </iframe>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias adipisci nihil est deleniti.</p>
                        </div>
                </div>
        </div>
    </>
  )
}

export default LearnMore
