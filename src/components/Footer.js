import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillHeart } from 'react-icons/ai'

import Socials from './Socials'

import '../style/FooterStyle.css'

const Footer = () => {
    return (
        <div className="Footer">
            <span className="impr"><Link to="/impressum">Impressum</Link>
            <p>© 2021 Sebastian Vogt. <a className='finLink' href="/finance">Created with <AiFillHeart/></a></p></span>
            <div className="contacts">
                <div><h5>E-Mail</h5><a href="mailto:vose1015@hs-karlsruhe.de">vose1015@hs-karlsruhe.de</a></div>
                <div><h5>Contact</h5><Socials /></div>
            </div>
        </div>
    )
}

export default Footer
