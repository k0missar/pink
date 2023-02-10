const header = document.querySelector('.header');
const headerBar = header.querySelector('.header__navigation');
const mainMenu = header.querySelector('.main-menu');
const openMenu = header.querySelector('.header__open-menu');
const openMenuBtn = header.querySelector('.header__open-menu-svg');
const closeMenuBtn = header.querySelector('.header__close-menu-svg');

if (openMenuBtn.classList.contains('header__button-menu--disabled') == false && closeMenuBtn.classList.contains('header__button-menu--disabled') == false) {
  openMenu.addEventListener('click', () => {
    mainMenu.classList.toggle('main-menu--open');
    headerBar.classList.toggle('header__navigation--open');
    openMenuBtn.classList.toggle('header__menu-btn--close');
    closeMenuBtn.classList.toggle('header__menu-btn--open');
  })
}

const controlItem = document.querySelectorAll('.price__controls-item');
const priceList = document.querySelector('.price__list');
let controlList = [];
let positionLeft = -254;

for (let i = 0; i < controlItem.length; i++) {
  controlList.push(positionLeft + 'px');
  positionLeft -= 276;
}

controlItem.forEach((element, index) => {
  element.addEventListener('click', ()=> {
    controlItem.forEach(itemClass => {
      itemClass.classList.remove('controls__item--current');
    });
    element.classList.add('controls__item--current');
    priceList.style.left = controlList[index];
  });
});


