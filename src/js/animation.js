//classElement - Klasa elementu na którym ma wykonać się animacja
//Element na którym ma odbyć sie animacja musi posiadać klasę "fade"

function transitionAnimation(classElement) {
    let element = document.querySelector(`.fade.${classElement}`)
    element.classList.add('fade-hide')
    setTimeout( () => {
        element.classList.remove('fade-hide')
    }, 50)
}