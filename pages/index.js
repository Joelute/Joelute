import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/index.module.css'
import Layout from '../components/Layout'
import Project from '../components/elements/Project/Project'
import profile from '../public/profile.jpg'

export default function Home() {
  return (
    <Layout>
      <main className={styles.main}>
        <section className={styles.home}>
          <div></div>
          <h1 className={styles['home-header']}>
            I like creating <span className={styles['unique-font']}>Delightful</span>, <span className={styles['unique-font']}>Impactful</span> and <span className={styles['unique-font']}>Exciting</span> websites
          </h1>
          <div className={styles['home-explore']}>
            <h4 className={styles['home-explore-text']}>explore more</h4>
            <h2 className={styles['home-explore-icon']}><i className="uil uil-angle-down"></i></h2>
          </div>
        </section>
        <section className={styles.about}>
          <h1 className={`${styles['unique-font']}`}>About</h1>
          <div className={styles['about-container']}>
            <Image src={profile} alt='profile' className={styles['about-image']}></Image>
            <div className={styles['about-description']}>
              <h3 className={styles['about-description-text']}>Hello, I&apos;m Joseph Ho and I am a web developer from Toronto, Canada. I love creating and building apps that are clean, interesting and useful to others.</h3>
              <h4 className={styles['about-description-more']}>Learn more about me</h4>
            </div>
          </div>
        </section>
        <section className={styles.project}>
          <h1 className={`${styles['unique-font']}`}>Project</h1>
          <div className={styles['project-container']}>
            <Project 
              name='Discord in Time'
              description='Discord in Time is a Discord timestamp generator that allows users
                           to select their desired time get a code with timestamp to empower
                           their messages and annocements on Discord'
              demoLink='https://discordintime.vercel.app/'
              githubLink='https://github.com/Joelute/Discord-in-Time'
              tagList={['React', 'Next.js', 'Vercel']}
              
            />
            <Project
              name='React with Scrimba'
              description='React with Scrimba is a showcase of solo projects that I made while learning
                           With Scrimba'
              demoLink='https://joelute.netlify.app/'
              githubLink='https://github.com/Joelute/Scrimba-react'
              tagList={['React', 'Styled-Components', 'Netlify']}
            />
          </div>
        </section>
      </main>
    </Layout>
  )
}
