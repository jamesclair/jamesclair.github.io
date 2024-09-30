import React from 'react'

import Layout from '../components/layout'
import styles from './home.module.css'
import me from '../images/colorado.jpg'
import linkedin from "../images/linkedin.svg"
import email from "../images/email.svg"
import phone from "../images/telephone.svg"
import github from "../images/github.svg"

import '../index.scss';

const WELCOME_MSG: string = `
I'm an Enterprise Cloud, Platform, and Software Engineer with a rich journey of over 20 years in the tech industry. My expertise lies in cloud-native platforms, microservice architectures, enterprise infrastructure, and scalable data pipelines. I pride myself on being a problem-solver at heart, always eager to tackle complex challenges and continually learning about new technologies.

Beyond my professional persona, I'm a dedicated husband to my wonderful wife, Pren, a proud certified cat dad, and an avid travel enthusiast. These personal passions enrich my life and often provide a fresh perspective on my professional endeavors.
`

const EXPERTISE_PREFIX_MSG: string = `
While I have a comprehensive background in many languages, tools and technologies across software engineering, operations, and security, disciplines.  These are likely my most recent top 10:
`

const EXPERTISE_SUFFIX_MSG: string = `
For a full list, please visit my Resume or LinkedIn.  My experience in various aspects of software engineering enables me to lead projects successfully, mentor teams towards excellence, and shape cloud architecture to unlock its full potential.
`
const ENGAGE_MSG: string = `
Curious about my work and insights? Explore my:
`
const PORTFOLIO_DESC: string = `My GitHub portfolio for a deeper-dive into my projects and accomplishments.`
const BLOG_DESC: string = `Where I share my thoughts on the latest in technology and personal adventures.`
const RESUME_DESC: string = `detailed look at my professional journey and skillset.`

const CONNECT_MSG: string = `
Whether you're looking for a seasoned engineering leader to elevate your project or just want to chat about the latest in cloud technology, feel free to reach out. I'm always open to discussing new ideas or potential collaborations.
`

const Home: React.FC = () => {
    return (
        <Layout>
            <center>
                <div style={{ maxWidth: '900px' }}>
                    <div className={styles['welcome-message']}>
                        <h1 className='gradient-text'>Welcome, I'm James Clair</h1>
                    </div>
                    <img
                        alt="A picture of me."
                        src={me}
                        width='400px'
                    />
                    <br />
                    <br />
                    <p style={{ color: 'LightGray' }}>{WELCOME_MSG}</p>
                    <h2 className='gradient-text'>Professional Expertise</h2>
                    <p style={{ color: 'LightGray' }}>{EXPERTISE_PREFIX_MSG}</p>
                    <div style={{ display: 'inline-flex', textAlign: 'left' }}>
                        <ul style={{ color: 'LightGray' }}>
                            <li>Python</li>
                            <li>Amazon Web Services (AWS)</li>
                            <li>ArgoCD</li>
                            <li>Crossplane</li>
                            <li>OpenSearch</li>
                        </ul>
                        <ul style={{ color: 'LightGray' }}>
                            <li>Kubernetes</li>
                            <li>PostgreSQL</li>
                            <li>JavaScript</li>
                            <li>Terraform</li>
                            <li>Bash</li>
                        </ul>
                    </div>
                    <p style={{ color: 'LightGray' }}>{EXPERTISE_SUFFIX_MSG}</p>
                    <h2 className='gradient-text'>Engage with My Work</h2>
                    <p style={{ color: 'LightGray' }}>{ENGAGE_MSG}</p>
                    <div style={{ display: 'inline-block', textAlign: 'left' }}>
                        <ul style={{ color: 'LightGray' }}>
                            <li><a href="/#/portfolio">Portfolio:</a>{" " + PORTFOLIO_DESC}</li>
                            <li><a href="/#/resume">Resume:</a>{" " + RESUME_DESC}</li>
                            <li><a href="/#/blog">Blog:</a>{" " + BLOG_DESC}</li>
                        </ul>
                    </div>
                    <h2 className='gradient-text'>Let's Connect</h2>
                    <p style={{ color: 'LightGray' }}>{CONNECT_MSG}</p>
                    <a href='https://github.com/jamesclair'>
                        <img src={github} alt="Bootstrap" width="50" height="50" style={{ background: 'linear-gradient(to right, #b588fc, #a891ff, #9b99ff, #91a1ff, #88a7ff, #7cb0ff, #73b8ff, #6fc0ff, #68cbff, #66d6ff, #6ce0ff, #77eafd)', marginRight: '10px', marginLeft: '10px' }}></img>
                    </a>
                    <a href='https://www.linkedin.com/in/jamesclair'>
                        <img src={linkedin} alt="Bootstrap" width="50" height="50" style={{ background: 'linear-gradient(to right, #b588fc, #a891ff, #9b99ff, #91a1ff, #88a7ff, #7cb0ff, #73b8ff, #6fc0ff, #68cbff, #66d6ff, #6ce0ff, #77eafd)', marginRight: '10px', marginLeft: '10px' }}></img>
                    </a>

                    <a href='mailto:clair.james88@gmail.com'>
                        <img src={email} alt="Bootstrap" width="50" height="50" style={{ background: 'linear-gradient(to right, #b588fc, #a891ff, #9b99ff, #91a1ff, #88a7ff, #7cb0ff, #73b8ff, #6fc0ff, #68cbff, #66d6ff, #6ce0ff, #77eafd)', marginRight: '10px', marginLeft: '10px' }}></img>
                    </a>
                    <a href='tel:19136459996'>
                        <img src={phone} alt="Bootstrap" width="50" height="50" style={{ background: 'linear-gradient(to right, #b588fc, #a891ff, #9b99ff, #91a1ff, #88a7ff, #7cb0ff, #73b8ff, #6fc0ff, #68cbff, #66d6ff, #6ce0ff, #77eafd)', marginRight: '10px', marginLeft: '10px' }}></img>
                    </a>
                    <br></br>
                    <br></br>
                </div>
            </center>
        </Layout>
    )
}

export const Head = (): JSX.Element => <title>Home Page</title>
export default Home