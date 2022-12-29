import Image from "next/image"
import styles from './Project.module.css'
import profile from '../../../public/profile.jpg'
import Link from "next/link"
import Tag from '../Tag/Tag'
import Button from "../Button/Button"

export default function Project({name, description, image, siteLink, projectLink}) {
    
    return (
        <div className={styles.container}>
            <Link className={styles['image-container']} href={siteLink}>
                <Image src={require(`../../../public/${image}`)} alt='Project image' className={`${styles.image} image-hover`} priority></Image>
            </Link>
            
            <div className={styles.info}>
                <h2 className={styles.name}>{name}</h2>
                <p className={styles.description}>{description}</p>
                <Button 
                    className={styles.button}
                    content='LEARN MORE'
                    href={projectLink}
                    scroll={false}
                    color='white'
                    backgroundcolor='#FE8686'
                ></Button>                
            </div>    
        </div>
    )
}