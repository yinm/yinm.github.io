'use strict';

window.addEventListener('load', () => {

  const btn = document.getElementById('btn');
  btn.addEventListener('click', () => {

    let xmlHttp;

    if (window.XMLHttpRequest) {
      xmlHttp = new XMLHttpRequest();
    }
    else {
      if (window.ActiveXObject) {
        xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
      }
      else {
        xmlHttp = null;
      }
    }
    xmlHttp.onreadystatechange = checkStatus;
    xmlHttp.open('GET', './plan.txt', true);
    xmlHttp.send(null);

    function checkStatus() {
      if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
        const node = document.getElementById('display');
        node.innerHTML = xmlHttp.responseText;
      }
    }

  }, false);


}, false);
