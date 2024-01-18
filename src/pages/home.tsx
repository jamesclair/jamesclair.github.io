import React from 'react'
import Layout from '../components/layout'


const WelcomeMessage: string = "I'm a professional with over 18 years of software engineering, operations and security.  I'm also a husband to my wonderful wife Pren, a certified cat dad, and an avid travel junkie.  Welcome to my website where I host my portfolio, resume, blog, and other interests."

const Home: React.FC = () => {
    return (
        <main>
            <Layout pageTitle="Hi, I'm Jim Clair">
                <p>{WelcomeMessage}</p>
            </Layout>
        </main>
    )
}

export const Head = (): JSX.Element => <title>Home Page</title>
export default Home