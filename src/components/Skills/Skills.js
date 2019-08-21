import React, { useState } from 'react'
import './skills.css'
import '../../addons/css/scaleTransition.css'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

const Skills = () => {

    const [ iconSrc, setIconSrc ] = useState( '' )
    const technologies = [
        { name: 'HTML5', icon: 'html5.svg' },
        { name: 'CSS3', icon: 'css3.svg' },
        { name: 'JavaScript', icon: 'javascript.svg' },
        { name: 'NodeJs', icon: 'nodejs.svg' },
        { name: 'MongoDB', icon: 'mongodb.svg' },
        { name: 'Vue', icon: 'vuejs.svg' },
        { name: 'Sass/Scss', icon: 'sass.svg' },
        { name: 'React', icon: 'reactjs.svg' },
        { name: 'Mongoose', icon: 'mongoose.png' },
        { name: 'ExpressJs', icon: 'expressjs.svg' },
    ]
    const tools = [
        { name: 'Visual Studio Code', icon: 'vscode.png' },
        { name: 'Adobe Experience Design', icon: 'adobexd.png' },
        { name: 'Git', icon: 'git.png' }
    ]

    const onHover = item => {
        setIconSrc( item.icon )
    }

    return (
        <section id="skills">
            <h1 className="section-name">
                Umiejętności
                <span className="section-name__background-text"> 2. </span>
            </h1>
            <div className="skills__body">
                <div className="skills__container">
                    <span className="skills__container__name"> Technologie </span>
                    <div className="skills__container__list">
                        { technologies.map((tech, index) => (
                            <span key={ index } onMouseOver={ () => onHover(tech) } className="skills__container__list__item">
                                { tech.name }
                            </span>
                        )) }
                    </div>
                </div>

                <div className="skills__container">
                <span className="skills__container__name"> Narzędzia </span>
                    <div className="skills__container__list">
                    { tools.map((tool, index) => (
                        <span key={ index } onMouseOver={ () => onHover(tool) } className="skills__container__list__item">
                            { tool.name }
                        </span>
                    )) }
                    </div>
                </div>
                <div className="skills__body__icon">
                    { iconSrc ?
                    <TransitionGroup>
                        <CSSTransition
                            key={ iconSrc }
                            timeout={ 200 }
                            classNames="scale"
                        >
                            <img src={`src/img/icons/${iconSrc}`} alt="icon" />
                        </CSSTransition>
                    </TransitionGroup>
                    : null }
                </div>
            </div>
        </section>
    )
}

export default Skills
