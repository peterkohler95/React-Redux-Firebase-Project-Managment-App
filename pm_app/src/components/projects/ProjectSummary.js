import React from 'react'

const ProjectSummary = ({ project }) => {
    return (
        <div className="card z-depth-o project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{project.title}</span>
                <p>Posted by PK</p>
                <p className="grey-text">Jan 14th</p>
            </div>
        </div>
    )
}

export default ProjectSummary