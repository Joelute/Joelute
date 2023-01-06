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
                    <Link className ={styles.link} href='/#contact' scroll={false}>Contact</Link>
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
                <Link className ={styles.link} href='/' onClick={handleMenuOpen}><i className="uil uil-estate"></i>Home</Link>
                <Link className ={styles.link} href='/#about' scroll={false} onClick={handleMenuOpen}><i className="uil uil-user"></i>About</Link>
                <Link className ={styles.link} href='/#project' scroll={false} onClick={handleMenuOpen}><i className="uil uil-folder"></i>Projects</Link>
                <Link className ={styles.link} href='/#contact' scroll={false} onClick={handleMenuOpen}><i className="uil uil-postcard"></i>Contact</Link>
            </nav>
            {children}
            <footer className={styles.footer}>
                <a href={'https://www.linkedin.com/in/joelute/'} target="_blank" rel="noopener noreferrer"><i className="uil uil-linkedin"></i></a>
                <a href={'https://github.com/Joelute'} target="_blank" rel="noopener noreferrer"><i className="uil uil-github"></i></a>
                <a href={'https://leetcode.com/Joelute/'} target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104a5.35 5.35 0 0 0-.125.513a5.527 5.527 0 0 0 .062 2.362a5.83 5.83 0 0 0 .349 1.017a5.938 5.938 0 0 0 1.271 1.818l4.277 4.193l.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019l-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523a2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382a1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382a1.38 1.38 0 0 0-1.38-1.382z"/></svg></a>
            </footer>
        </div>
    )
}