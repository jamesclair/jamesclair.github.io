import * as React from 'react'
import { profileImage } from './index.module.css'
import Layout from '../components/layout'

const WelcomeMessage = `I'm a professional with over 18 years of software engineering, operations and security.  I'm also a husband to my wonderful wife Pren, a certified cat dad, and an avid travel junkie.  Welcome to my website where I host my portfolio, resume, blog, and other interests.`

const IndexPage: React.FC = () => {
  return (
    <main>
      <Layout pageTitle="Hi, I'm Jim Clair">
        <p>{WelcomeMessage}</p>
      </Layout>
    </main>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage