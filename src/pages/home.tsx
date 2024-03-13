import React from 'react'

import Layout from '../components/layout'
import styles from './home.module.css'
import avatar from '../images/newZealand.jpg';



const Home: React.FC = () => {
    return (
        <Layout>
            <>
                <div className={styles['welcome-message']}>
                    <h1>Welcome, I'm James Clair</h1>
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