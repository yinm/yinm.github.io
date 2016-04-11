(function() {
  'use strict';
  window.onload = function() {
    function myFunc() {
      var myD = new Date();
      var myYear = myD.getFullYear();
      var myNextYear = new Date(myYear + 1, 0, 1);
      var myMsec = myNextYear.getTime() - myD.getTime();
      var myNextDay,
          myNextHour,
          myNextMin,
          myNextSec,
          myDisp;

      // 日の計算
      var myNextDay = ~~(myMsec / (1000 * 60 * 60 * 24));

      // 時の計算
      myMsec -= (myNextDay * (1000 * 60 * 60 * 24));
      myNextHour = ~~(myMsec / (1000 * 60 * 60));

      // 分の計算
      myMsec -= (myNextHour * (1000 * 60 * 60));
      myNextMin = ~~(myMsec / (1000 * 60));

      // 秒の計算
      myMsec -= (myNextMin * (1000 * 60));
      myNextSec = ~~(myMsec / 1000);


      // 表示の準備
      myDisp = "";
      if (myNextDay !== 0) myDisp += myNextDay + "日と";
      if (myNextHour !== 0) myDisp += myNextHour + "時間";
      if (myNextMin !== 0) myDisp += myNextMin + "分";
      myDisp += myNextSec + "秒";
      document.getElementById("countdown").innerHTML = myDisp;
    };

    myFunc();

  };
})();
