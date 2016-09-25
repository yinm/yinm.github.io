'use strict';

window.addEventListener('load', () => {
  const xhr_btn = document.getElementById('xhr_btn');
  const result = document.getElementById('result');

  xhr_btn.addEventListener('click', () => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', location.href);
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        result.value = xhr.responseText;
      }
    };
    xhr.send();

  }, false);

}, false);
