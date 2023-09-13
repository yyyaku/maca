const buttonGeneral = document.querySelector('.news__general');
const buttonVolunteer = document.querySelector('.news__volunteer');
const buttonInternships = document.querySelector('.news__internships');
const buttonCareer = document.querySelector('.news__career');
const buttonTrips = document.querySelector('.news__trips');

const listVolunteer = document.getElementById('volunteer');
const listInternships = document.getElementById('internships');
const listCareer = document.getElementById('career');
const listTrips = document.getElementById('trips');

const initSliderNews = () => {
  buttonGeneral.addEventListener('click', function () {
    listVolunteer.classList.remove('visually-hidden');
    listInternships.classList.remove('visually-hidden');
    listCareer.classList.remove('visually-hidden');
    listTrips.classList.remove('visually-hidden');
  });
  buttonVolunteer.addEventListener('click', function () {
    listVolunteer.classList.remove('visually-hidden');
    listInternships.classList.add('visually-hidden');
    listCareer.classList.add('visually-hidden');
    listTrips.classList.add('visually-hidden');
  });
  buttonInternships.addEventListener('click', function () {
    listVolunteer.classList.add('visually-hidden');
    listInternships.classList.remove('visually-hidden');
    listCareer.classList.add('visually-hidden');
    listTrips.classList.add('visually-hidden');
  });
  buttonCareer.addEventListener('click', function () {
    listVolunteer.classList.add('visually-hidden');
    listInternships.classList.add('visually-hidden');
    listCareer.classList.remove('visually-hidden');
    listTrips.classList.add('visually-hidden');
  });
  buttonTrips.addEventListener('click', function () {
    listVolunteer.classList.add('visually-hidden');
    listInternships.classList.add('visually-hidden');
    listCareer.classList.add('visually-hidden');
    listTrips.classList.remove('visually-hidden');
  });
};

// const sliderNews = document.querySelector('.news__swiper');
// const newsPagination = document.querySelector('.news__pagination');
// const buttonPrev = document.querySelector('.news__button--prev');
// const buttonNext = document.querySelector('.news__button--next');

// const initSliderNews = () => {
//   if (sliderNews) {
//     // eslint-disable-next-line
//       new Swiper(sliderNews, {

//       navigation: {
//         nextEl: buttonNext,
//         prevEl: buttonPrev,
//       },

//       pagination: {
//         el: newsPagination,
//         clickable: true,
//         renderBullet: function (index, className) {
//           return '<span class="' + className + '">' + (index + 1) + '</span>';
//         },
//       },
//       slidesPerView: 'auto',
//       spaceBetween: 32,
//       breakpoints: {
//         768: {
//           spaceBetween: 30,
//         },
//         320: {
//           spaceBetween: 30,
//         },
//       },
//     });
//   }
// };

export {initSliderNews};
