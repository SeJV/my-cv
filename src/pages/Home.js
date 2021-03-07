import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

import HomeCard from '../components/HomeCard'

import '../style/HomeStyle.css'

function Home() {
    return (
        <div className="Home">
            <HomeCard />
            <div className="aboutme">
                <h1>Hello</h1>
                <h2>Who I am and what I do</h2>
                <span className="links">
                    <Link to="/cv"><Button>CURRICULUM VITAE</Button></Link>
                    <Link to="/projects"><Button variant="secondary">PROJECTS</Button></Link>
                </span>
                <p>I am a second year Masters student in Computer Science and am looking for an internship to develop my knowledge and experience in the field of machine learning, image processing or both and making use of the skills I have developed through projects in my spare time, work experience and at university.</p>
            </div>
        </div>
    );
}

export default Home
