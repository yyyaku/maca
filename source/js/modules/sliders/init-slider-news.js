const sliderNews = document.querySelector('.news__swiper');
const newsPagination = document.querySelector('.news__pagination');
const buttonPrev = document.querySelector('.news__button--prev');
const buttonNext = document.querySelector('.news__button--next');
let sliderNewsCards;

const initSliderNews = () => {
  if (sliderNews) {
    // eslint-disable-next-line
     sliderNewsCards = new Swiper(sliderNews, {

      navigation: {
        nextEl: buttonNext,
        prevEl: buttonPrev,
      },

      pagination: {
        el: newsPagination,
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      },

      allowTouchMove: true,
      breakpoints: {
        1200: {
          slidesPerView: 'auto',
          spaceBetween: 32,
          allowTouchMove: false,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
          grid: {
            rows: 2,
            fill: 'row',
          },
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 30,
          grid: {
            rows: 2,
            fill: 'row',
          },
        },
      },
    });
  }
};

const sliderControls = document.querySelector('.news__controls-swiper');
const sliderControlsWrapper = document.querySelector('.news__controls');
const sliderControlsSlide = document.querySelectorAll('.news__control');
let sliderNewsControls;

const initSliderControlsNews = () => {
  if (window.innerWidth < 768) {
    if (sliderControls) {
      // eslint-disable-next-line
      sliderNewsControls = new Swiper(sliderControls, {
        slidesPerView: 2.5,
        spaceBetween: 12,
      });
    }
  } else {
    sliderControls.classList.remove('swiper');
    sliderControlsWrapper.classList.remove('swiper-wrapper');
    sliderControlsSlide.forEach((item) => {
      item.classList.remove('swiper-slide');
    });
  }
};

const initSliderControllerNews = () => {
  sliderNewsControls.controller.control = sliderNewsCards;
  sliderNewsCards.controller.control = sliderNewsControls;
}

export {initSliderNews, initSliderControlsNews, initSliderControllerNews};
