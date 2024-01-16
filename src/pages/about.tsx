import * as React from 'react'
import Layout from '../components/layout'

const AboutMe: string = "About Me"
const Greeting: string = "Greetings!  My name is Jim Clair"

const AboutPage = (): JSX.Element => {
    return (
        <main>
            <h1></h1>
            <Layout pageTitle={AboutMe}>
                <p>{Greeting}</p>
            </Layout>
        </main>
    )
}

//TODO: add more meta for SEO
export const Head = (): JSX.Element => <title>{AboutMe}</title>

export default AboutPage