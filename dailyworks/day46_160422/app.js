(function() {
  'use strict';

  window.onload = function() {
    document.myForm.btn.addEventListener('click', function() {
      var mySelect = document.myForm.myMenu.selectedIndex;
      location.href = document.myForm.myMenu.options[mySelect].value;
    });
  };
})();
