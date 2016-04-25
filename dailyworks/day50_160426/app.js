(function() {
  'use strict';

  window.onload = function() {
    var timer;
    var onBtn = document.tm.on;
    var offBtn = document.tm.off;
    var str = document.tm.text;

    function tmrOn() {
      onBtn.setAttribute('disabled', '');
      var add = Math.floor(Math.random() * 10);
      str.value += add;

      timer = setTimeout(tmrOn, 1000);
    }

    function tmrOff() {
      clearTimeout(timer);
      onBtn.removeAttribute('disabled', '');
    }

    onBtn.addEventListener('click', tmrOn);
    offBtn.addEventListener('click', tmrOff);
  };
})();
