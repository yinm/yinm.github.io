(function() {
  'use strict';

  window.onload = function() {
    var ele = document.getElementsByClassName('output');

    ele[0].textContent = navigator.appName;
    ele[1].textContent = navigator.appVersion;
    ele[2].textContent = navigator.userAgent;
  };
})();
