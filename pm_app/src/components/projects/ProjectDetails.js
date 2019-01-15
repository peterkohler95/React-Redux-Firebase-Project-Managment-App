import React from 'react'

function ProjectDetails(props) {
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem sapiente vel cum numquam omnis nobis, aut, voluptates reprehenderit quasi accusamus dicta nostrum corporis cupiditate nam, temporibus consequatur eos aspernatur quidem.</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by PK</div>
                    <div>Jan 14th</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
