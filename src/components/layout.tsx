import { Component } from 'react';
import Container from 'react-bootstrap/Container';

import styles from './layout.module.css'
import Navigation from '../components/navigation'

export type LayoutProps = { children: JSX.Element }
class Layout extends Component<LayoutProps> {
  render() {
    const { children } = this.props;
    return (
      <Container fluid className={styles['container-box']} >
        <div className={styles['navigation-box']}>
          <Navigation></Navigation>
        </div>
        {children}
      </ Container >
    )
  }
}

export default Layout
