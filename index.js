import toggleBurgerMenu from './assets/js/burger.js';

const burger = document.querySelector('.header__burger');
const navItem = document.querySelectorAll('.header__nav-item');
console.log(navItem);

burger.addEventListener('click', toggleBurgerMenu);

navItem.forEach(item => {
  item.addEventListener('click', toggleBurgerMenu);
});
