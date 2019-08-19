import React from 'react'
import './aboutMe.css'

const AboutMe = () => {
    return (
        <section id="about-me" className="about-me">
            <h1 className="section-name">
                O mnie
                <span className="section-name__background-text"> 1. </span>
            </h1>
            <div className="description">
                <p>
                    Pierwsze kroki postawiłem w programowaniu 2 lata temu w języku Java (SE) tworząc proste aplikacje okienkowe. Rok później zainteresował mnie front-end . Możliwości jakie oferuje i jego dynamiczny rozwój spowodował, że stał się moim głównym obiektem zainteresowań.
                </p>
                <p>
                    Od tamtego czasu stale staram rozwijać się we front-endzie ucząc się nowych frameworków i poznając standardy. Poznając język JavaScript zacząłem go również wykorzystywać w NodeJs tworząc serwery REST API do projektów.
                </p>
            </div>
        </section>
    )
}

export default AboutMe
