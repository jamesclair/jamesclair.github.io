import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from "react-router-dom";
import styles from './navigation.module.css'
import linkedin from "../images/linkedin.svg"
import email from "../images/email.svg"
import phone from "../images/telephone.svg"
import github from "../images/github.svg"
import '../index.scss';

function Navigation() {
    return (
        <Navbar expand='lg'>
            <Container fluid>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
                <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-lg`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
                    placement="end"
                >
                    <Offcanvas.Header closeButton className={styles['nav-header']}>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                            Menu
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="gradient-text">
                                <Nav.Link as={Link} to="/">Home</Nav.Link>
                                <Nav.Link as={Link} to="/portfolio">Portfolio</Nav.Link>
                                <Nav.Link as={Link} to="/resume">Resume</Nav.Link>
                                <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                                <Nav.Link as={Link} to="/about">About</Nav.Link>
                            </Nav>
                            <Nav className="ms-auto">
                                <Nav.Link href='https://github.com/jimclair'>
                                    <img src={github} alt="Bootstrap" width="35" height="35" style={{ background: 'linear-gradient(to right, #b588fc, #a891ff, #9b99ff, #91a1ff, #88a7ff, #7cb0ff, #73b8ff, #6fc0ff, #68cbff, #66d6ff, #6ce0ff, #77eafd)' }}></img>
                                </Nav.Link>
                                <Nav.Link href='https://www.linkedin.com/in/jim-clair'>
                                    <img src={linkedin} alt="Bootstrap" width="35" height="35" style={{ background: 'linear-gradient(to right, #b588fc, #a891ff, #9b99ff, #91a1ff, #88a7ff, #7cb0ff, #73b8ff, #6fc0ff, #68cbff, #66d6ff, #6ce0ff, #77eafd)' }}></img>
                                </Nav.Link>

                                <Nav.Link href='mailto:clair.james88@gmail.com'>
                                    <img src={email} alt="Bootstrap" width="35" height="35" style={{ background: 'linear-gradient(to right, #b588fc, #a891ff, #9b99ff, #91a1ff, #88a7ff, #7cb0ff, #73b8ff, #6fc0ff, #68cbff, #66d6ff, #6ce0ff, #77eafd)' }}></img>
                                </Nav.Link>
                                <Nav.Link href='tel:19136459996'>
                                    <img src={phone} alt="Bootstrap" width="35" height="35" style={{ background: 'linear-gradient(to right, #b588fc, #a891ff, #9b99ff, #91a1ff, #88a7ff, #7cb0ff, #73b8ff, #6fc0ff, #68cbff, #66d6ff, #6ce0ff, #77eafd)' }}></img>
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar >
    );
}

export default Navigation;