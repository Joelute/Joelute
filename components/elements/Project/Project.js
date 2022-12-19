import Image from "next/image"
import styles from './Project.module.css'
import profile from '../../../public/profile.jpg'
import Link from "next/link"
import Tag from '../Tag/Tag'

export default function Project({name, description, link}) {
    
    return (
        <div className={styles.container}>
            <Image src={profile} alt='Project image' className={styles.project}></Image>
            <div className={styles.info}>
                <h2 className={styles.name}>{name}</h2>
                <p className={styles.description}>{description}</p>
                <Link 
                    href={link} 
                    className={`${styles.button} ${styles.demo} all-around-effect all-around`}
                    scroll={false}
                >LEARN MORE</Link>
            </div>    
        </div>
    )
}