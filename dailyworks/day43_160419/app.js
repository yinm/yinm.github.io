(function() {
  'use strict';

  window.onload = function() {
    var info = document.getElementById('info');

    info.textContent = "Last Update is ...  " + document.lastModified;
  };
})();
