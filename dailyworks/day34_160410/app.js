(function() {
  'use strict';

  window.addEventListener('load', function() {
    var ele = document.getElementById('search');

    var myString = "肉まん、あんまん、カレーまん、ピザまん、角煮肉まん";
    var ptr1 = myString.indexOf("肉まん");
    var ptr2 = myString.indexOf("肉まん", 30);
    var ptr3 = myString.lastIndexOf("肉まん");

    if (ptr1 === -1) {
      ptr1 = "見つかりませんでした";
    }
    if (ptr2 === -1) {
      ptr2 = "見つかりませんでした";
    }
    if (ptr3 === -1) {
      ptr3 = "見つかりませんでした";
    }

    ele.innerHTML = "元の文字列:" + myString + "<br>";
    ele.innerHTML += "先頭から検索:" + ptr1 + "<br>31文字目から検索:" + ptr2 + "<br>";
    ele.innerHTML += "最後から検索:" + ptr3;
  }, false);
})();
