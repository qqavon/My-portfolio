import React, { useEffect } from 'react'
import './hero.css'
import { HashLink } from 'react-router-hash-link'

const Hero = () => {    
    const appearAnimation = () => {
        const elements = document.querySelectorAll('.curtain, .hero')
        const menuListItems = document.querySelectorAll('.menu__list__item')

        elements.forEach(element => {
            element.classList.add('appear')
        })

        setTimeout(() => {
            menuListItems.forEach( (item, index) => {
                setTimeout(() => {
                    item.classList.add('appear')
                }, (index * 175) )
            })
        }, 600)
    }
    const navScroll = el => {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    
    useEffect(() => {
        appearAnimation()
    })

    return (
        <>
            <div className="curtain"></div>
            <div className="hero">
                <div className="me">
                    <span className="me__name">Jakub Nowak</span>
                    <span className="me__as">Junior front-end developer</span>
                    <a href="https://github.com/qqavon" target="_blank" rel="noopener noreferrer">
                        <img src="src/img/github.svg" className="me__icon" alt="github icon" />
                    </a>
                </div>

                <div className="menu r-45">
                    <div className="menu__list">
                        <div className="menu__list__item">
                            <HashLink to="/sections#aboutMe" scroll={ navScroll }>
                                <div className="menu__list__item__body r-45-m">
                                    <span> O mnie </span>
                                    <span> 1. </span>
                                </div>
                            </HashLink>
                        </div>

                        <div className="menu__list__item">
                            <HashLink to="/sections#skills" scroll={ navScroll }>
                                <div className="menu__list__item__body r-45-m">
                                    <span> Umiejętności </span>
                                    <span> 2. </span>
                                </div>
                            </HashLink>
                        </div>

                        <div className="menu__list__item">
                            <HashLink to="/sections#projects" scroll={ navScroll }>
                                <div className="menu__list__item__body r-45-m">
                                    <span> Projekty </span>
                                    <span> 3. </span>
                                </div>
                            </HashLink>
                        </div>

                        <div className="menu__list__item">
                            <HashLink to="/sections#contact" scroll={ navScroll }>
                                <div className="menu__list__item__body r-45-m">
                                    <span> Kontakt </span>
                                    <span> 4. </span>
                                </div>
                            </HashLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero
