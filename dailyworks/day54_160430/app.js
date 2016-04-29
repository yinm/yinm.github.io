(function() {
  'use strict';

  window.onload = function() {
    document.btn.elements[0].addEventListener('click', function() {
      scrollTo(0, 0);
    });

    document.btn.elements[1].addEventListener('click', function() {
      scrollBy(0, 200);
    });
  }
})();
