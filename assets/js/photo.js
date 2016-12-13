(function() {
  'use strict';

  $('.dropdown-button').dropdown();

  $('.carousel.carousel-slider').carousel({
    full_width: true,
    indicators: true
  });

  setInterval(() => {
    $('#photo-slides').carousel('next');
  }, 5000);
})();
