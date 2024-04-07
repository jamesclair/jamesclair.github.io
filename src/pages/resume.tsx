import React from 'react'

import styles from './resume.module.css'
import Layout from '../components/layout'
import ResumeComponent from '../components/resume'



const Resume: React.FC = () => {
    return (
        <div className={styles['resume-page']}>
            <Layout>
                <ResumeComponent></ResumeComponent>
            </Layout>
        </div>

    )
}

export const Head = (): JSX.Element => <title>Resume Page</title>
export default ResumeComponent