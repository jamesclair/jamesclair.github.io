import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
} from './layout.module.css'
import { StaticImage } from 'gatsby-plugin-image'


const Layout = ({ pageTitle, children }) => {
    const data = useStaticQuery(
      graphql`query {
        site {
          siteMetadata {
            title
          }
        }
      }`
    )
    return (
      <div className={container} style={{  }}>
        <div>
          <nav>
            <ul className={navLinks}>
              <li className={navLinkItem}><Link to="/" className={navLinkText}>Home</Link></li>
              <li className={navLinkItem}><Link to="/about" className={navLinkText}>About</Link></li>
            </ul>
          </nav>
          <StaticImage
              alt="My profile picture."
              src="../images/ProfilePic.jpg"
              width={200}
              height={250}
              imgStyle={{ borderRadius: '100%' }}
          />
          <header className={siteTitle}>{data.site.siteMetadata.title}</header>
        </div>
        <div>

          <main>
            <h1 className={heading}>{pageTitle}</h1>
            {children}
          </main>
        </div>

      </div>
    )
  }

export default Layout