import Head from "next/head"
import Link from "next/link"
import { useRef, useState } from "react"
import styles from "../styles/layout.module.css"


export default function Layout ({ pageName, children }) {

    const navRef = useRef(null)

    const showNav = () => {
        if (navRef.current) {
            navRef.current.style.top = '0';
        }
    }

    const hideNav = () => {
        if (navRef.current) {
            navRef.current.style.top = '-6rem'
        }
    }

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handleMenuOpen = () => {
        setIsMenuOpen(prevState => !prevState)
    }

    const pageTitle = pageName? `${pageName} | Joseph Ho`: `Joseph Ho`

    return (
        <div>
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content="Hello! My name is Joseph and I'm a software engineer. Nice to meet you!" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <nav className={styles.nav}>
                <div className={styles.navbar} aria-expanded={isMenuOpen}>
                    <Link className ={styles.link} href='/'>Home</Link>
                    <Link className ={styles.link} href='/#about' scroll={false}>About</Link>
                    <Link className ={styles.link} href='/#project' scroll={false}>Projects</Link>
                </div>
                <div className={styles['nav-menu']} aria-expanded={isMenuOpen} onClick={handleMenuOpen}>
                    <svg fill="#F87172" viewBox='0 0 100 100' width='40'>
                        <rect 
                            className={`${styles['nav-menu-top']} ${styles['nav-menu-line']}`}
                            width='80' height='10' x='10' y ='25' rx='5'>
                        </rect>
                        <rect 
                            className={`${styles['nav-menu-middle']} ${styles['nav-menu-line']}`} 
                            width='80' height='10' x='10' y ='45' rx='5'>
                        </rect>
                        <rect 
                            className={`${styles['nav-menu-bottom']} ${styles['nav-menu-line']}`} 
                            width='80' height='10' x='10' y ='65' rx='5'>
                        </rect>
                    </svg>
                </div>
            </nav>
            <nav className={styles['navbar-mobile']} aria-expanded={isMenuOpen}>
                <Link className ={styles.link} href='/'><i className="uil uil-estate"></i>Home</Link>
                <Link className ={styles.link} href='/#about' scroll={false}><i className="uil uil-user"></i>About</Link>
                <Link className ={styles.link} href='/#project' scroll={false}><i className="uil uil-folder"></i>Projects</Link>
            </nav>
            {children}
            <footer className={styles.footer}>
                <Link href={'https://www.linkedin.com/in/joelute/'}><i className="uil uil-linkedin"></i></Link>
                <Link href={'https://github.com/Joelute'}><i className="uil uil-github"></i></Link>
                <Link href={'https://leetcode.com/Joelute/'}><iconify-icon inline icon="simple-icons:leetcode"></iconify-icon></Link>
            </footer>
        </div>
    )
}