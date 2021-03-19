import React from 'react'

import ProjectCard from '../components/ProjectCard'
import FunImage from '../img/Me2.JPG'
import RFExample from '../img/RFExample.png'
import RFExampleWide from '../img/RFExampleWide.png'
import BTEval from '../img/BTEval.png'
import BTEvalWide from '../img/BTEvalWide.png'
import Combiner from '../img/Combiner.png'

import '../style/ProjectStyle.css'



const Projects = () => {
    return (
        <div className="Projects">
            <div className="content">
                <h1>Projects</h1>
                <p className="quote"><i>There is never a moment when I don't have at least one project going on. For university, work, in my spare time or all at the same time. I love learning by doing and to reinforce it with theoretical basics. Always open for new ideas.</i></p>
                <ProjectCard>
                    <h4>Comparison of reinforcement learning approaches</h4>
                    <p>I implemented part of the most reinforcement learning methods. Their functionality is demonstrated and compared to each other. This project can be used to find the right algorithm for a given problem as well as the best fitting hyperparameters. This can be found on my <u><a href="https://www.github.com/SeJV/ComparisonRLApproaches" target="_blank" rel="noreferrer">github</a></u>.</p>
                    <img className="notWide" src={RFExample} alt="Monte Carlo Tree Search visualized" />
                    <img className="wide"  src={RFExampleWide} alt="Monte Carlo Tree Search visualized" />
                </ProjectCard>
                <ProjectCard>
                    <h4>Testing of the practicability of training neural networks on a smartphone</h4>
                    <p>As part of my Bachelor´s thesis I explored the limits of the neural engine on a smartphone processor, and evaluated the practicality within those limits. My main focus was on image processing and Convolutional Neural Networks.</p>
                    <img className="notWide" src={BTEval} alt="Convolutional Neural Network" />
                    <img className="wide" src={BTEvalWide} alt="Convolutional Neural Network" />
                </ProjectCard>
                <ProjectCard>
                    <h4>Development of a combination tool for material databases</h4>
                    <p>My work in this project involved developing a tool to combine the access of multiple material research APIs. It unifies the process and merges the results. These are getting cached, creating a small database of its own that can be accessed faster and with fewer restrictions. Can be found on my <u><a href="https://github.com/SeJV/MaterialsCombiner" target="_blank" rel="noreferrer">github</a></u>.</p>
                    <img src={Combiner} alt="Materials Combiner" />
                </ProjectCard>
                <ProjectCard>
                    <h4>Website development and Fun</h4>
                    <p>I have already developed many single page websites like this one. Also fullstack websites were developed, with a Flask or Nodejs middleware and SQL or NoSQL as database. This skill is very valuable for the implementation of "shower thoughts".
                        During the process, keeping up the fun is essential for mantaining high motivation and success.</p>
                    <img src={FunImage} alt="Fun" />
                </ProjectCard>
            </div>
        </div>
    )
}

export default Projects
