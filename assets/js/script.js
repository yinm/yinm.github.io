$(function() {
  var $nav = $('#global-nav');

  $(window).scroll(function() {
    console.log($(window).scrollTop());
    if ($(window).scrollTop() > 100) {
      $nav.addClass('fixed');
    }
    else {
      $nav.removeClass('fixed');
    }
  });

});
