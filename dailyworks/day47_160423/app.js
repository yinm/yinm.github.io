(function() {
  'use strict';

  window.onload = function() {
    var tbody = document.getElementById('tbody');
    var now = new Date();
    var first = new Date(now.getFullYear(), now.getMonth(), 1);
    var last  = new Date(now.getFullYear(), now.getMonth() + 1, 0);
    var first_day = first.getDay();
    var last_date = last.getDate();
    var skip = true;
    var date = 1;
    var dayOfTheWeek = [
      "日",
      "月",
      "火",
      "水",
      "木",
      "金",
      "土"
    ]

    // 曜日の表示
    var tr = document.createElement('tr');
    tr.style.backgroundColor = " #3d9bbe";
    tr.style.color = "#fff";
    for (let col = 0; col < 7; col++) {
      var td = document.createElement('td');
      td.innerHTML = dayOfTheWeek[col];
      tr.appendChild(td);
    }
    tbody.appendChild(tr);

    // 日付の表示
    for (var row = 0; row < 6; row++){
      var tr = document.createElement('tr');
      for (var col = 0; col < 7; col++) {
        if (row === 0 && first_day === col){
          skip = false;
        }
        if (date > last_date) {
          skip = true;
        }
        var td = document.createElement('td');
        td.innerHTML = skip ? '&nbsp;' : date++;
        if (date-1 === now.getDate()) {
          td.style.backgroundColor = "#9d2626";
          td.style.color = "#fff";
        }
        tr.appendChild(td);
      }
      tbody.appendChild(tr);
    }
  };
})();
