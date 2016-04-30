(function() {
  'use strict';

  window.onload = function()
  {
    var obj = document.getElementById('dom');

    function func1()
    {
      obj.textContent = "マウスカーソルが乗りました!:)";
    }

    function func2()
    {
      obj.textContent = "マウスカーソルが外れました!:3";
    }

    obj.onmouseover = func1;
    obj.onmouseout = func2;
  }
})();
