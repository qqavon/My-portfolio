import React from 'react'
import { Link } from 'react-router-dom'

const Projects = () => {
    return (
        <section id="projects">
            <h1 className="section-name">
                Projekty
                <span className="section-name__background-text"> 3. </span>
            </h1>
            <Link to="/" > Back </Link>
        </section>
    )
}

export default Projects
