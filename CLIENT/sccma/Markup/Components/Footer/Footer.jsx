import styles from './Footer.module.css'
import logo from '../../../src/assets/images/sccma-logo.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';


function Footer() {
  return (
    <>
      <div className={styles.footer_container}>
        <div className={styles.top_footer_wrapper}>
            <div>
                <img className={styles.logo} src={logo} alt='sccma logo' />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem dolore deserunt totam hic ut! Dolorem ratione placeat.</p>
            </div>
            <div className={styles.links}>
                <h4>Discover</h4>
                <ul>
                    <a href=""><li>About Us</li></a>
                    <a href=""><li>Services or Programs</li></a>
                    <a href=""><li>Volunteer</li></a>
                    <a href=""><li>Donate</li></a>
                </ul>
            </div>
            <div className={styles.links}>
                <h4>Help</h4>
                    <ul>
                        <a href=""><li>FAQ</li></a>
                        <a href=""><li>Terms and conditions</li></a>
                        <a href=""><li>Privacy</li></a>
                    </ul>
            </div>
        </div>
        <div className={styles.footer_links_container}>
            {/* footer links */}
            <div className={styles.links_container}>
                    <a target='_blank' href="https://www.facebook.com/share/tbdNwbG2ncPgQSWf/?mibextid=qi2Omg"><FacebookIcon/></a>
                    <a target='_blank' href="https://www.instagram.com/sccma_04?igsh=MWt0anZlZDYwMWxqZQ=="><InstagramIcon/></a>
                    <a target='_blank' href="https://www.linkedin.com/company/sara-cannizzaro-child-minders-association/"><LinkedInIcon/></a>
                    <a target='_blank' href="https://t.me/saracenter1"><TelegramIcon/></a>
                    <a target='_blank' href="https://x.com/sccma04?t=lo1O0j3m5QKNtqTX88IjPg&s=09"><TwitterIcon/></a>
            </div>
            <div className={styles.search_bar}>
                {/* search bar */}
                <input type="text" placeholder='search'/>
            </div>
        </div>
        <p className={styles.copyright_text}>@Copyright SCCMA. All rights reserved.</p>
      </div>
    </>
  )
}

export default Footer
