import * as React from 'react'
import { Link } from 'gatsby'

const ABOUT_ME: string = "About Me"
const GREETING: string = "Greetings!  My name is Jim Clair"

const AboutPage = (): JSX.Element => {
    return (
        <main>
            <h1>{ABOUT_ME}</h1>
            <Link to="/">Back to Home</Link>
            <p>{GREETING}</p>
        </main>
    )
}

//TODO: add more meta for SEO
export const Head = (): JSX.Element => <title>{ABOUT_ME}</title>

export default AboutPage