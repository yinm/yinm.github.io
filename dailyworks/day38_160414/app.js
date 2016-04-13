(function() {
  'use strict';

  window.onload = function() {
    var btn = document.myForm.myBtn;

    btn.addEventListener('click', function() {
      var myWeekTbl = [
        "日",
        "月",
        "火",
        "水",
        "木",
        "金",
        "土",
        "日"
      ];
      var myDate = new Date(document.myForm.myYear.value, document.myForm.myMonth.value - 1, document.myForm.myDay.value);
      var myWeek = myDate.getDay();
      document.myForm.myMes.value = "あなたは" + myWeekTbl[myWeek] + "曜日に生まれました:)";
    });
  };
})();
