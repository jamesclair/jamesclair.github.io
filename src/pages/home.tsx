import React from 'react'
import Alert from 'react-bootstrap/Alert';

import Navigation from '../components/navigation'
import Layout from '../components/layout'


const WelcomeMessage: string = "I'm a professional with over 18 years of software engineering, operations and security.  I'm also a husband to my wonderful wife Pren, a certified cat dad, and an avid travel junkie.  Welcome to my website where I host my portfolio, resume, blog, and other interests."

const Home: React.FC = () => {
    return (
        <main>
            <Alert variant="warning">
                This website is under construction, if you stumbled here early please bookmark me and come back for a visit in the near future for more content.
            </Alert>
            <Navigation></Navigation>
            <Layout pageTitle="Hi, I'm Jim Clair" textColor='white'>
                <p>{WelcomeMessage}</p>
            </Layout>
        </main>
    )
}

export const Head = (): JSX.Element => <title>Home Page</title>
export default Home