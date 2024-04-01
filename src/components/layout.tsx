import { Component } from 'react';
import Container from 'react-bootstrap/Container';

import Navigation from '../components/navigation'

export type LayoutProps = { children: JSX.Element }
class Layout extends Component<LayoutProps> {
  render() {
    const { children } = this.props;
    return (
      <Container>
        <Navigation></Navigation>
        {children}
      </Container >
    )
  }
}

export default Layout
