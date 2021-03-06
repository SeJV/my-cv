import React from 'react'

import ProjectCard from '../components/ProjectCard'
import FunImage from '../img/Me2.JPG'
import RFExample from '../img/RFExample.png'
import BTEval from '../img/BTEval.png'


import '../style/ProjectStyle.css'



const Projects = () => {
    return (
        <div className="Projects">
            <div className="content">
                <h1>Projects</h1>
                <p>Small explanatory Text that describes my motivation</p>
                <ProjectCard>
                    <h4>Comparison of reinforcement learning approaches</h4>
                    <p>This repo is meant to showcase some approaches to solve discrete and continuous rl-environments. It also gives handy functions to initialize agents and compare their behaviour. Can be found on my <a href="https://www.github.com/SeJV/ComparisonRLApproaches">github</a>.</p>
                    <img src={RFExample} alt="Monte Carlo Tree Search visualized" />
                </ProjectCard>
                <ProjectCard>
                    <h4>Testing of the practicability of training neural networks on a smartphone</h4>
                    <p>As my bachelorthesis I tested the limits of the neural engine on a smartphone processor, and evaluated the practicality within those limits.</p>
                    <img src={BTEval} alt="Lake" />
                </ProjectCard>
                <ProjectCard>
                    <h4>Website development and Fun</h4>
                    <p>Developing multiple single page websites, such as this one. Otherwise I try to learn as much as possible in many different areas.
                    Keeping up the fun is the most important with all of this.</p>
                    <img src={FunImage} alt="Fun" />
                </ProjectCard>
            </div>
        </div>
    )
}

export default Projects
