import React from 'react';
import { Navbar as BSNavbar, Nav } from 'react-bootstrap'
import { withRouter } from 'react-router'
// Links not with react-router-dom: collapse of navbar is not trivial

import '../style/NavbarStyle.css'
import Square from '../img/Square'

const Navbar = props => {
    const { location } = props
    return (
        <div className="Navbar">
            <BSNavbar expand="md">
                <BSNavbar.Brand href="/" eventKey="0"><Square /><h3>Sebastian Vogt</h3> <h4> Computer Scientist</h4></BSNavbar.Brand>
                <BSNavbar.Toggle aria-controls="responsive-navbar-nav">
                    <svg className="burgericon" xmlns="http://www.w3.org/2000/svg" width="40" height="40">
                        <line id="firstbar" x1="10" y1="10" x2="30" y2="30"/>
                        <line id="secondbar" x1="10" y1="10" x2="30" y2="30"/>
                        <line id="thirdbar" x1="10" y1="30" x2="30" y2="10"/>
                    </svg>
                </BSNavbar.Toggle>
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
