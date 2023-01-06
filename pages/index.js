import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/index.module.css'
import Layout from '../components/Layout'
import Project from '../components/elements/Project/Project'
import profile from '../public/profile.jpg'
import Tag from '../components/elements/Tag/Tag'
import { useEffect, useRef } from 'react'
import { Button } from '../components/elements/Button/Button'

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show')
        }
      });
    })

    const hiddenElements = document.querySelectorAll('.hidden') 
    hiddenElements.forEach((element) => {
      observer.observe(element)
    })
  }, [])
  

  

  return (
    <Layout pageName={'Home'}>
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
        <section className={`${styles.about} hidden`} id='about'>
          <h1 className={`${styles['unique-font']}`}>About</h1>
          <div className={styles['about-container']}>
            <div className={styles['about-description']}>
              <p className={styles['about-description-text']}>Hello, I&apos;m Joseph Ho and I am a frontend developer based out of Toronto, Canada. I love building apps that solve real-world problems, and that are delightful to use. I am a curious and enthusiastic learner who loves experimenting things along the way.</p>
              
            </div>
            <div className={styles['about-content']}>
              <div className={styles['about-content-me']}>
                <h2>Get to know me!</h2>
                <p>While I&apos;m not coding, I absolutely enjoy exploring and checking out new tech products, spending time with family and friends, and playing games with others. I also love meeting new people!</p>
                <p className={styles['about-description-more']}>Nice to meet you!</p>
              {/*
                <h4 className={styles['about-description-more']}>Learn more about me</h4>
              */}
              </div>
              <div className={styles['about-content-skill']}>
                <h2>My Skills</h2>
                <div className={styles['about-content-tag']}>
                  <Tag>CSS</Tag>
                  <Tag>HTML</Tag>
                  <Tag>Javascript</Tag> 
                  <Tag>MongoDB</Tag>
                  <Tag>Next.js</Tag>
                  <Tag>Node.js</Tag>
                  <Tag>PostgresSQL</Tag>
                  <Tag>Python</Tag>
                  <Tag>React</Tag>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id='project' className={`${styles.project} hidden`}>
          <h1 className={`${styles['unique-font']}`}>Projects</h1>
          <div className={styles['project-container']}>
            <Project 
              name='Zulip'
              description ='Zulip is an open-source team collaboration tool that combines the
                            best of email threading modal and real-time chat. Organized to 
                            help you collaborate productively and efficiently.'
              siteLink={'https://zulip.com/'}
              projectLink='/projects/zulip'
              image={'Zulip.png'}
              /*             
              githubLink='https://github.com/Joelute/Discord-in-Time'
              */
            />
            <Project 
              name='Discord in Time'
              description='Discord in Time is a Discord timestamp generator that allows users
                          to select their desired time get a code with timestamp to empower
                          their messages and annocements on Discord'

              siteLink={'https://discordintime.vercel.app/'}
              projectLink='/projects/discordintime'
              image={'DiscordInTime.png'}
              /*             
              githubLink='https://github.com/Joelute/Discord-in-Time'
              */
            />
            <Project
              name='React with Scrimba'
              description='React with Scrimba is a showcase of solo projects that I made while learning
                           With Scrimba'
              siteLink={'https://joelute.netlify.app/'}
              projectLink='https://joelute.netlify.app/'
              image={'ReactWithScrimba.png'}
              /*
              projectLink='/projects/scrimba'
              demoLink=
              githubLink='https://github.com/Joelute/Scrimba-react'
              */
            />
          </div>
        </section>
        <section id='contact' className={`${styles.contact} hidden`}>
          <h1 className={`${styles['unique-font']}`}>Contact</h1>
            <p>Want to have a chat? Let&apos;s connect!</p>
            <form className={styles['contact-form']} action="https://formsubmit.co/27bdb5b97aebaf9e4a0c9861ffee4a53" method="POST">
              <input type="text" name="name" placeholder="Name" required/>
              <input type="email" name="email" placeholder="Email" required/>
              <textarea name="content" placeholder="Enter your content here" required></textarea>
              <Button 
                type="submit" 
                content={'Send'} 
                scroll={false}
                color='white'
                backgroundcolor='#FE8686'>
              </Button>
            </form>
        </section>
      </main>
    </Layout>
  )
}
