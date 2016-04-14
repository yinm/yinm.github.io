(function() {
  'use strict';

  window.onload = function() {
      var myPassWord = prompt("パスワードを入力してください","");
      if (myPassWord === "pass") {
        alert("合ってるよ！");
      }
      else {
        alert("違うよ！");
      }
  };
})();
