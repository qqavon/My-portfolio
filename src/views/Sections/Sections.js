import React, { useEffect } from 'react'
import AboutMe from '../../components/AboutMe/AboutMe'
import Skills from '../../components/Skills/Skills';
import Projects from '../../components/Projects/Projects';
import Contact from '../../components/Contact/Contact';
import Nav from '../../components/Nav/Nav';


const Sections = () => {
    useEffect(() => {
        const projectsSection = document.querySelector('#projects')
        const projectsList = document.querySelectorAll('.projects__list__item')
        let isProjectsAppear = false

        const showProjects = () => {
            isProjectsAppear = true
            projectsList.forEach((project, index) => {
                setTimeout(() => {
                    project.classList.add('active')
                }, (index * 100))
            })
        }

        window.onscroll = () => {
            const screenHeight = window.innerHeight
            if((window.pageYOffset + screenHeight/3) > projectsSection.offsetTop && !isProjectsAppear) {
                showProjects()
            }
        }
    }, [])

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