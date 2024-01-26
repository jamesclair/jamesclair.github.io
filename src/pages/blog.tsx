import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import styles from './blog.module.css'
import '../index.scss'
import Layout from '../components/layout'
import MarkdownHeaderComponent from '../components/markdownHeader';
import MarkdownFirstParagraphComponent from '../components/markdownFirstParagraph';
import EventProcessingServiceArchitecture from '../docs/EventProcessingServiceArchitecure.md'
import Button from 'react-bootstrap/Button';


function Blog() {
    return (
        <Layout>
            <Container>
                <Row md={3} >
                    <Col>
                        <Card>
                            <Card.Img variant="top" src="/EventProcessingArchitecture.png" />
                            <Card.Body>
                                <MarkdownHeaderComponent mdxContent={EventProcessingServiceArchitecture}></MarkdownHeaderComponent>
                                <hr></hr>
                                <MarkdownFirstParagraphComponent mdxContent={EventProcessingServiceArchitecture}></MarkdownFirstParagraphComponent>
                                <Button variant="outline-info">Go to article</Button>
                            </Card.Body>
                        </Card>
                    </Col >
                    {/* <Col>
                        <Card style={{ height: '30rem', overflow: 'hidden' }}>
                            <Card.Img variant="top" src="/EventProcessingArchitecture.png" />
                            <Card.Body>
                                <Card.Text as='div'>
                                    <MarkdownComponent markdownFilePath='/EventProcessingServiceArchitecure.md'></MarkdownComponent>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col > */}
                    <Col>
                        <Card style={{ height: '20rem', overflow: 'hidden' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Text as='span'>
                                    <p>TBD...</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col >
                </Row >
            </Container >
        </Layout >
    );
}

export default Blog;