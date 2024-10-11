import Goal from '../Goal/Goal'
import styles from './goalWrapper.module.css'

function GoalWrapper() {
    const goalContent = [
        {
            id : 1,
            title : 'Empower Families',
            description : 'Enhance financial stability and emotional well-being.'
        }
        ,
        {
            id : 2,
            title : 'Promote Health',
            description : 'Ensure access to health care services.'
        },
        {
            id : 3,
            title : 'Foster Community',
            description : 'Engage with the community for sustainable solutions.'
        },
        {
            id : 4,
            title : 'Advocate for Change',
            description : 'Raise awareness about the needs of vulnerable populations.'
        }
    ] 
  return (
    <>
        <div className={styles.goalWrapper_container}>
                <h1>Goals</h1>
                <div className={styles.goalCards_container}>
                    {goalContent.map((content) => (
                        <div key={content.id}>
                                <Goal title={content.title} description={content.description}/>
                        </div>
                    ))}
                </div>
        </div>
    </>
  )
}

export default GoalWrapper
