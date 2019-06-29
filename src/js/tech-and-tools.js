const techAndToolsData = [
    {
        name: "html",
        fullName: "HTML5",
        description: "Opis html",
        logo: "html5"
    },
    {
        name: "css",
        fullName: "CSS3",
        description: "Opis css",
        logo: "css3"
    },
    {
        name: "js",
        fullName: "JavaScript",
        description: "Opis js",
        logo: "js"
    },
    {
        name: "nodejs",
        fullName: "NodeJs",
        description: "Opis nodejs Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus molestias dignissimos doloremque aspernatur nobis hic, distinctio dolor similique libero error, porro est quis! Impedit excepturi ex amet laboriosam, sint error nobis fugiat vel, quam eveniet, et nostrum. Totam excepturi reprehenderit pariatur illum eligendi doloribus saepe doloremque quia, ex cum accusantium.",
        logo: "nodejs"
    },
    {
        name: "mongodb",
        fullName: "MongoDB",
        description: "Opis mongodb",
        logo: "mongodb"
    },
    {
        name: "vue",
        fullName: "Vue",
        description: "Opis vue",
        logo: "vue"
    },
    {
        name: "sass",
        fullName: "Sass",
        description: "Opis sass",
        logo: "sass"
    },
    {
        name: "react",
        fullName: "ReactJs",
        description: "Opis reactjs",
        logo: "reactjs"
    },
    {
        name: "vscode",
        fullName: "Visual Studio Code",
        description: "Opis vscode",
        logo: "vscode"
    },
    {
        name: "git",
        fullName: "Git",
        description: "Opis git",
        logo: "git"
    },
    {
        name: "gimp",
        fullName: "Gimp",
        description: "Opis gimp",
        logo: "gimp"
    },
    {
        name: "adobexd",
        fullName: "Adobe Experience Design",
        description: "Opis adobexd",
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