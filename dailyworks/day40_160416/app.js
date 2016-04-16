(function() {
  'use strict';

  window.onload = function() {
    document.getElementById('change').addEventListener("click", function() {
      var img = document.getElementsByTagName("img")[0];
      var val = document.getElementById('filterVal').value;
      img.style.webkitFilter = "sepia(" + val + ")";
      img.style.filter = "sepia(" + val + ")";
    }, false);
  };
})();
