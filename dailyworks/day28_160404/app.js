'use strict';

window.onload = function() {
  var myCnt = 1;
  var sec = document.getElementById('sec');

  setInterval(function() {
    sec.textContent = myCnt + "秒";
    myCnt++;
  }, 1000);
};
