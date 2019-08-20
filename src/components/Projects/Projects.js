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
            date: 'in progress'
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
            name: 'Landing page',
            imgSrc: 'company.JPG',
            description: 'Landing page o nazwie "Strona firmy"',
            stack: ['Vue'],
            githubUrl: 'https://github.com/qqavon/Images',
            demoUrl: 'https://qqavon.github.io/Images/',
            date: '3.06.2019'
        },
        {
            name: 'Landing page',
            imgSrc: 'eventPage.JPG',
            description: 'Landing page o nazwie "Event page"',
            stack: ['Vue'],
            githubUrl: 'https://github.com/qqavon/Images',
            demoUrl: 'https://qqavon.github.io/Images/',
            date: '22.05.2019'
        },
        {
            name: 'Quizzes',
            imgSrc: 'quizzes.JPG',
            description: 'Strona umożliwia tworzenie quizów które będą rozwiązywane przez zalogowanych użytkowników.',
            stack: ['Vue', 'NodeJs', 'MongoDB'],
            githubUrl: 'https://github.com/qqavon/quizzes',
            demoUrl: 'https://qqavon.github.io/quizzes/#/',
            date: '22.04.2019'
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
