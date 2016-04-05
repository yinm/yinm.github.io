'use strict';

window.onload = function() {
  var myColor = [
    "000000",
    "101010",
    "202020",
    "303030",
    "404040",
    "505050",
    "606060",
    "707070",
    "808080",
    "909090",
    "A0A0A0",
    "B0B0B0",
    "C0C0C0",
    "D0D0D0",
    "E0E0E0",
    "FFFFFF"
  ];
  var body = document.querySelector('body');
  var myCnt = 0
  var myTime;

  function myFade() {
    if (myCnt !== 16) {
      body.style.backgroundColor = "#" + myColor[myCnt];
      myTime = (myCnt === 0 || myCnt === 15) ? 1000 : 50;
      myCnt++;
      setTimeout(myFade, myTime);
    }
  }

  myFade();
};
