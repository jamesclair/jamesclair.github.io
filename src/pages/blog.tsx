import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Markdown from 'react-markdown'
import article from '../docs/EventProcessingServiceArchitecure.md'
import resume from '../docs/resume/resume.html'

import Layout from '../components/layout'

function createMarkup() {
    return { __html: resume };
}


function Blog() {
    return (
        <Layout>
            <Container>
                <Row>
                    <Col>
                        <Markdown>{article}</Markdown>
                    </Col >
                    <Col>
                        <div dangerouslySetInnerHTML={createMarkup()} />
                    </Col >
                    <Col>
                    </Col >
                </Row >
            </Container >
        </Layout>
    );
}

export default Blog;