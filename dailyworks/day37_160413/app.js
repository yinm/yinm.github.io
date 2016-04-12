(function() {
  'use strict';

  window.onload = function() {
    var output = document.getElementById('output');

    if (document.referrer.length !== 0) {
      var myRef = document.referer;

      output.textContent = myRef + "からお越しですね:)";
    }
    else {
      output.textContent = "直接このページにお越しですね:)";
    }
  };
})();
