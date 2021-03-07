import React from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { GrLinkedinOption } from 'react-icons/gr'
import { FaInstagram } from 'react-icons/fa'

import '../style/SocialsStyle.css'

const Socials = () => {
    return (
        <div className="Socials">
            <a href="https://github.com/SeJV" target="_blank" rel="noreferrer"><AiFillGithub /></a>
            <a href="https://www.linkedin.com/in/sebastian-vogt-120036174/" target="_blank" rel="noreferrer"><GrLinkedinOption /></a>
            <a href="https://www.instagram.com/sebigen/" target="_blank" rel="noreferrer"><FaInstagram /></a>
        </div>
    )
}

export default Socials
