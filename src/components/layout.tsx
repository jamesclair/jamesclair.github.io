import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';

import Navigation from '../components/navigation'

export type LayoutProps = { children: JSX.Element }
class Layout extends Component<LayoutProps> {
  render() {
    const { children } = this.props;
    return (
      <Container>
        <Row>
          <Col>
            <Alert variant="warning">
              This website is under construction, if you stumbled here early please bookmark me and come back for a visit in the near future for more content.
            </Alert>
            <Navigation></Navigation>
            {children}
          </Col >
        </Row >
      </Container >
    )
  }
}

export default Layout