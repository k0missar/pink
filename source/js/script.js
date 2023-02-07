const header = document.querySelector('.header');
const headerBar = header.querySelector('.header__navigation');
const mainMenu = header.querySelector('.main-menu');
const openMenu = header.querySelector('.header__open-menu');
const openMenuBtn = header.querySelector('.header__open-menu-svg');
const closeMenuBtn = header.querySelector('.header__close-menu-svg');

console.log(openMenuBtn.classList.contains('header__button-menu--disabled'));
if (openMenuBtn.classList.contains('header__button-menu--disabled') == false && closeMenuBtn.classList.contains('header__button-menu--disabled') == false) {
  openMenu.addEventListener('click', () => {
    mainMenu.classList.toggle('main-menu--open');
    headerBar.classList.toggle('header__navigation--open');
    openMenuBtn.classList.toggle('header__menu-btn--close');
    closeMenuBtn.classList.toggle('header__menu-btn--open');
  })
}