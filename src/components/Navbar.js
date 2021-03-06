import React from 'react';
import { Navbar as BSNavbar, Nav } from 'react-bootstrap'
import { withRouter } from 'react-router'

import '../style/NavbarStyle.css'
// Links not with react-router-dom: collapse of navbar is not trivial

const Navbar = props => {
    const { location } = props
    return (
        <div className="Navbar">
            <BSNavbar expand="md">
                <BSNavbar.Brand href="/" eventKey="0"><h3>Sebastian Vogt</h3> <h4> Computer Scientist</h4></BSNavbar.Brand>
                <BSNavbar.Toggle aria-controls="responsive-navbar-nav" />
                <BSNavbar.Collapse id="basic-navbar-nav">
                    <Nav activeKey={location.pathname}>
                        <Nav.Link href="/">HOME</Nav.Link>
                        <Nav.Link href="/cv">CV</Nav.Link>
                        <Nav.Link href="/projects">PROJECTS</Nav.Link>
                    </Nav>
                </BSNavbar.Collapse>
            </BSNavbar>
        </div>
    )
}

export default withRouter(Navbar)
