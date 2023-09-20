const sliderReviews = document.querySelector('.reviews__swiper');
const buttonPrev = document.querySelector('.reviews__button--prev');
const buttonNext = document.querySelector('.reviews__button--next');
const reviewsPagination = document.querySelector('.reviews__pagination');

const initSliderReviews = () => {
  if (sliderReviews) {
    // eslint-disable-next-line
    new Swiper(sliderReviews, {

      navigation: {
        nextEl: buttonNext,
        prevEl: buttonPrev,
      },

      pagination: {
        el: reviewsPagination,
        type: 'progressbar',
      },

      allowTouchMove: true,

      breakpoints: {
        1200: {
          slidesPerView: 2,
          spaceBetween: 32,
          allowTouchMove: false,
        },

        768: {
          slidesPerView: 1.275,
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

export {initSliderReviews};
