const nav = document.querySelector('.main-nav');
const navButton = document.querySelector('.main-nav__toggle');
const programsList = document.querySelector('.site-list__button--programs');
const newsList = document.querySelector('.site-list__button--news');
const programsButton = document.querySelector('.site-list__toggle--programs');
const newsButton = document.querySelector('.site-list__toggle--news');

const navButtonClick = () => {
  navButton.addEventListener('click', function () {
    nav.classList.toggle('main-nav--closed');
    nav.classList.toggle('main-nav--opened');
  });

  programsButton.addEventListener('click', function () {
    programsList.classList.toggle('site-list__button--opened');
  });

  newsButton.addEventListener('click', function () {
    newsList.classList.toggle('site-list__button--opened');
  });
};

export {navButtonClick};
