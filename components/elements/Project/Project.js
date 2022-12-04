import Image from "next/image"
import styles from './Project.module.css'
import profile from '../../../public/profile.jpg'
import Link from "next/link"
import Tag from '../Tag/Tag'

export default function Project({name, tagList, description, demoLink, githubLink}) {

    const tagElement = tagList.map((tag) => {
        return (
            <Tag key={null}>{tag}</Tag>
        )
    })
    
    return (
        <div className={styles.container}>
            
                <h1 className={styles.name}>{name}</h1>
                <h4 className={styles.description}>{description}</h4>
                <div className={styles.tag}>
                    {tagElement}
                </div>
                <Link 
                    href={demoLink} 
                    className={`${styles.button} ${styles.demo} all-around-effect all-around`}
                >Demo <i className="uil uil-angle-right-b"></i></Link>
                <Link 
                    href={githubLink} 
                    className={`${styles.button} ${styles.github} all-around-effect all-around`}
                >Github <i className="uil uil-angle-right-b"></i></Link>
                
            <Image src={profile} alt='Project image' className={styles.project}></Image>
        </div>
    )
}