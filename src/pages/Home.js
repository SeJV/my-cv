import React from 'react'
import { Button } from 'react-bootstrap'

import HomeCard from '../components/HomeCard'

import '../style/HomeStyle.css'

const Home = () => {
    return (
        <div className="Home">
            <HomeCard />
            <div className="aboutme">
                <h2 className="quote"><i>True happiness comes from closing 100 tabs after solving an obscure programming bug.</i></h2>
                <span className="links">
                    <a href="/cv"><Button>CURRICULUM VITAE</Button></a>
                    <a href="/projects"><Button variant="secondary">PROJECTS</Button></a>
                </span>
                <p>I am a second year Master's student in Computer Science looking for an opportunity to expand my knowledge and experience in machine learning, image processing, or both, applying the skills I have developed through work experience, at university and projects in my spare time. (From the length of the sentence you can probably already guess that I am from Germany.)</p>
            </div>
        </div>
    )
}

export default Home
