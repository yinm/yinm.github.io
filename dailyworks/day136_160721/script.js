$(function() {
  $("button").click(function() {
    $(this).clone(true).insertAfter(this);
  });
});
