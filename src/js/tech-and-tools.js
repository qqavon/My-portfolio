const techAndToolsData = [
    {
        name: "html",
        fullName: "HTML5",
        description: "Opis html",
        isIcon: true,
        iconClass: "devicon-html5-plain colored",
    },
    {
        name: "css",
        fullName: "CSS3",
        description: "Opis css",
        isIcon: true,
        iconClass: "devicon-css3-plain colored",
    },
    {
        name: "js",
        fullName: "JavaScript",
        description: "Opis js",
        isIcon: true,
        iconClass: "devicon-javascript-plain colored",
    },
    {
        name: "nodejs",
        fullName: "NodeJs",
        description: "Opis nodejs",
        isIcon: true,
        iconClass: "devicon-nodejs-plain colored",
    },
    {
        name: "mongodb",
        fullName: "MongoDB",
        description: "Opis mongodb",
        isIcon: true,
        iconClass: "devicon-mongodb-plain colored",
    },
    {
        name: "vue",
        fullName: "Vue",
        description: "Opis vue",
        isIcon: true,
        iconClass: "devicon-vuejs-plain colored",
    },
    {
        name: "sass",
        fullName: "Sass",
        description: "Opis sass",
        isIcon: true,
        iconClass: "devicon-sass-original colored",
    },
    {
        name: "react",
        fullName: "ReactJs",
        description: "Opis reactjs",
        isIcon: true,
        iconClass: "devicon-react-original colored",
    },
    {
        name: "vscode",
        fullName: "Visual Studio Code",
        description: "Opis vscode",
        isIcon: false,
        img: "./src/img/vscode.png"
    },
    {
        name: "git",
        fullName: "Git",
        description: "Opis git",
        isIcon: false,
        img: "./src/img/git.png"
    },
    {
        name: "gimp",
        fullName: "Gimp",
        description: "Opis gimp",
        isIcon: false,
        img: "./src/img/gimp.png"
    },
    {
        name: "adobexd",
        fullName: "AdobeXd",
        description: "Opis adobexd",
        isIcon: false,
        img: "./src/img/adobexd.png"
    },
]

//Elementy do ktorych beda wstawiane dane tech./narz.
const techSelectedName = document.querySelector('.tech-and-tools__container__selected__name')
const techSelectedLogo = document.querySelector('.tech-and-tools__container__selected__logo')
const techSelectedDescription = document.querySelector('.tech-and-tools__container__selected__description')

//Pobieranie technologii i narzedzi
const techItems = document.querySelectorAll('.tech-and-tools__list__item')

//Dodawanie click event do tech./narz. w celu wyswietlenia informacji wybranej technologii
//i przełączanie klasy dodająca styl
techItems.forEach(item => {
    item.addEventListener('click', () => {
        //Usuwanie i dodawanie klasy do wybranej technologii/narzedzia
        techItems.forEach(item => item.classList.remove('selected'))        
        item.classList.add('selected')

        //Wyciąganie danych wybranej technologii/narzędzia
        const techName = item.getAttribute("data-tech")
        const techData = techAndToolsData.filter(item => item.name == techName)[0]
        
        //Nazwa technologii/narzedzia
        techSelectedName.innerHTML = techData["fullName"]

        //Ikona/zdjęcie technologii/narzędzia
        if(techData["isIcon"]) {
            techSelectedLogo.innerHTML = `<i class="${techData["iconClass"]}"></i>`
        }
        else {
            techSelectedLogo.innerHTML = `<img src="${techData["img"]}" alt="git icon">`
        }

        //Opis
        techSelectedDescription.innerHTML = techData["description"]
    })
})

techItems[0].click()