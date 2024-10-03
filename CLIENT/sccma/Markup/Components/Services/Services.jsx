import ServiceCard from '../ServiceCard/ServiceCard'
import styles from '../Services/services.module.css'
import image1 from '../../../src/assets/images/bg2.jpg'
import image2 from '../../../src/assets/images/featured_cause_1.jpg'
import image3 from '../../../src/assets/images/event1.jpg'
import image4 from '../../../src/assets/images/sara-job.jpg'
function Services() {
    const services = [{
        image:image1,
        title :'Education',
        description : 'At SCCMA, we believe that every child should have the opportunity for an excellent education. As part of its core mission of equipping children with quality educational foundation, the center works with various local communities in Addis Ababa.',
        link : '#',
        altText : "educational image"
    },
    {
        image:image2,
        title :'Vocational Training',
        description : 'As part of its integrated support strategy for our children and their parents/guardians, SCCMA provides vocational education and training skills development programs for mothers that will enable them to get a job and earn a living to improve their livelihoods.',
        link : '#',
        altText : "educational image"
    },
    {
        image:image3,
        title :'Health Care',
        description : 'The health care services in Ethiopia is extremely poor due to several reasons, including a lack of available doctors, nurses and other trained healthcare professional as well as the absence of medical equipment, laboratories and hospitals just to name a few.',
        link : '#',
        altText : "educational image"
    },
    {
        image:image4,
        title :'Job Opportunities',
        description : 'At SCCMA, we just don’t train women but also link their skills and experience to potential job opportunities through our connection and partner organizations. We believe effective skills development to reduce women poverty in Ethiopia.',
        link : '#',
        altText : "educational image"
    }
]
  return (
    <>
        <div className={styles.services_container}>
            <h1>SCCMA Services</h1>
            <div className={styles.service_card_container}>
                {services.map((service,i) =>(
                    <ServiceCard  key={i} image={service.image} title={service.title} description={service.description} link={service.link} altText={service.altText} ></ServiceCard>
                ))}
            </div>
        </div>
    </>
  )
}

export default Services
