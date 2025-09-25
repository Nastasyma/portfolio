const body = document.querySelector('body');

// burger

const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__nav');
const navItem = document.querySelectorAll('.header__nav-item');

function toggleBurgerMenu() {
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

burger.addEventListener('click', toggleBurgerMenu);

navItem.forEach((item) => {
  item.addEventListener('click', toggleBurgerMenu);
});

// scroll button

const scrollBtn = document.querySelector('.scroll-button');
const aboutSection = document.querySelector('#about');

scrollBtn.addEventListener('click', () => {
  window.scrollTo({
    top: aboutSection.offsetTop,
    behavior: 'smooth',
  });
});

// accordion

const questionItem = document.querySelectorAll('.faq__content-questions-item');
const question = document.querySelectorAll('.faq__content-questions-item-question');

question.forEach((item, index) => {
  item.addEventListener('click', () => {
    questionItem.forEach((item) => {
      item.classList.remove('active');
    });

    item.parentElement.classList.toggle('active');

    localStorage.setItem('_activeQuestionIndex', index);
  });
});

const activeQuestionIndex = localStorage.getItem('_activeQuestionIndex');

if (activeQuestionIndex) {
  questionItem[activeQuestionIndex].classList.add('active');
} else {
  questionItem[0].classList.add('active');
}

// modal

const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__content-close');
const orderButton = document.querySelectorAll('.order-button');
const overlay = document.querySelector('.overlay');

function openModal() {
  modal.classList.add('open');
  body.style.overflow = 'hidden';
  overlay.classList.add('active');
};

function closeModal() {
  modal.classList.remove('open');
  body.style.overflow = 'auto';
  overlay.classList.remove('active');
};

orderButton.forEach((item) => {
  item.addEventListener('click', openModal);
});

modalClose.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);