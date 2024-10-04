import styles from './map.module.css'
function Map() {
  return (
    <>
        <div className={styles.map_container}>
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.821531220939!2d38.72720007367267!3d8.98856428962338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b871fb7c3ea6f%3A0x9f9009e245343c18!2sSara%20Center!5e0!3m2!1sen!2set!4v1728033384250!5m2!1sen!2set" 
            width="100%" 
            height="100%" 
            allowfullscreen="true" 
            loading="lazy">
        </iframe>
        </div>
    </>
  )
}

export default Map
