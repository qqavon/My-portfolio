import React from 'react'
import './projects.css'
import ProjectItem from '../../components/ProjectItem/ProjectItem'

const Projects = () => {
    const projects = [
        {
            name: 'Portfolio',
            imgSrc: 'portfolio.JPG',
            description: 'Portfolio które właśnie przeglądasz.',
            stack: ['React'], githubUrl: 'https://github.com/qqavon/My-portfolio',
            date: '22.08.2019'
        },
        {
            name: 'Images',
            imgSrc: 'image.JPG',
            description: 'Aplikacja wyświetlająca zdjęcia z pixabay API.',
            stack: ['React', 'Sass'], githubUrl: 'https://github.com/qqavon/Images',
            demoUrl: 'https://qqavon.github.io/Images/',
            date: 'in progress'
        },
        {
            name: 'Strona firmy',
            imgSrc: 'company.JPG',
            description: 'Landing page wykonany w celu praktycznego ćwiczenia.',
            stack: ['Vue'],
            githubUrl: 'https://github.com/qqavon/stronaFirmy',
            demoUrl: 'https://qqavon.github.io/stronaFirmy',
            date: '3.06.2019'
        },
        {
            name: 'Event page',
            imgSrc: 'eventPage.JPG',
            description: 'Landing page wykonany w celu praktycznego ćwiczenia.',
            stack: ['Vue'],
            githubUrl: 'https://github.com/qqavon/eventpage',
            demoUrl: 'https://qqavon.github.io/eventpage',
            date: '22.05.2019'
        },
        {
            name: 'Quizzes',
            imgSrc: 'quizzes.JPG',
            description: 'Tworzenie i rozwiązywanie quizów.',
            stack: ['Vue', 'NodeJs', 'MongoDB'],
            githubUrl: 'https://github.com/qqavon/quizzes',
            demoUrl: 'https://qqavon.github.io/quizzes/#/',
            date: '22.04.2019'
        },
        {
            name: '',
            imgSrc: '',
            description: 'Więcej projektów znajduje się na githubie.',
            stack: [],
            githubUrl: 'https://github.com/qqavon?tab=repositories',
            date: ''
        }
    ]

    return (
        <section id="projects">
            <h1 className="section-name">
                Projekty
                <span className="section-name__background-text"> 3. </span>
            </h1>
            <div className="projects__list">
                {
                    projects.map((project, index) => (
                        <ProjectItem key={ index } {...project} />
                    ))
                }
            </div>
        </section>
    )
}

export default Projects
