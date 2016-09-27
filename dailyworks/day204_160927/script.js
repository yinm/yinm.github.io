'use strict';

window.addEventListener('load', ()=> {
  let xmlHttp;
  const btn = document.getElementById('btn');

  btn.addEventListener('click', ()=> {
    const selectgame = document.getElementById('game').value;
    const fileName = './' + selectgame + '.txt';

    if (window.XMLHttpRequest) {
      xmlHttp = new XMLHttpRequest();
    }
    else {
      xmlHttp = null;
    }

    xmlHttp.onreadystatechange = checkStatus;
    xmlHttp.open('GET', fileName, true);
    xmlHttp.send(null);
  }, false);

  function checkStatus() {
    if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
      const display = document.getElementById('display');
      display.innerHTML = xmlHttp.responseText;
    }
  }

}, false);
