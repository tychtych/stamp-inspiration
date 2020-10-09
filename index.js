
const hamburger = document.getElementById('hamburger');
const navUl = document.querySelector('.header__menu-list');
console.log(hamburger)
console.log(navUl)

hamburger.addEventListener('click', () =>{

    navUl.classList.toggle('show');
})
