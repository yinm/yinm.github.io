'use strict';

window.addEventListener('load', ()=> {
  const myTextbox = document.getElementById('my-textbox');

  function checkName(evt) {
    const charCode = evt.charCode;

    if (charCode != 0 && (charCode < 97 || charCode > 122)) {
      evt.preventDefault();
      alert('英小文字のみ入力できます。' + '\n' + 'charCode: ' + charCode + '\n');
    }
  }

  myTextbox.addEventListener('keypress', checkName, false);
}, false);

