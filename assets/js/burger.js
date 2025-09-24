const menu = document.querySelector('.header__nav');
const burger = document.querySelector('.header__burger');
const body = document.querySelector('body');

export default function toggleBurgerMenu() {
  function addBurgerMenu() {
    menu.classList.add('open');
    burger.classList.add('active');
    body.style.overflow = 'hidden';
  }

  function removeBurgerMenu() {
    menu.classList.remove('open');
    burger.classList.remove('active');
    body.style.overflow = 'auto';
  }

  if (menu.classList.contains('open')) {
    removeBurgerMenu();
  } else {
    addBurgerMenu();
  }
}