import Image from "next/image"
import styles from './Project.module.css'
import profile from '../../../public/profile.jpg'
import Link from "next/link"
import Tag from '../Tag/Tag'

export default function Project() {
    return (
        <div className={styles.container}>
            
                <h1 className={styles.name}>Project Name</h1>
                <h4 className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </h4>
                <div className={styles.tag}>
                    <Tag>React</Tag>
                    <Tag>React</Tag>
                    <Tag>React</Tag>
                    <Tag>React</Tag>
                </div>
                <a href="#" className={`${styles.button} ${styles.demo} all-around-effect all-around`}>Demo <i className="uil uil-angle-right-b"></i></a>
                <a href="#" className={`${styles.button} ${styles.github} all-around-effect all-around`}>Github <i className="uil uil-angle-right-b"></i></a>
                
            
            <Image src={profile} alt='Project image' className={styles.project}></Image>
        </div>
    )
}