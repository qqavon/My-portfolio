const sections = document.querySelectorAll('section')

function showSection(index) {
    switch(index) {
        case 0:
            Array.from(sections[0].children).forEach((v,i) => {
                setTimeout(() => { v.classList.remove('hidden') }, 100 * i)
            })
            break
        case 1:
            sections[1].classList.remove('hidden')
            document.querySelectorAll('.description span').forEach((span,i) => {
                setTimeout(() => { span.classList.remove('hidden') }, 125 * i)
            })
            break
        case 2:
            sections[2].classList.remove('hidden')
            document.querySelectorAll('.tech_list_item').forEach((v,i) => {
                setTimeout(() => {
                    v.classList.remove('hidden')
                }, 75 * i)
            })
            break

    }
}

// wyświetla / ukrywa nazwę technologi/programu po kliknięciu
document.querySelectorAll('.tech_list_item, .iUse_list_item').forEach((v,i) => {
    let hidden = true

    v.addEventListener('click', () => {
        if(hidden) {
            hidden = false
            v.children[1].classList.remove('hidden')
        }
        else {
            hidden = true
            v.children[1].classList.add('hidden')
        }
    })
})

//Project nav
const projectsList = document.querySelector('.projects_list')
const projectsNav = document.querySelectorAll('.projects_nav_list_item')
const projectsImageSlider = document.querySelectorAll('.project_images_slider')
const projectImageNavs = document.querySelectorAll('.project_images_nav')

projectsNav.forEach((v,i) => {
    v.addEventListener('click', () => {
        projectsNav.forEach(v => v.classList.remove('active'))
        projectsNav[i].classList.add('active')

        projectsList.style.transform = `translateX(-${100 * i}%)`
    })
})

projectImageNavs.forEach((nav,navIndex) => {
    let items = Array.from(nav.children)
    
    items.forEach((item, itemIndex) => {
        item.addEventListener('click', () => {
            items.forEach(v => v.classList.remove('active'))
            item.classList.add('active')
            
            projectsImageSlider[navIndex].style.transform = `translateX(-${itemIndex * 100}%)`
        })
    })
})