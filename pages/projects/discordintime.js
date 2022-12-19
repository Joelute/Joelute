import Link from 'next/link'
import Image from 'next/image'
import Layout from '../../components/Layout'
import styles from '../../styles/discordintime.module.css'
import projectImage from '../../public/DiscordInTime.png'
import Tag from '../../components/elements/Tag/Tag'

export default function DiscordInTime () {
    return (
        <Layout>
            <section className={styles['heading-container']}>
                <div className={`${styles.responsive} ${styles.heading}`}>
                    <h1>Discord In Time</h1>
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos in numquam incidunt earum quaerat cum fuga, atque similique natus nobis sit.</h3>
                    <Link href='https://discordintime.vercel.app/'>Live Project</Link>
                </div>
            </section>
            <main className={`${styles.main} ${styles.responsive}`}>
                <div className={styles['image-container']}>
                    <Image src={projectImage} className={styles.image}/>
                </div>
                
                <section className={styles.overview}>
                    <h2>Project Overview</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque alias tenetur minus quaerat aliquid,
                        aut provident blanditiis, deleniti aspernatur ipsam eaque veniam voluptatem corporis vitae mollitia
                        laborum corrupti ullam rem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque alias
                        tenetur minus quaerat aliquid, aut provident blanditiis, deleniti aspernatur ipsam eaque veniam 
                        voluptatem corporis vitae mollitia laborum corrupti ullam rem? 

                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque alias tenetur minus quaerat aliquid, 
                        aut provident blanditiis, deleniti aspernatur ipsam eaque veniam voluptatem corporis vitae mollitia 
                        laborum corrupti ullam rem?
                    </p>
                </section>

                <section className={styles.tool}>
                    <h2>Tools Used</h2>
                    <div className={styles['tool-tag']}>
                        <Tag>Javascript</Tag>
                        <Tag>Next.js</Tag>
                        <Tag>React</Tag>
                        <Tag>Vercel</Tag>
                    </div>
                    
                </section>

                <section className={styles.demo}>
                    <h2>See Live</h2>
                </section>


            </main>
        </Layout>
    )
}