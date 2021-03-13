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
                        <li>Natural Language Processing and Image Processing with Machine Learning</li>
                        <li>Python, Java, JS, C, Assembly</li>
                        <li>NoSQL, SQL, middleware with REST</li>
                        <li>Software architecture/design</li>
                    </ul>
                </div>
                <div>
                    <h5>language</h5>
                    <ul>
                        <li>German (mother language)</li>
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
