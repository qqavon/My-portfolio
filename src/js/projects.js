const projectsArr = [
    {
        name: "event page",
        title: "Event page",
        stack: ['vue'],
        description: '<p> Strona prezentująca organizowane wydarzenie. Projekt powstał w celu praktycznej nauki Vue. </p>',
        features: ["Responsywna", "Interaktywny plan wydarzeń", "Parallax", "Karuzela tekstu (na mniejszych wyświetlaczach)"],
        gitHubUrl: 'https://github.com/qqavon/eventpage#event-page',
        demoUrl: 'https://qqavon.github.io/eventpage'
    },
    {
        name: "quizzes",
        title: "Quizzes",
        stack: ['vue', 'nodejs', 'mongodb'],
        description: '<p> Użytkownik po rejestracji może tworzyć pytania które będą odpowiadane przez zalogowanych użytkowników. </p>',
        features: ["Rejestracja i logowanie", "Dodawanie i usuwanie quizów", "Wyszukiwarka quizów", "Paginacja"],
        gitHubUrl: 'https://github.com/qqavon/quizzes#quizzes',
        demoUrl: 'https://qqavon.github.io/quizzes'
    },
    {
        name: "newsletter",
        title: "Newsletter",
        stack: ['html5', 'css3', 'js'],
        description: '<p> Formularz zawierający prostą walidację i animacje wykonane w canvasie. Kuleczki przemieszczają się szybciej wzdłóż osi Y podczas podawania e-malia, jeżeli jest błędny, będą się trząść. </p>',
        features: ["Animacje zrobione w canvas API"],
        gitHubUrl: 'https://github.com/qqavon/newsletter#newsletter',
        demoUrl: 'https://qqavon.github.io/newsletter/'
    },
    {
        name: "strona firmy",
        title: "Strona firmy",
        stack: ['vue'],
        description: '<p> Strona zaprogramowana w celu praktycznego ćwiczenia Vue. Projekt został zaprojektowany w AdobeXd, następnie wykonany. </p>',
        features: ["Responsywna", "Multi page", "Karuzela zdjeć", "Mapa", "Lazy loading komponentów"],
        gitHubUrl: 'https://github.com/qqavon/stronaFirmy#strona-firmy',
        demoUrl: 'https://qqavon.github.io/stronaFirmy/'
    },
    {
        name: "portfolio",
        title: "Portfolio",
        stack: ['html5', 'css3', 'js'],
        description: 'Portfolio które właśnie przeglądasz.',
        features: ["Responsywna", "Animacje zrobione w canvas API"],
        gitHubUrl: 'https://github.com/qqavon/My-portfolio#portfolio',
        demoUrl: 'https://qqavon.github.io/My-portfolio/'
    },
    {
        name: "albumy",
        title: "Albumy",
        stack: ['reactjs', 'sass'],
        description: 'Aplikacja pobierająca albumy ze zdjęciami z API jsonplaceholder.',
        features: ["Pobieranie i wyświetlanie albumów.", "Podczas scrollowania pobierane są następne albumy.", "Tworzenie własnego motywu.", "Dodawanie albumu do ulubionych."],
        gitHubUrl: 'https://github.com/qqavon/albums#albums',
        demoUrl: 'https://qqavon.github.io/albums/'
    },
]

const projectsElement = document.querySelectorAll('.projects__list__item')
const selectedProjectElement = document.querySelector('.selected-project')
const nextSelectedBtn = document.querySelector('#nextSelected')
const prevSelectedBtn = document.querySelector('#prevSelected')
const closeSelectedBtn = document.querySelector('#closeSelected')

const selectedProjectTitle = document.querySelector('.selected-project__buttons__title')
const selectedProjectStack = document.querySelector('.selected-project__stack__list')
const selectedProjectDescription = document.querySelector('.selected-project__description__text')
const selectedProjectFeatures = document.querySelector('.selected-project__features__list')
const selectedProjectDemoUrl = document.querySelector('#selectedProjectDemoUrl')
const selectedProjectGithubUrl = document.querySelector('#selectedProjectGithubUrl')

let selectedProjectIndex = null
let projectsQuantity = projectsElement.length

//Po kliknieciu wyswietlane są informacje projektu
projectsElement.forEach((project, index) => {
    project.addEventListener('click', () => {
        selectProject(index)
    })
})

closeSelectedBtn.addEventListener('click', () => { closeSelectedProject() })
nextSelectedBtn.addEventListener('click', () => { nextSelectedProject() })
prevSelectedBtn.addEventListener('click', () => { prevSelectedProject() })

function selectProject(index) {
    const project = projectsElement[index]
    selectedProjectIndex = index
    const projectData = projectsArr.filter(v => v["name"] == project.getAttribute('data-project'))[0]

    projectsElement.forEach(v => v.classList.remove('active'))
    project.classList.add('active')

    selectedProjectElement.classList.remove('hidden')

    selectedProjectTitle.innerHTML = projectData.title
    selectedProjectDescription.innerHTML = projectData.description

    let stackHtml = ''
    projectData.stack.forEach(logo => {
        stackHtml += `<div class="selected-project__stack__list__item"> ${getLogo(logo)} </div>`
    })
    selectedProjectStack.innerHTML = stackHtml

    let featuresHtml = ''
    projectData.features.forEach(feature => {
        featuresHtml += `<li class="selected-project__features__list__item"> ${feature} </li>`
    })
    selectedProjectFeatures.innerHTML = featuresHtml

    selectedProjectDemoUrl.setAttribute('href', projectData.demoUrl)
    selectedProjectGithubUrl.setAttribute('href', projectData.gitHubUrl)
}

function closeSelectedProject() {
    projectsElement[selectedProjectIndex].classList.remove('active')
    selectedProjectIndex = null
    selectedProjectElement.classList.add('hidden')
}

function nextSelectedProject() {
    const index = selectedProjectIndex+1 > projectsQuantity-1 ? 0 : selectedProjectIndex+1
    selectProject(index)
}

function prevSelectedProject() {
    const index = selectedProjectIndex-1 < 0 ? projectsQuantity-1 : selectedProjectIndex-1
    selectProject(index)
}