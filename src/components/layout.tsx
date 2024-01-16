import * as React from 'react'
import { Link } from 'gatsby'
import { Container } from '../styles/layout'


const Layout = ({ pageTitle, children }) => {
    return (
        <Container>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>
            <main>
                <h1>{pageTitle}</h1>
                {children}
            </main>
        </Container>
    )
}

export default Layout