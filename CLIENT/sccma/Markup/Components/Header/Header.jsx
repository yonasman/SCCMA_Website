import { useEffect, useState } from "react";
import logo from "../../../src/assets/images/sccma-logo.png"
import styles from "./Header.module.css"
import MenuIcon from '@mui/icons-material/Menu';
import { HomeOutlined as HomeIcon, InfoOutlined as InfoIcon, NewspaperOutlined as NewsIcon, MailOutline as ContactIcon  } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';


function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    // function to handle menu opening
    const handleMenu = () => {
        setMenuOpen(!menuOpen);
    }
    // close side menu on resize
    useEffect(()=> {
        const handleResize = () => {
            if(window.innerWidth > 768 & menuOpen) {
                setMenuOpen(false)
            }
        }
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    },[menuOpen])
    return (
        <>
          <div className={styles.nav_container}>
            <div className={styles.logo_wrapper}>
                <img className={styles.logo} src={logo} alt="sccma logo" />
            </div>
            <div className={styles.hamburger_menu} onClick={handleMenu}>
                {menuOpen ? <CloseIcon fontSize="large"/> : <MenuIcon fontSize="large"/>}
            </div>
            <div className={`${styles.side_menu} ${menuOpen ? styles.open : ''}`}>
                <ul>
                    <li><HomeIcon fontSize="small"/>Home</li>
                    <li><InfoIcon fontSize="small"/>About Us</li>
                    <li><NewsIcon fontSize="small"/>News</li>
                    <li><ContactIcon fontSize="small"/>Contact Us</li>
                </ul>
            </div>
            {/* desktop navigation */}
            <div className={styles.nav_items}>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>News</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <button  className={styles.nav_btn}>Donate</button>
          </div>
        </>
    )
}
export default Header