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

        const contactSection = document.querySelector('#contact')
        const contactElements = document.querySelectorAll('#contact p')
        let isContactAppear = false

        const showProjects = () => {
            isProjectsAppear = true
            projectsList.forEach((project, index) => {
                setTimeout(() => {
                    project.classList.add('active')
                }, (index * 100))
            })
        }

        const showContactElements = () => {
            isContactAppear = true
            contactElements.forEach((element, index) => {
                setTimeout(() => {
                    element.classList.add('active')
                }, (index * 125))
            })
        }

        window.onscroll = () => {
            const screenHeight = window.innerHeight
            if((window.pageYOffset + screenHeight/3) > projectsSection.offsetTop && !isProjectsAppear) {
                showProjects()
            }
            if((window.pageYOffset + screenHeight/3) > contactSection.offsetTop && !isContactAppear) {
                showContactElements()
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