$(function() {
  $(window).on('scroll', function() {
    var scrollpx = $(this).scrollTop();
    var mainContents = $('#mainContents');
    $('#mainContents span').text(scrollpx);
    if (scrollpx > 4000) {
      mainContents.css({
        background: '#FE5F55'
      });
    }
    else if (scrollpx > 3000) {
      mainContents.css({
        background: '#D6D1B1'
      });
    }
    else if (scrollpx > 2000) {
      mainContents.css({
        background: '#C7EFCF'
      });
    }
    else if (scrollpx > 1000) {
      mainContents.css({
        background: '#EEF5DB'
      });
    }
    else {
      mainContents.css({
        background: '#F0B67F'
      });
    }
  });
});
