import Head from "next/head"
import Link from "next/link"
import { useRef } from "react"
import styles from "../styles/layout.module.css"


export default function Layout ({ children }) {

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

    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Hello! My name is Joseph and I'm a software engineer. Nice to meet you!" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <nav className={styles.nav}>
                <div className={styles.navbar}>
                    <Link className ={styles.link} href='/'>Home</Link>
                    <Link className ={styles.link} href='/#about' scroll={false}>About</Link>
                    <Link className ={styles.link} href='/#project' scroll={false}>Projects</Link>
                </div>
            </nav>
            {children}
            <footer className={styles.footer}>
                <Link href={'https://www.linkedin.com/in/joelute/'}><i className="uil uil-linkedin"></i></Link>
                <Link href={'https://github.com/Joelute'}><i className="uil uil-github"></i></Link>
            </footer>
        </div>
    )
}