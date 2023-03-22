import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPatreon } from '@fortawesome/free-brands-svg-icons'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

function NavBar() {
    return (
        <Navbar expand="lg">
        <Container>
            <Navbar.Brand href="#home">Katawa Shoujo: Stories Beyond</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#scrollAbout"><FontAwesomeIcon icon={faHeart} />  About</Nav.Link>
                <Nav.Link href="#scrollDownload"><FontAwesomeIcon icon={faDownload} />  Download</Nav.Link>
                <Nav.Link href="https://www.patreon.com/KyleDaBoss"><FontAwesomeIcon icon={faPatreon} />  Support Us</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    );
}

export default NavBar;