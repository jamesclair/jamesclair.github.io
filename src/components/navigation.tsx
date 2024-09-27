import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from "react-router-dom";
import linkedin from "../images/linkedin.svg"
import email from "../images/email.svg"
import phone from "../images/telephone.svg"
import github from "../images/github.svg"
import styles from './navigation.module.css'
import '../index.scss';

// Define the props type for the CustomNavLink, using Nav.Link's props as base
type CustomNavLinkProps = React.ComponentProps<typeof Nav.Link> & {
    active?: boolean; // Optional prop for active state
};

const CustomNavLink: React.FC<CustomNavLinkProps> = ({ active, ...props }) => (
    <Nav.Link {...props} className={styles['nav-link']} />
);

function Navigation() {
    return (
        <Navbar expand='lg'>
            <Container fluid>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
                <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-lg`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
                    placement="end"
                    style={{ color: 'transparent' }}
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                            Menu
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body style={{ color: 'transparent' }}>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="gradient-text">
                                <CustomNavLink as={Link} to="/">Home</CustomNavLink>
                                <CustomNavLink as={Link} to="/portfolio">Portfolio</CustomNavLink>
                                <CustomNavLink as={Link} to="/resume">Resume</CustomNavLink>
                                <CustomNavLink as={Link} to="/blog">Blog</CustomNavLink>
                            </Nav>
                            <Nav className="ms-auto">
                                <Nav.Link href='https://github.com/jamesclair'>
                                    <img src={github} alt="Bootstrap" width="35" height="35" style={{ background: 'linear-gradient(to right, #b588fc, #a891ff, #9b99ff, #91a1ff, #88a7ff, #7cb0ff, #73b8ff, #6fc0ff, #68cbff, #66d6ff, #6ce0ff, #77eafd)' }}></img>
                                </Nav.Link>
                                <Nav.Link href='https://www.linkedin.com/in/jamesclair'>
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