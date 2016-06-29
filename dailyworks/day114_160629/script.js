(function() {
  'use strict';

  document.addEventListener('DOMContentLoaded', function(e) {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();

    document.body.insertAdjacentHTML('afterbegin', '<p>今日の日付は' + year + '年' + month + '月' + day + '日です。</p>');
  }, false);
})();
