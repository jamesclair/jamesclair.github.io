import { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import Layout from './layout'
import styles from './blogArticle.module.css'
import EventProcessingServiceArchitecture from '../docs/EventProcessingServiceArchitecure.md'
import OlapOlepOltpAndDataMeshes from '../docs/OLAP_OLEP_OLTP_And_DataMeshes.md'

const articleMap: Record<string, string> = {
    "EventProcessingServiceArchitecture.md": EventProcessingServiceArchitecture,
    "OLAP_OLEP_OLTP_And_DataMeshes.md": OlapOlepOltpAndDataMeshes,
}

export type BlogArticleProps = { articleTitle: string }
class BlogArticle extends Component<BlogArticleProps> {
    render() {
        const { articleTitle } = this.props;
        console.log(articleTitle)
        console.log(EventProcessingServiceArchitecture)
        let articleMarkdown: string = articleMap[articleTitle]
        console.log(articleMarkdown)
        return (
            <Layout>
                <ReactMarkdown className={styles.article}>{articleMarkdown}</ReactMarkdown>
            </Layout >
        )
    }
}

export default BlogArticle
