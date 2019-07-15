const techAndToolsData = [
    {
        name: "html",
        fullName: "HTML5",
        description: "Wykorzystuję wprowadzone w HTML5 znaczniki. Staram się zachować czysty i przejrzysty kod.",
        logo: "html5"
    },
    {
        name: "css",
        fullName: "CSS3",
        description: "Przy używaniu CSS skupiam się na responsywności i estetyce strony.",
        logo: "css3"
    },
    {
        name: "js",
        fullName: "JavaScript",
        description: "JavaScript wykorzystuję do tworzenia stron internetowych i serwerów.",
        logo: "js"
    },
    {
        name: "nodejs",
        fullName: "NodeJs",
        description: "NodeJs używałem głównie do tworzenia serwerów REST API do własnych projektów. Napisałem też bota do Discorda, a z użyciem frameworka Electron stworzyłem aplikację okienkową.",
        logo: "nodejs"
    },
    {
        name: "mongodb",
        fullName: "MongoDB",
        description: "Wykorzystywałem do projektów REST API z użyciem frameworka mongoose do NodeJs.",
        logo: "mongodb"
    },
    {
        name: "vue",
        fullName: "Vue",
        description: "Vue jest pierwszym frameworkiem którego zacząłem się uczyć. Wykorzystuję go do tworzenia zarówno prostych, jak i bardziej złożonych stron.",
        logo: "vue"
    },
    {
        name: "sass",
        fullName: "SCSS / Sass",
        description: "Korzystam do usprawnienia pracy.",
        logo: "sass"
    },
    {
        name: "react",
        fullName: "ReactJs",
        description: "Framework którego zacząłem się uczyć od niedawna. Do tej pory poznałem hooki i React Router DOM.",
        logo: "reactjs"
    },
    {
        name: "vscode",
        fullName: "Visual Studio Code",
        description: "IDE w którym tworzę wszystkie projekty.",
        logo: "vscode"
    },
    {
        name: "git",
        fullName: "Git",
        description: "Wykorzystuję go przy większości projektów.",
        logo: "git"
    },
    {
        name: "adobexd",
        fullName: "Adobe Experience Design",
        description: "Pomysł na UI projektuję w Adobe Experience Design. Następnie staram się odzworować zaprojektowany wygląd i układ.",
        logo: "adobexd"
    },
]

//Elementy do ktorych beda wstawiane dane tech./narz.
const techSelectedName = document.querySelector('.tech-and-tools__container__selected__name')
const techSelectedLogo = document.querySelector('.tech-and-tools__container__selected__logo')
const techSelectedDescription = document.querySelector('.tech-and-tools__container__selected__description')

const techItems = document.querySelectorAll('.tech-and-tools__list__item')

//Dodawanie click event do tech./narz. w celu wyswietlenia informacji wybranej technologii
//i przełączanie klasy dodająca styl
techItems.forEach(item => {
    item.addEventListener('click', () => {
        const techName = item.getAttribute("data-tech")
        const techData = techAndToolsData.filter(item => item.name == techName)[0]

        const { fullName, logo, description } = techData

        techItems.forEach(item => item.classList.remove('selected'))        
        item.classList.add('selected')

        
        techSelectedName.innerHTML = fullName
        techSelectedLogo.innerHTML = getLogo(logo)
        techSelectedDescription.innerHTML = description
    })
})

techItems[0].click()