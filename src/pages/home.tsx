import React from 'react'

import Layout from '../components/layout'
import styles from './home.module.css'
import avatar from '../images/newZealand.jpg';

const WelcomeMessage: string = "A professional Cloud Software Engineer with over 18 years experience.  I'm also a husband to my beautiful wife Pren, a certified cat dad, and an avid travel junkie. For more about me and my love for all things tech, check out my portfolio, blog, resume, and about me."

const Home: React.FC = () => {
    return (
        <Layout>
            <>
                <div className={styles['welcome-message']}>
                    <h1>Welcome, I'm Jim Clair</h1>
                    <p className={styles['welcome-paragraph']}>{WelcomeMessage}</p>
                </div>
                <img
                    alt="A picture of me in New Zealand looking out over a lake made by a glacier."
                    src={avatar}
                    width='100%'
                />
            </>
        </Layout>
    )
}

export const Head = (): JSX.Element => <title>Home Page</title>
export default Home