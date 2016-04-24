(function() {
  'use strict';

  window.onload = function() {
    function hyoji() {
      var str = "1秒ごとに一文字ずつ表示します。";
      var cnt = document.timer.moji.value.length;

      // 文字が全て表示されているかを確認
      if (cnt < str.length) {
        document.timer.moji.value = str.substr(0, cnt + 1);
      }
      // 文字が全て表示されていれば、文字のない状態に戻す
      else {
        document.timer.moji.value = "";
      }
      setTimeout(hyoji, 1000);
    };

    // ボタンを押した時の処理
    var doneFlg = false;
    document.timer.start,addEventListener("click", function() {
      // 初めてボタンを押す時のみ、処理が動くようにする。
      if (!doneFlg) {
        doneFlg = true;
        hyoji();
      }
    });

  };
})();
