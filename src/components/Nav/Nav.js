import React from 'react'
import './nav.css'
import { HashLink } from 'react-router-hash-link'

const Nav = () => {

    const navScroll = el => {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    return (
        <nav>
            <HashLink to="/" scroll={ navScroll }>
                Jakub Nowak
            </HashLink>
            <HashLink to="/sections#about-me" scroll={ navScroll }>
                O mnie
            </HashLink>
            <HashLink to="/sections#skills" scroll={ navScroll }>
                Umiejętności
            </HashLink>
            <HashLink to="/sections#projects" scroll={ navScroll }>
                Projekty
            </HashLink>
            <HashLink to="/sections#contact" scroll={ navScroll }>
                Kontakt
            </HashLink>
        </nav>
    )
}

export default Nav
