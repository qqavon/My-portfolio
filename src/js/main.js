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
        case 3:
            sections[3].classList.remove('hidden')
            document.querySelectorAll('.iUse_list_item').forEach((v,i) => {
                setTimeout(() => {
                    v.classList.remove('hidden')
                }, 75 * i)
            })
            break
        case 4:
            sections[4].classList.remove('hidden')
            break
        case 5:
            document.querySelector('.contact_item').classList.remove('hidden')
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
const projectsImageswiper = document.querySelectorAll('.project_images_swiper')
const projectImageNavs = document.querySelectorAll('.project_images_nav')

projectsNav.forEach((v,i) => {
    v.addEventListener('click', () => {
        projectsNav.forEach(v => v.classList.remove('active'))
        projectsNav[i].classList.add('active')

        projectsList.style.transform = `translateX(-${100 * i}%)`
    })
})

projectImageNavs.forEach((nav,navIndex) => {
    let selectedImageIndex = 0
    let items = Array.from(nav.children) //images in <li>
    const parent = nav.parentElement //project images element

    let x1 = 0
    let x2 = 0
    let d = 0
    
    
    function setActiveNav(index) {
        items.forEach(v => v.classList.remove('active'))
        items.filter((v,i) => i == index)[0].classList.add('active')
    }
    
    function setImage(index) {
        if(index >= 0 && index < items.length) {
            selectedImageIndex = index
            projectsImageswiper[navIndex].style.transform = `translateX(-${index * 100}%)`
            
            setActiveNav(index)
        }
    }
    
    function swipeImage(x1, x2, selectedImageIndex) {
        let minDistance = 40
        let d = (x1 - x2)
        
        if(d > 0 && Math.abs(d) > minDistance)      setImage(selectedImageIndex+1)
        else if(d < 0 && Math.abs(d) > minDistance) setImage(selectedImageIndex-1)
    }
    
    //swipe image
    parent.addEventListener('mousedown', e => { x1 = e.x })
    parent.addEventListener('mouseup', e => {
        x2 = e.x

        swipeImage(x1, x2, selectedImageIndex)
    })

    parent.addEventListener('touchstart', e => { x1 = e.changedTouches[0].clientX })
    parent.addEventListener('touchend', e => {
        x2 = e.changedTouches[0].clientX

        swipeImage(x1, x2, selectedImageIndex)
    })
    
    
    //Added click event to buttons in image nav
    items.forEach((item, itemIndex) => {
        item.addEventListener('click', () => {
            setActiveNav(itemIndex)
            setImage(itemIndex)
        })
    })

})

//scroll
window.addEventListener('scroll', () => {
    sections.forEach((section, index) => {
        if((window.pageYOffset + window.innerHeight/1.45) > section.offsetTop) {
            showSection(index)
        }
    })
})

const loadingElement = document.querySelector('.loading')
document.fonts.ready.then(() => {
    loadingElement.style.zIndex = -5
    loadingElement.style.opacity = 0
    loadingElement.innerHTML = '';

    window.scrollTo(0,1)
})