import React from 'react'

import Layout from '../components/layout'
import me from '../images/wedding.jpg'
import linkedin from "../images/linkedin.svg"
import email from "../images/email.svg"
import phone from "../images/telephone.svg"
import github from "../images/github.svg"

const welcomeMessage: string = `
Hi, I'm James!

I'm a professional Cloud Platform Software Engineer with a rich journey of over 18 years in the tech industry. My expertise lies in cloud-native platforms, microservice architectures, enterprise infrastructure, and scalable data pipelines. I pride myself on being a problem-solver at heart, always eager to tackle complex challenges and continually learning about new technologies.

Beyond my professional persona, I'm a dedicated husband to my wonderful wife, Pren, a proud certified cat dad, and an avid travel enthusiast. These personal passions enrich my life and often provide a fresh perspective on my professional endeavors.
`

const expertisePrefixMessage: string = `
While I have a comprehensive background in many languages, tools and technologies across software engineering, operations, and security, disciplines.  These are likely my most recent top 5:
`

const expertiseSuffixMessage: string = `
For a full list, please visit my Resume or LinkedIn.  My experience in various aspects of software engineering enables me to lead projects successfully, mentor teams towards excellence, and shape cloud architecture to unlock its full potential.
`
const engageMessage: string = `
Curious about my work and insights? Explore my:
`
const portfolioDesc: string = `My GitHub portfolio for a deeper-dive into my projects and accomplishments.`
const blogDesc: string = `Where I share my thoughts on the latest in technology and personal adventures.`
const resumeDesc: string = `detailed look at my professional journey and skillset.`

const connectMessage: string = `
Whether you're looking for a seasoned engineering leader to elevate your project or just want to chat about the latest in cloud technology, feel free to reach out. I'm always open to discussing new ideas or potential collaborations.
`


const Resume: React.FC = () => {
    return (
        <Layout>
            <center>
                <h1>About Me</h1>
                <img
                    alt="A picture of me during my wedding in front of snowy mountains."
                    src={me}
                    width='40%'
                />
                <br />
                <br />
                <p style={{ color: 'LightGray' }}>{welcomeMessage}</p>
                <h2>Professional Expertise</h2>
                <p style={{ color: 'LightGray' }}>{expertisePrefixMessage}</p>
                <div style={{ display: 'inline-block', textAlign: 'left' }}>
                    <ul style={{ color: 'LightGray' }}>
                        <li>Python</li>
                        <li>Amazon Web Services (AWS)</li>
                        <li>Kubernetes</li>
                        <li>PostgreSQL</li>
                        <li>Terraform</li>
                    </ul>
                </div>
                <p style={{ color: 'LightGray' }}>{expertiseSuffixMessage}</p>
                <h2>Engage with My Work</h2>
                <p style={{ color: 'LightGray' }}>{engageMessage}</p>
                <div style={{ display: 'inline-block', textAlign: 'left' }}>
                    <ul style={{ color: 'LightGray' }}>
                        <li><a href="/#/portfolio">Portfolio:</a>{" " + portfolioDesc}</li>
                        <li><a href="/#/resume">Resume:</a>{" " + resumeDesc}</li>
                        <li><a href="/#/blog">Blog:</a>{" " + blogDesc}</li>
                    </ul>
                </div>
                <h2>Let's Connect</h2>
                <p style={{ color: 'LightGray' }}>{connectMessage}</p>
                <a href='https://github.com/jamesclair'>
                    <img src={github} alt="Bootstrap" width="60" height="60" style={{ background: 'linear-gradient(to right, #b588fc, #a891ff, #9b99ff, #91a1ff, #88a7ff, #7cb0ff, #73b8ff, #6fc0ff, #68cbff, #66d6ff, #6ce0ff, #77eafd)', marginRight: '10px', marginLeft: '10px' }}></img>
                </a>
                <a href='https://www.linkedin.com/in/jamesclair'>
                    <img src={linkedin} alt="Bootstrap" width="60" height="60" style={{ background: 'linear-gradient(to right, #b588fc, #a891ff, #9b99ff, #91a1ff, #88a7ff, #7cb0ff, #73b8ff, #6fc0ff, #68cbff, #66d6ff, #6ce0ff, #77eafd)', marginRight: '10px', marginLeft: '10px' }}></img>
                </a>

                <a href='mailto:clair.james88@gmail.com'>
                    <img src={email} alt="Bootstrap" width="60" height="60" style={{ background: 'linear-gradient(to right, #b588fc, #a891ff, #9b99ff, #91a1ff, #88a7ff, #7cb0ff, #73b8ff, #6fc0ff, #68cbff, #66d6ff, #6ce0ff, #77eafd)', marginRight: '10px', marginLeft: '10px' }}></img>
                </a>
                <a href='tel:19136459996'>
                    <img src={phone} alt="Bootstrap" width="60" height="60" style={{ background: 'linear-gradient(to right, #b588fc, #a891ff, #9b99ff, #91a1ff, #88a7ff, #7cb0ff, #73b8ff, #6fc0ff, #68cbff, #66d6ff, #6ce0ff, #77eafd)', marginRight: '10px', marginLeft: '10px' }}></img>
                </a>
                <br></br>
                <br></br>
            </center>
        </Layout>
    )
}

export const Head = (): JSX.Element => <title>Resume Page</title>
export default Resume