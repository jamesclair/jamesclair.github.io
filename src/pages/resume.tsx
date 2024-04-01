import React from 'react'
import styles from './resume.module.css'

import Layout from '../components/layout'
import ResumeComponent from '../components/resume'



const Resume: React.FC = () => {
    return (
        <Layout>
            {/* <iframe src="/resume.html" title="Embedded Resume HTML" className={styles['resume-iframe']}>
                Your browser does not support iframes and therfore will not be able to view my resume from this page, use the download link above to get the pdf version instead.
            </iframe> */}
            <ResumeComponent></ResumeComponent>
        </Layout>
    )
}

export const Head = (): JSX.Element => <title>Resume Page</title>
export default ResumeComponent