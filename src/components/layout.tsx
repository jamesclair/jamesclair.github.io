import avatar from '../images/ProfilePic.jpg';
import React, { Component } from 'react';
import styles from './layout.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export type LayoutProps = { pageTitle: string, textColor: string, children: JSX.Element }
class Layout extends Component<LayoutProps> {
  render() {
    const { pageTitle, children } = this.props;
    return (
      <Container>
        <Row>
          <Col>
            <div className={styles.container}>
              <img
                alt="My profile picture."
                src={avatar}
                width={400}
              />
              <main className={styles.header}>
                <h1>{pageTitle}</h1>
                <div className={styles.text}>
                  {children}
                </div>
              </main>
            </div>
          </Col >
        </Row >
      </Container >
    )
  }
}

export default Layout