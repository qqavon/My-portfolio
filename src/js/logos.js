const logosArr = [
    {
        name: "html5",
        htmlCode: `<i class="devicon-html5-plain colored"></i>`
    },
    {
        name: "css3",
        htmlCode: `<i class="devicon-css3-plain colored"></i>`
    },
    {
        name: "js",
        htmlCode: `<i class="devicon-javascript-plain colored"></i>`
    },
    {
        name: "nodejs",
        htmlCode: `<i class="devicon-nodejs-plain colored"></i>`
    },
    {
        name: "mongodb",
        htmlCode: `<i class="devicon-mongodb-plain colored"></i>`
    },
    {
        name: "vue",
        htmlCode: `<i class="devicon-vuejs-plain colored"></i>`
    },
    {
        name: "sass",
        htmlCode: `<i class="devicon-sass-original colored"></i>`
    },
    {
        name: "reactjs",
        htmlCode: `<i class="devicon-react-original colored"></i>`
    },
    {
        name: "vscode",
        htmlCode: `<img src="./src/img/vscode.png" alt="vscode logo">`
    },
    {
        name: "git",
        htmlCode: `<img src="./src/img/git.png" alt="vscode logo">`
    },
    {
        name: "gimp",
        htmlCode: `<img src="./src/img/gimp.png" alt="vscode logo">`
    },
    {
        name: "adobexd",
        htmlCode: `<img src="./src/img/adobexd.png" alt="vscode logo">`
    }
]

function getLogo(name) {
    return logosArr.filter(logo => logo.name === name)[0].htmlCode
}