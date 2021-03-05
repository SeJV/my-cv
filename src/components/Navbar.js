import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="Navbar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/cv">Curriculum Vitae</Link></li>
                <li><Link to="/projects">Projects</Link></li>
            </ul>
        </div>
    );
}

export default Navbar;
