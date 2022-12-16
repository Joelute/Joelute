import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/index.module.css'
import Layout from '../components/Layout'
import Project from '../components/elements/Project/Project'
import profile from '../public/profile.jpg'
import Tag from '../components/elements/Tag/Tag'

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
            <div className={styles['about-description']}>
              <h3 className={styles['about-description-text']}>Hello, I&apos;m Joseph Ho and I am a frontend developer based out of Toronto, Canada. I love building apps that solve real-world problems, and that are delightful to use. My specialities include Python, Javascript, React JS, and Styled Components.</h3>
              
            </div>
            <div className={styles['about-content']}>
              <div className={styles['about-content-me']}>
                <h2>Get to know me!</h2>
                <p>My background is in teaching and marketing. I have a bachelors degree in English from Kings College. When I'm not coding, I take care of my five adorable cats.</p>
                <h4 className={styles['about-description-more']}>Learn more about me</h4>
              </div>
              <div className={styles['about-content-skill']}>
                <h2>My Skills</h2>
                <div className={styles['about-content-tag']}>
                  <Tag>React</Tag>
                  <Tag>React</Tag>
                  <Tag>React</Tag>
                  <Tag>React</Tag>
                </div>
              </div>
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
            />
          </div>
        </section>
        
      </main>
      <footer className={styles.footer}>
        <Link href={'https://www.linkedin.com/in/joelute/'}><i class="uil uil-linkedin"></i></Link>
        <Link href={'https://github.com/Joelute'}><i class="uil uil-github"></i></Link>
      </footer>
    </Layout>
  )
}
