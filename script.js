const btnOpen = document.querySelector('.bars')
const btnClose = document.querySelector('.close')
const mobileMenu = document.querySelector('.mobile-menu')
const overlay = document.querySelector('.overlay')



//Event Listeners
btnOpen.addEventListener('click', () => {
    mobileMenu.classList.add('open')
    overlay.style.display = 'block'
    btnOpen.style.display = 'none'
    

})

btnClose.addEventListener('click', () => {
    mobileMenu.classList.remove('open')
    overlay.style.display = 'none'
    btnOpen.style.display = 'block'

})