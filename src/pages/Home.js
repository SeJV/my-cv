import React from 'react'
import { Button } from 'react-bootstrap'

import HomeCard from '../components/HomeCard'

import '../style/HomeStyle.css'

function Home() {
    return (
        <div className="Home">
            <HomeCard />
            <div className="aboutme">
                <h2 className="quote"><i>"True happiness comes from closing 100 tabs after solving an obscure programming bug."</i></h2>
                <h3 className="author"> - a wise guy on reddit</h3>
                <span className="links">
                    <a href="/cv"><Button>CURRICULUM VITAE</Button></a>
                    <a href="/projects"><Button variant="secondary">PROJECTS</Button></a>
                </span>
                <p>I am a third year Master's student in Computer Science looking for an opertunity to expand my knowledge and experience in machine learning, image processing, or both, using the skills I have developed through projects in my spare time, work experience, and at university. (From the length of the sentence you can probably already guess that I am from Germany.)</p>
            </div>
        </div>
    );
}

export default Home
