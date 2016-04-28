(function() {
  'use strict';

  window.onload = function() {
    function winOpen() {
      var w = (screen.width - 640) / 2;
      var h = (screen.height - 480) / 2;

      window.open("staffroll.html", "sub", "width=640, height=480," + "left=" + w + ",top=" + h + ",scrollbars = no, menubar = no, toolbar = no");
    }

    document.btn.elements[0].addEventListener('click', winOpen);
  }
})();
