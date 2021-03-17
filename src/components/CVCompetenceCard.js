import React from 'react'

import '../style/CVCompetenceCardStyle.css'

const CVCompetenceCard = () => {
    return (
        <div className="CVCompetenceCard">
            <h4>Skills</h4>
            <div className="skills">
                <div>
                    <h5>professional</h5>
                    <ul>
                        <li>Image Processing, Reinforcement Learning and Natural Language Processing</li>
                        <li>Python, Java, JS, C, Assembly</li>
                        <li>NoSQL, SQL, middleware with REST</li>
                        <li>Software architecture and design</li>
                    </ul>
                </div>
                <div>
                    <h5>language</h5>
                    <ul>
                        <li>German (native language)</li>
                        <li>English C1</li>
                    </ul>
                </div>
            </div>
            <div className="hobbies">
                <h5>hobbies</h5>
                <ul>
                    <li>Sports, like jogging and playing soccer</li>
                    <li>Making electronic music</li>
                    <li>Coding for fun</li>
                </ul>
            </div>
        </div>
    )
}

export default CVCompetenceCard
