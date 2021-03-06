import React from 'react'

import CVCard from '../components/CVCard'
import CVCompetenceCard from '../components/CVCompetenceCard'

const CV = () => {
    return (
        <div className="CV">
            <div className="content">
                <h1>Curriculum Vitae</h1>
                <h2>Education</h2>
                <CVCard date="2019 - 2020" position="dfs" employer="dfs" location="dfsf"
                description="gaaaaaaaaaaanz langer Text"/>
                <CVCard date="2019 - 2020" position="dfs" employer="dfs" location="dfsf"
                        description="gaaaaaaaaaaanz langer Text"/>
                <h2>Scholarships</h2>
                <CVCard date="2019 - 2020" position="dfs" employer="dfs" location="dfsf"
                        description="gaaaaaaaaaaanz langer Text"/>
                <h2>Employments</h2>
                <CVCard date="2019 - 2020" position="dfs" employer="dfs" location="dfsf"
                        description="gaaaaaaaaaaanz langer Text"/>
                <CVCard date="2019 - 2020" position="dfs" employer="dfs" location="dfsf"
                        description="gaaaaaaaaaaanz langer Text"/>
                <CVCompetenceCard />
            </div>
        </div>
    )
}

export default CV
