import React from 'react'
import { Button } from 'react-bootstrap'

import HomeCard from '../components/HomeCard'

import '../style/HomeStyle.css'

function Home() {
    return (
        <div className="Home">
            <HomeCard />
            <div className="aboutme">
                <h1>Hello</h1>
                <h2>CS - It's not work if it's fun</h2>
                <span className="links">
                    <a href="/cv"><Button>CURRICULUM VITAE</Button></a>
                    <a href="/projects"><Button variant="secondary">PROJECTS</Button></a>
                </span>
                <p>I am a second year Master's student in Computer Science looking for an internship to expand my knowledge and experience in machine learning, image processing, or both, using the skills I have developed through projects in my spare time, work experience, and at university. (From the length of the sentence you can probably already guess that I am from Germany.)</p>
            </div>
        </div>
    );
}

export default Home
