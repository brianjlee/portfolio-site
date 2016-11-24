(function() {
  'use strict';

  $('.carousel.carousel-slider').carousel({
    full_width: true,
    indicators: true
  });

  $('.scrollspy').scrollSpy({
    scrollOffset: 0
  });

  $('.table-of-contents').pushpin({
    top: $('main').offset().top,
    bottom: $('main').offset().top + $('main').height() + $('footer').height(),
    offset: 0
  });

  const carouselNext = function() {
    $('.carousel.carousel-slider').carousel('next');
  };

  setInterval(carouselNext(), 1000);


})();
