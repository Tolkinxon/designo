window.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.header__button')
    const header = document.querySelector('.header')

    button.addEventListener('click', () => {
        header.classList.toggle('open-menu')
    })

})