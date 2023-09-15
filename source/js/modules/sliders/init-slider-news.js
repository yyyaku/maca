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

export {initSliderNews};
