$(function() {
  var tipsClassName = "help_tips";
  var popIdName = "help_tips_pop";

  $('.' + tipsClassName).hover(
    function() {
      var dataText = $(this).attr("data-help");

      $(this).after("<div id='" + popIdName + "'>" + dataText + "</div>")
      $(window).mousemove(function(e) {
        var x = e.pageX;
        var y = e.pageY;
        $("#" + popIdName).css({left:x + "px", top:y + "px"});
      })
    }, function() {
      // マウスが離れた時に、ツールチップを解除
      $("#" + popIdName).remove();
    }
  );
});
