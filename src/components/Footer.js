import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillHeart } from 'react-icons/ai'

import Socials from './Socials'

import '../style/FooterStyle.css'

const Footer = () => {
    return (
        <div className="Footer">
            <span className="impr"><Link to="/impressum">Impressum</Link>
                <p>© 2021 Sebastian Vogt. Created with <AiFillHeart/></p></span>
            <div className="contacts">
                <span><h5>E-Mail</h5><a href="mailto:sebastian1210@web.de">sebastian1210@web.de</a></span>
                <span><h5>Socials</h5><Socials /></span>
            </div>
        </div>
    )
}

export default Footer