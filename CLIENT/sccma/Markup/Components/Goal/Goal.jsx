import styles from './goal.module.css'

function Goal({title, description}) {
  return (
    <>
        <div className={styles.goal_container}>
            <div>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    </>
  )
}

export default Goal
