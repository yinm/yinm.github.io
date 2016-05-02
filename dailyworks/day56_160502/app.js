(function() {
  'use strict';

  window.onload = function() {
    var timer1
    ,   flg;
    var start = document.timer.elements[2];
    var stop = document.timer.elements[3];

    function init() {
      document.timer.elements[0].value = "25";
      document.timer.elements[1].value = "0";
    }

    function cntStart() {
      start.disabled = true;
      timer1 = setTimeout(countDown, 1000);
    }

    function cntStop() {
      start.disabled = false;
      clearTimeout(timer1);
    }

    function countDown() {
      var min = document.timer.elements[0].value;
      var sec = document.timer.elements[1].value;

      if (min === "") min = 0;
      min = parseInt(min);

      if (sec === "") sec = 0;
      sec = parseInt(sec);

      tmWrite(min * 60 + sec - 1);

      timer1 = setTimeout(countDown, 1000);
    }

    // 残り時間の表示
    function tmWrite(int) {
      int = parseInt(int);

      if (int <= 0) {
        pomodoro();
      }
      else {
        document.timer.elements[0].value = Math.floor(int / 60);
        document.timer.elements[1].value = int % 60;
      }
    }

    function pomodoro() {
      if (flg) {
        init();
        flg = false;
        alert("作業開始です！:3");

      }
      else {
        document.timer.elements[0].value = "5";
        document.timer.elements[1].value = "0";
        flg = true;
        alert("休憩です！:)");
      }
    }

    start.addEventListener('click', cntStart);
    stop.addEventListener('click', cntStop);
    init();
  }
})();
