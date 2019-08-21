import React, { useEffect, useState } from 'react'
import AboutMe from '../../components/AboutMe/AboutMe'
import Skills from '../../components/Skills/Skills';
import Projects from '../../components/Projects/Projects';
import Contact from '../../components/Contact/Contact';
import Nav from '../../components/Nav/Nav';


const Sections = () => {
    const [ isProjectsAppear, setIsProjectsAppear ] = useState( false )
    
    useEffect(() => {
        const projectsSection = document.querySelector('#projects')
        const projectsList = document.querySelectorAll('.projects__list__item')

        window.onscroll = () => {
            const screenHeight = window.innerHeight
            if((window.pageYOffset + screenHeight/3) > projectsSection.offsetTop && !isProjectsAppear) {
                setIsProjectsAppear( true )

                projectsList.forEach((project, index) => {
                    setTimeout(() => {
                        project.classList.add('active')
                    }, (index * 100))
                })
            }
        }
    })

    return (
        <div>
            <Nav />
            <AboutMe />
            <Skills />
            <Projects />
            <Contact />
        </div>
    )
}

export default Sections