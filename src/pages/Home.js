import React from 'react'
import { Link } from 'react-router-dom'

import HomeCard from '../components/HomeCard'

import '../style/HomeStyle.css'

function Home() {
    return (
        <div className="Home">
            <HomeCard />
            <div className="aboutme">
                <h1>Hello</h1>
                <h2>Who I am and what I do</h2>
                <Link to="/cv">Curriculum Vitae</Link>
                <Link to="/projects">Projects</Link>
                <p>Description Text about me</p>
            </div>
        </div>
    );
}

export default Home;
