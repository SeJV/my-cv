import React from 'react'

const ProjectCard = props => {
    return (
        <div className="ProjectCard">
            <h4>{props.name}</h4>
            <p>{props.description}</p>
            <p>{props.img}</p>
        </div>
    )
}

export default ProjectCard
