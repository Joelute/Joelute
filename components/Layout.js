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
            <span 
                className={styles.hover} 
                onMouseEnter={() => showNav()}
                onMouseLeave={() => hideNav()}
            >
            </span>

            <nav className={styles.nav} ref={navRef} onMouseEnter={() => showNav()} onMouseLeave={() => hideNav()}>
                <div className={styles.navbar}>
                    <Link className ={styles.link} href='/'>Home</Link>
                    <Link className ={styles.link} href='/about'>About</Link>
                    <Link className ={styles.link} href='/projects'>Projects</Link>
                </div>
            </nav>
            {children}
        </div>
    )
}