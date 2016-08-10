(function() {
  'use strict';

  window.addEventListener('load', function() {
    const tap = document.getElementById('tap');
    if ("ontouchstart" in window) {
      tap.innerHTML = "できるよ！";
    }
    else {
      tap.innerHTML = "できないよ・・・";
    }

    // Button sample
    let cTCnt = 0;
    const clickTap = document.getElementById('clickTapBtn');
    const clickTapCnt = document.getElementById('clickTapCnt');

    if (document.addEventListener) {
      const _click = (window.ontouchstart === undefined) ? 'click' : 'touchstart';
      clickTap.addEventListener(_click, function() {
        cTCnt++;
        clickTapCnt.innerHTML = cTCnt;
      }, false);
    }
    else if (document.attachEvent) {
      clickTap.attachEvent('onclick', function() {
        cTCnt++;
        clickTapCnt.innerHTML = cTCnt;
      });
    }
  });
}());
