const sliderNews = document.querySelector('.news__swiper');
const newsPagination = document.querySelector('.news__pagination');
const buttonPrev = document.querySelector('.news__button--prev');
const buttonNext = document.querySelector('.news__button--next');

const initSliderNews = () => {
  if (sliderNews) {
    // eslint-disable-next-line
      new Swiper(sliderNews, {

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
      slidesPerView: 'auto',
      spaceBetween: 32,
      breakpoints: {
        768: {
          spaceBetween: 30,
        },
        320: {
          spaceBetween: 30,
        },
      },
    });
  }
};

export {initSliderNews};
