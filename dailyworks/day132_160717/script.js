$(function() {
  $("div").mousemove(function(e) {
    var pageCoords = "(" + e.pageX + "," + e.pageY + ")";
    var clientCoords = "(" + e.clientX + "," + e.clientY + ")";
    $("span:first").text("( e.pageX, e.pageY ) - " + pageCoords);
    $("span:last").text("( e.clientX, e.clientY ) - " + clientCoords);
  });
});
