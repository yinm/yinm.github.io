(function() {
  'use strict';

  window.onload = function() {
    var myFntCnt = 1;
    var myFntFlg = 1;

    function myFunc() {
      // サイズ拡大モードの処理
      if (myFntFlg === 1) {
        if (myFntCnt === 30) {
          myFntFlg = 0;
          myFntCnt--;
        }
        else {
          myFntCnt++;
        }
      }
      // サイズ縮小モードの処理
      else {
        if (myFntCnt === 1) {
          myFntFlg = 1;
          myFntCnt++;
        }
        else {
          myFntCnt--;
        }
      }
      document.getElementById("change").style.fontSize = myFntCnt + "px";
      setTimeout(myFunc, 100);
    }

    myFunc();
  };

})();
