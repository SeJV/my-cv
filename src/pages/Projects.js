import React from 'react'

import ProjectCard from '../components/ProjectCard'

const Projects = () => {
    return (
        <div className="Projects">
            <div className="content">
                <h1>Projects</h1>
                <p>Small explanatory Text that describes my motivation</p>
                <ProjectCard name="Ein Projekt" description="Was habe ich gemacht und was waren meine Ziele"
                img="ref/zu/dem/Bild"/>
                <ProjectCard name="Ein Projekt" description="Was habe ich gemacht und was waren meine Ziele"
                             img="ref/zu/dem/Bild"/>
                <ProjectCard name="Ein Projekt" description="Was habe ich gemacht und was waren meine Ziele"
                             img="ref/zu/dem/Bild"/>
            </div>
        </div>
    )
}

export default Projects
