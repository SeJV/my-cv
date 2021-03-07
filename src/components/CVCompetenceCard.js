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
                        <li>Excellent: Python, Java, JS</li>
                        <li>Good: C++, C, Assembly</li>
                        <li>Good: MongoDB and MySQL</li>
                        <li>Data Science, Machine Learning and Image Processing with
                            <ul>
                                <li>Numpy</li>
                                <li>Tensorflow</li>
                                <li>Matlab</li>
                                <li>scikit-learn</li>
                            </ul>
                        </li>
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
