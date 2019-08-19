import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
    return (
        <section id="contact">
            <h1 className="section-name">
                Kontakt
                <span className="section-name__background-text"> 4. </span>
            </h1>
            <Link to="/" > Back </Link>
        </section>
    )
}

export default Contact
