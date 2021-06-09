import React from 'react'

import CVCard from '../components/CVCard'
import CVCompetenceCard from '../components/CVCompetenceCard'

import '../style/CVStyle.css'

const CV = () => {
    return (
        <div className="CV">
            <div className="content">
                <h1>Curriculum Vitae</h1>
                <CVCompetenceCard />
                <h2>Employments</h2>
                <CVCard date="08 / 2021  -  07 / 2022" position="Technical Student" employer="CERN" location="Geneva">
                    <p>Building set of components and APIs for integrating ML pipelines with the Monitoring Service. Its goal is providing unified platform where data scientists can focus on building and training their anomaly detection monitoring algorithms.</p>
                </CVCard>
                <CVCard date="04 / 2019  -  03 / 2020" position="Working Student" employer="Sovanta AG" location="Heidelberg">
                    <p>Working student at sovanta AG in the Data Lab/AI department in Heidelberg, Germany. Projects where focused on NLU and Chatbot technology with Rasa and Tensorflow.</p>
                </CVCard>
                <CVCard date="09 / 2018  -  02 / 2019" position="Internship" employer="SNP Business Landscape Management GmbH" location="Heidelberg">
                    <p>Internship at SNP Business Landscape Management GmbH in Heidelberg, Germany. Subject of my work was email classification within the SAP Solution Manager with the SAP HANA database.</p>
                </CVCard>
                <CVCard date="Summer 2018" position="Freelancer" employer="GC Solution GmbH" location="Speyer and Barcelona">
                    <p>Freelancer as web developer at GC Solution GmbH in Speyer, Germany and Barcelona, Spain. My work involved project architecture, frontend as well as backend development.</p>
                </CVCard>
                <h2>Scholarships</h2>
                <CVCard date="09 / 2020  -  08 / 2021" employer="Karlsruhe University of Applied Sciences in cooperation with Vector GmbH">
                    <p>Scholarship program to support the leading students of the Karlsruhe University of Applied Sciences.</p>
                </CVCard>
                <h2>Education</h2>
                <CVCard date="Since 03 / 2020" position="Master of Science in CS" employer="Karlsruhe University of Applied Sciences">
                    <p><b>Current Grade: 1.3</b>*</p>
                    <p>Relevant courses:</p>
                    <ul>
                        <li>Artificial Intelligence (1.0)</li>
                        <li>Machine Learning (1.3)</li>
                        <li>Business English C1 (1.0)</li>
                    </ul>
                </CVCard>
                <CVCard date="09 / 2016  -  02 / 2020" position="Bachelor of Science in CS" employer="Mannheim University of Applied Sciences">
                    <p><b>Final Grade: 1.4</b></p>
                    <p>Relevant courses:</p>
                    <ul>
                        <li>Scientific Computing (1.0)</li>
                        <li>AI for Autonomous Systems (1.3)</li>
                        <li>Image Processing (1.0)</li>
                    </ul>
                    <p>Bachelor´s thesis: Evaluation of On-Device Training of neural networks</p>
                </CVCard>
                <CVCard date="09 / 2008  -  08 / 2013" position="Member of Hector Seminar" location="Mannheim">
                    <p>Member of Hector Seminar in Mannheim, a seminar to support students with special talents in science</p>
                </CVCard>
                <CVCard date="09 / 2006  -  06 / 2015" position="Abitur" employer="Hebel-Gymnasium Schwetzingen">
                    <p><b>Final Grade: 2.1</b></p>
                    <p>Relevant subjects in the final exam:</p>
                    <ul>
                        <li>Math (0.7)</li>
                        <li>Physics (1.0)</li>
                    </ul>
                </CVCard>
                <p>*Grades: 1.0-1.5 very good, 1.6-2.5 good, 2.6-3.5 satisfactory, 3.6-4.0 sufficient</p>
            </div>
        </div>
    )
}

export default CV
