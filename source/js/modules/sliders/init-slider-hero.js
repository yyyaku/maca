const sliderHero = document.querySelector('.hero__swiper');
const intro = document.querySelector('.hero');

const initSliderHero = () => {
  if (sliderHero) {
    // eslint-disable-next-line
    const swiper = new Swiper(sliderHero, {

      loop: true,
      allowTouchMove: true,

      slidesPerView: 1,
      spaceBetween: 40,
      fadeSpeed: 300,
      // autoplay: {
      //   delay: 3000,
      // },

      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },

      breakpoints: {
        1200: {
          allowTouchMove: false,
        },
      },
    });

    swiper.on('slideChange', function () {

      const activeSlide = document.querySelector('.swiper-slide-active');

      if (activeSlide.classList.contains('hero__item--internship')) {
        intro.classList.add('hero--volunteer');
        intro.classList.remove('hero--internship');
        intro.classList.remove('hero--experience');
      }

      if (activeSlide.classList.contains('hero__item--volunteer')) {
        intro.classList.add('hero--experience');
        intro.classList.remove('hero--internship');
        intro.classList.remove('hero--volunteer');
      }

      if (activeSlide.classList.contains('hero__item--experience')) {
        intro.classList.add('hero--internship');
        intro.classList.remove('hero--volunteer');
        intro.classList.remove('hero--experience');
      }
    });
  }
};

export {initSliderHero};
