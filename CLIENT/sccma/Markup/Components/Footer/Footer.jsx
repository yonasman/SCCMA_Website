import styles from './Footer.module.css'
import logo from '../../../src/assets/images/sccma-logo.png'
import FacebookIcon from '@mui/icons-material/Facebook';
// import TwitterIcon from '@mui/icons-material/Twitter';
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
            <div>
                <p>Discover</p>
                <ul>
                    <li>About Us</li>
                    <li>Services or Programs</li>
                    <li>Volunteer</li>
                    <li>Donate</li>
                </ul>
            </div>
            <div>
                <p>Help</p>
                    <ul>
                        <li>FAQ</li>
                        <li>Terms and conditions</li>
                        <li>Privacy</li>
                    </ul>
            </div>
        </div>
        <div className={styles.footer_links_container}>
            {/* footer links */}
            <div className={styles.links_container}>
                    <a href=""><FacebookIcon/></a>
                    <a href=""><InstagramIcon/></a>
                    <a href=""><LinkedInIcon/></a>
                    <a href=""><TelegramIcon/></a>
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
