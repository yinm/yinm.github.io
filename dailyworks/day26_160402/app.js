'use strict';

(function() {
  window.onload = function() {
    var hoihoi = document.getElementById('hoihoi');

    hoihoi.addEventListener('mousemove', function() {
      alert('ホイホイに捕まってます！');
    });

    hoihoi.addEventListener('mouseout', function() {
      alert('ホイホイから脱出！!！');
    });
  };
})();
