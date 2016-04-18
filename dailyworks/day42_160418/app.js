(function() {
  'use strict';

  window.onload = function() {
    var q1 = document.myForm.myFormQ1;
    var q2 = document.myForm.myFormQ2;
    var a = document.myForm.myFormA;
    var btn = document.myForm.btn;

    function mySet() {
      q1.value = Math.floor(Math.random() * 9) + 1;
      q2.value = Math.floor(Math.random() * 9) + 1;
      a.value = "";
    };

    btn.addEventListener('click', function() {
      var correctA = q1.value * q2.value;
      if (correctA === eval(a.value)) {
        alert("正解です:3");
      }
      else {
        alert("ハズレです、、、答えは " + correctA + " です！");
      }

      mySet();
    });

    mySet();
  };
})();
