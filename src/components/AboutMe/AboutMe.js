import React from 'react'
import './aboutMe.css'
import { Link } from 'react-router-dom'

const AboutMe = () => {
    return (
        <section className="about-me">
            About me
            <Link to="/" > Back </Link>
        </section>
    )
}

export default AboutMe
