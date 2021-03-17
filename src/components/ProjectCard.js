import React from 'react'
import { useInView } from 'react-hook-inview'

import '../style/ProjectCardStyle.css'

const ProjectCard = props => {
    const [ref, isVisible] = useInView({
        threshold: 0,
        unobserveOnEnter: true
    })

    const cn = `ProjectCard inView ${isVisible ? "isInView" : ""}`
    return (
        <div className={cn} ref={ref}>
            {props.children}
        </div>
    )
}

export default ProjectCard
