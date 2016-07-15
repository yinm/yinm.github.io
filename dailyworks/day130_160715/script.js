$(function() {
  $("li").hover(
    function() {
      $(this).append($("<span style='color: #fff;'> ** now select **</span>"))
             .css("background-color", "#3babc8");
    },
    function() {
      $(this).find("span:last").remove();
      $(this).css("background-color", "");
    }
  );
});
