import Image from "next/image"
import styles from './Project.module.css'
import profile from '../../../public/profile.jpg'
import Link from "next/link"
import Tag from '../Tag/Tag'

export default function Project({name, description, demoLink}) {
    
    return (
        <div className={styles.container}>
            <Image src={profile} alt='Project image' className={styles.project}></Image>
            <div className={styles.info}>
                <h1 className={styles.name}>{name}</h1>
                <p className={styles.description}>{description}</p>
                <Link 
                    href={demoLink} 
                    className={`${styles.button} ${styles.demo} all-around-effect all-around`}
                >DEMO</Link>
            </div>    
        </div>
    )
}