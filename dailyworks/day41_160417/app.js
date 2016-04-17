(function() {
  'use strict';

  window.onload = function() {
    var time = document.getElementById('time');

    time.textContent = "ただいま、" + String(new Date().getHours()) + "時です";
  };
})();
