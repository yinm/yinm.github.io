(function() {
  'use strict';

  var r = 255, g = 255, b = 255;
  var rd = 1, gd = 1, bd = 1;
  var k = 10;

  window.addEventListener('scroll', function() {
    // r -= Math.floor(Math.random() * k) * rd:
    r -= ~~(Math.random() * k) * rd;
    // g -= Math.floor(Math.random() * k) * gd;
    g -= ~~(Math.random() * k) * gd;
    // b -= Math.floor(Math.random() * k) * bd;
    b -= ~~(Math.random() * k) * bd;

    if (r < 0) {
      r = 255;
    }
    if (g < 0) {
      g = 255;
    }
    if (b < 0) {
      b = 255;
    }

    document.body.style.backgroundColor = 'rgb(' + r + ', ' + g + ', ' + b + ')';
  }, false);

})();
