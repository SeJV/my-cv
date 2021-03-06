import React from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { GrLinkedinOption } from 'react-icons/gr'
import { FaInstagram } from 'react-icons/fa'

import '../style/SocialsStyle.css'

const Socials = () => {
    return (
        <div className="Socials">
            <a href="https://github.com/SeJV"><AiFillGithub /></a>
            <a href="https://www.linkedin.com/in/sebastian-vogt-120036174/"><GrLinkedinOption /></a>
            <a href="https://www.instagram.com/sebigen/"><FaInstagram /></a>
        </div>
    )
}

export default Socials
