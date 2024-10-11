import styles from './teamCardWrapper.module.css'
import image1 from '../../../src/assets/images/girl-img.jpg'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TeamCard from '../TeamCard/TeamCard';

function TeamCardWrapper() {
    const teamContent = [
        {
            id : 1,
            image : image1,
            name : 'Yonas Negese',
            title : 'Chief officer',
            altText : 'team image',
            facebook : FacebookIcon,
            instagram : InstagramIcon,
            linkedin : LinkedInIcon
        },
        {
            id : 1,
            image : image1,
            name : 'Yonas Negese',
            title : 'Chief officer',
            altText : 'team image',
            facebook : FacebookIcon,
            instagram : InstagramIcon,
            linkedin : LinkedInIcon
        },
        {
            id : 1,
            image : image1,
            name : 'Yonas Negese',
            title : 'Chief officer',
            altText : 'team image',
            facebook : FacebookIcon,
            instagram : InstagramIcon,
            linkedin : LinkedInIcon
        }
    ]
  return (
    <>
        <div className={styles.teamCardWrapper_container}>
                <h1>Teams</h1>
                <div className={styles.teamCards_container}>
                    {teamContent.map((content) => (
                        <div key={content.id}>
                            <TeamCard image={content.image} name={content.name} title={content.title} altText={content.altText} facebook={<content.facebook/>} instagram={<content.instagram/>} linkedin={<content.linkedin/>}/>
                        </div>
                    ))}
                </div>
        </div>
    </>
  )
}

export default TeamCardWrapper
