const mobileNavBtn = document.querySelector('.mobileNavBtn')
const navMobileMenu = document.querySelector('.nav__mobileMenu')
const navMobileMenuLinks = document.querySelectorAll('[data-section]')

mobileNavBtn.addEventListener('click', () => {
    navMobileMenu.classList.toggle('active')
})

navMobileMenuLinks.forEach( item => {
    item.addEventListener('click', () => {
        navMobileMenu.classList.remove('active')

        const sectionName = item.getAttribute('data-section')
        const sectionScrollHeight = document.querySelector(`.${sectionName}`).offsetTop
        
        window.scrollTo(0, sectionScrollHeight)
    })
})