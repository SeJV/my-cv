import React from 'react'

const CVCard = props => {
    return (
        <div className="CVCard">
            <h4>{props.date}</h4>
            <p>{props.position}</p>
            <p>{props.employer}</p>
            <p>{props.location}</p>
            <p>{props.description}</p>
        </div>
    )
}

export default CVCard
