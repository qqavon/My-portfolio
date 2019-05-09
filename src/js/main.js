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
document.querySelectorAll('.tech_list_item').forEach((v,i) => {
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