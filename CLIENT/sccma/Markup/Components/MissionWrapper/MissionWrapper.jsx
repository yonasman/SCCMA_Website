import styles from './missionWrapper.module.css'
import image1 from '../../../src/assets/images/wellness.png'
import image2 from '../../../src/assets/images/children_support.png'
import image3 from '../../../src/assets/images/advocate.png'
import MissionCard from '../MissionCard/MissionCard'

function MissionWrapper() {
  const missionInfo = [
    {
      id : 1,
      image : image1,
      title : 'Health and Wellness',
      description : 'To ensure that all beneficiaries have access to healthcare services, contributing to their physical and mental well-being.',
      altText : 'health and wellness image'
    },
    {
      id : 2,
      image : image2,
      title : 'Support Children’s',
      description : 'To provide educational resources and training programs that foster the holistic development of children, ensuring they have the skills and support needed to reach their full potential.',
      altText : 'children support and development image'
    },
    {
      id : 3,
      image : image3,
      title : 'Advocate for Vulnerable',
      description : 'To raise awareness about the challenges faced by disadvantaged families and advocate for policies and programs that support their needs.',
      altText : 'advocate image'
    }
   
  ]
  return (
    <>
        <div className={styles.mission_container}>
          <h1>Missions</h1>
          <div className={styles.missionCard_container}>
            {missionInfo.map((content) => (
                  <div key={content.id}>
                        <MissionCard image={content.image} title={content.title} description={content.description} altText={content.altText}/>
                  </div>
                ))}
          </div>
        </div>
    </>
  )
}

export default MissionWrapper
