import React from 'react'
import { Link } from 'react-router-dom'

const Skills = () => {
    return (
        <section id="skills">
            <h1 className="section-name">
                Umiejętności
                <span className="section-name__background-text"> 2. </span>
            </h1>
            <Link to="/" > Back </Link>
        </section>
    )
}

export default Skills
