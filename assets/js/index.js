(function() {
  'use strict';

  $('.dropdown-button').dropdown();

  $('.scrollspy').scrollSpy({
    scrollOffset: 0
  });

  $('.table-of-contents').pushpin({
    top: $('main').offset().top,
    bottom: $('main').offset().top + $('main').height() + $('footer').height(),
    offset: 0
  });

  $('#expand').click(() => {
    $('details').prop('open', true);
    $('#close-expand').removeClass('hide');
    $('#expand').addClass('hide');
  });

  $('#close-expand').click(() => {
    $('details').prop('open', false);
    $('#close-expand').addClass('hide');
    $('#expand').removeClass('hide');
  });

  $('#send').on('mousedown', () => {
    $('#send i').toggleClass('fa-envelope-open-o fa-envelope');
  });

  $('#send').on('mouseup', () => {
    $('#send i').toggleClass('fa-envelope-open-o fa-envelope');
  });
})();
