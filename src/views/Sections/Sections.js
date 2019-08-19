import React from 'react'
import AboutMe from '../../components/AboutMe/AboutMe'
import Skills from '../../components/Skills/Skills';
import Projects from '../../components/Projects/Projects';
import Contact from '../../components/Contact/Contact';

const Sections = () => {
    return (
        <div>
            <AboutMe />
            <Skills />
            <Projects />
            <Contact />
        </div>
    )
}

export default Sections