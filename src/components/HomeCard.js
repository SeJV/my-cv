import React from 'react'

import myImage from '../img/Me.JPG'
import Socials from './Socials'

import '../style/HomeCardStyle.css'

const HomeCard = () => {
    return (
        <div className="HomeCard">
            <div className="padder">
                <img src={myImage} alt="Picture of me" />
                <h3>Sebastian</h3>
                <h3>Vogt</h3>
                <div className="splitter" />
                <h4>Computer Scientist</h4>
            </div>
            <Socials />
        </div>
    )
}

export default HomeCard
