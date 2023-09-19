const initAutofocusModalInput = () => {
  if (window.innerWidth > 767) {
    let btn = document.querySelector('.about__btn');
    let input = document.getElementById('name-field-modal');
    btn.addEventListener('click', function () {
      setTimeout(function () {
        input.focus();
      }, 100);
    });
  }
};

export {initAutofocusModalInput};
