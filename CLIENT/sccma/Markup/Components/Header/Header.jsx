import { useEffect, useState } from "react";
import logo from "../../../src/assets/images/sccma-logo.png"
import styles from "./Header.module.css"
import MenuIcon from '@mui/icons-material/Menu';
import { HomeOutlined as HomeIcon, InfoOutlined as InfoIcon, NewspaperOutlined as NewsIcon, MailOutline as ContactIcon  } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from "react-router-dom";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    // function to toggle side menu
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
    // function to change color on scroll
    const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
    }
    useEffect(()=> {
       window.addEventListener('scroll',handleScroll)
       return () => {
        window.removeEventListener('scroll', handleScroll)
       }
    },[])
    return (
        <>
          <div className={`${styles.nav_container} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={styles.logo_wrapper}>
                <img className={styles.logo} src={logo} alt="sccma logo" />
            </div>
            <div className={styles.hamburger_menu} onClick={handleMenu}>
                {menuOpen ? <CloseIcon fontSize="large"/> : <MenuIcon fontSize="large"/>}
            </div>
            <div className={`${styles.side_menu} ${menuOpen ? styles.open : ''}`}>
                <ul>
                    <Link to="/"><li><HomeIcon fontSize="small"/>Home</li></Link>
                    <Link to="/about"><li><InfoIcon fontSize="small"/>About Us</li></Link>
                    <Link to="/news"><li><NewsIcon fontSize="small"/>News</li></Link>
                    <Link to="/contact"><li><ContactIcon fontSize="small"/>Contact Us</li></Link>
                </ul>
            </div>
            {/* desktop navigation */}
            <div className={styles.nav_items}>
                <ul>
                    <Link to='/'><li>Home</li></Link>
                    <Link to='/about'><li>About Us</li></Link>
                    <Link to='/news'><li>News</li></Link>
                    <Link to='/contact'><li>Contact Us</li></Link>
                    <Link to='/staffs'>Staffs</Link>
                </ul>
            </div>
            <Link  className={styles.nav_btn} to='/donate'>Donate</Link>
          </div>
        </>
    )
}
export default Header