(function() {
  'use strict';

  window.onload = function() {
    var myColTblB = [
      "#ff0000",
      "#fff"
    ];
    var myColTblF = [
      "#fff",
      "#ff0000"
    ];
    var myColCnt = 0;

    function myFunc() {
      document.getElementById("osusume").style.backgroundColor = myColTblB[myColCnt];
      document.getElementById("osusume").style.color = myColTblF[myColCnt];
      myColCnt = (myColCnt === 1) ? 0 : 1;

      setTimeout(myFunc, 300);
    }

    myFunc();
  }
})();
