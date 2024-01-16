import * as React from 'react'
import Layout from '../components/layout'


const IndexPage: React.FC = () => {
  return (
    <main>
      <Layout pageTitle="Jim Clair">
        <p>Welcome to my Website.</p>
      </Layout>
    </main>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage