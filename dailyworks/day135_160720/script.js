$(function() {
  $("#scroll").scroll(function() {
    $("#out").text("scrollLeft: " + $(this).scrollLeft());
  });
});
