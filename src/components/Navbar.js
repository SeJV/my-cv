import React from 'react';
import { Navbar as BSNavbar, Nav } from 'react-bootstrap'
import { withRouter } from 'react-router'

const Navbar = props => {
    const { location } = props;
    return (
        <div className="Navbar">
            <BSNavbar bg="light" expand="md">
                <BSNavbar.Brand href="/" eventKey="0">Sebastian Vogt</BSNavbar.Brand>
                <BSNavbar.Toggle aria-controls="responsive-navbar-nav" />
                <BSNavbar.Collapse id="basic-navbar-nav">
                    <Nav activeKey={location.pathname}>
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/cv">CV</Nav.Link>
                        <Nav.Link href="/projects">Projects</Nav.Link>
                    </Nav>
                </BSNavbar.Collapse>
            </BSNavbar>
        </div>
    );
}

export default withRouter(Navbar);
