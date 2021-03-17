import React from 'react'
import { useInView } from 'react-hook-inview'

import '../style/CVCardStyle.css'

const CVCard = props => {
    const [ref, isVisible] = useInView({
        threshold: 0,
        unobserveOnEnter: true
    })

    const cn = `CVCard inView ${isVisible ? "isInView" : ""}`
    return (
        <div className={cn} ref={ref}>
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
