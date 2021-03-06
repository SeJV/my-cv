import React from 'react'

import '../style/ProjectCardStyle.css'

const ProjectCard = props => {
    return (
        <div className="ProjectCard">
            {props.children}
        </div>
    )
}

export default ProjectCard
