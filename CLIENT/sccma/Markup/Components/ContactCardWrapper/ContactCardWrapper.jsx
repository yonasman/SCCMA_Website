import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import styles from './contactCardWrapper.module.css';
import ContactCard from '../ContactCard/ContactCard';

function ContactCardWrapper() {
    // Define contactInfo as an array
    const contactInfo = [
        {
            id: 1,
            icon: PhoneIcon,
            contactText: "Give us a call",
            contactOne: '(+251)999999999',
            contactTwo: '(+251)888888888'
        },
        {
            id: 2,
            icon: EmailIcon,
            contactText: "Drop us a line",
            contactOne: 'info@sccma-theme.com',
            contactTwo: 'mail@sccma-tech.com'
        },
        {
            id: 3,
            icon: LocationOnIcon,
            contactText: "Visit our office",
            contactOne: 'Nefas silk/ Lafto.Kebele: 03/04/05',
            contactTwo: 'P.O.Box 20771 – Addis Ababa – Ethiopia'
        }
    ];

    return (
        <>
            <div className={styles.contactCardWrapper_container}>
                <h1>Contact SCCMA</h1>
                <div className={styles.contactCards_container}>
                {
                    contactInfo.map((info) => (
                        <ContactCard 
                            key={info.id} 
                            icon={info.icon} 
                            contactText={info.contactText}
                            contactOne={info.contactOne} 
                            contactTwo={info.contactTwo}
                        />
                    ))
                }
                </div>
                
            </div>
        </>
    );
}

export default ContactCardWrapper;
