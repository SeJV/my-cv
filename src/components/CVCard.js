import React from 'react'

import '../style/CVCardStyle.css'

const CVCard = props => {
    return (
        <div className="CVCard">
            <h4>{props.date}</h4>
            <div className="cont">
                <div className="info">
                    <p className="position">{props.position}</p>
                    <p>{props.employer}</p>
                    <p>{props.location}</p>
                </div>
                <div className="description">{props.children}</div>
            </div>
        </div>
    )
}

export default CVCard
