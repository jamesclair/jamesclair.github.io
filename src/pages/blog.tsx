import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

import '../index.scss'
import Layout from '../components/layout'
import MarkdownHeaderComponent from '../components/markdownHeader';
import MarkdownFirstParagraphComponent from '../components/markdownFirstParagraph';
import EventProcessingServiceArchitecture from '../docs/EventProcessingServiceArchitecure.md'
import OlapOlepOltpAndDataMeshes from '../docs/OLAP_OLEP_OLTP_And_DataMeshes.md'
import EventProcessingArchitectureImage from '/EventProcessingArchitecture.png'


function Blog() {
    return (
        <Layout>
            <Container>
                <Row md={3} >
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={EventProcessingArchitectureImage} />
                            <Card.Body>
                                <MarkdownHeaderComponent mdxContent={EventProcessingServiceArchitecture}></MarkdownHeaderComponent>
                                <hr></hr>
                                <MarkdownFirstParagraphComponent mdxContent={EventProcessingServiceArchitecture}></MarkdownFirstParagraphComponent>
                                <Button variant="outline-info"><Link to='/eventarchitecture'>Go to Article</Link></Button>
                            </Card.Body>
                        </Card>
                    </Col >
                    <Col>
                        <Card>
                            <Card.Body>
                                <MarkdownHeaderComponent mdxContent={OlapOlepOltpAndDataMeshes}></MarkdownHeaderComponent>
                                <hr></hr>
                                <MarkdownFirstParagraphComponent mdxContent={OlapOlepOltpAndDataMeshes}></MarkdownFirstParagraphComponent>
                                <Button variant="outline-info"><Link to='/databasearchitectures'>Go to Article</Link></Button>
                            </Card.Body>
                        </Card>
                    </Col >
                </Row >
            </Container >
        </Layout >
    );
}

export default Blog;