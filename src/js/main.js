const sections = document.querySelectorAll('section')

function showSection(index) {
    switch(index) {
        case 0:
            Array.from(sections[0].children).forEach((v,i) => {
                setTimeout(() => { v.classList.remove('hidden') }, 100 * i)
            })
            break;
        case 1:
        document.querySelector('.aboutMe').classList.remove('hidden')
        document.querySelectorAll('.description span').forEach((span,i) => {
            setTimeout(() => { span.classList.remove('hidden') }, 125 * i)
        })
    }
}