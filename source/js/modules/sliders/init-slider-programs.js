const sliderPrograms = document.querySelector('.programs__swiper');
const buttonPrev = document.querySelector('.programs__button--prev');
const buttonNext = document.querySelector('.programs__button--next');
const programsPagination = document.querySelector('.programs__pagination');

const initSliderPrograms = () => {
  if (sliderPrograms) {
    // eslint-disable-next-line
    new Swiper(sliderPrograms, {

      navigation: {
        nextEl: buttonNext,
        prevEl: buttonPrev,
      },

      pagination: {
        el: programsPagination,
        type: 'progressbar',
      },

      allowTouchMove: true,

      breakpoints: {
        1200: {
          slidesPerView: 3,
          spaceBetween: 32,
          allowTouchMove: false,
        },

        768: {
          slidesPerView: 2.13,
          spaceBetween: 30,
        },

        320: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
      },
    });
  }
};

export {initSliderPrograms};
