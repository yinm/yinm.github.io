(function() {
  'use strict';

  function tableCreate() {
    var myTbl;
    var myTblColor;
    var myStr;
    var i;

    myTbl = [
      "Aさんのホームページ",
      "Bさんのホームページ",
      "Cさんのホームページ",
      "Dさんのホームページ",
      "Eさんのホームページ",
      "Fさんのホームページ",
    ];
    myTblColor = [
      "iro1",
      "iro2"
    ];

    myStr = "<div class='sotowaku'>";
    for (i = 0; i < myTbl.length; i++) {
      myStr += "<div class=" + myTblColor[i % 2] + ">";
      myStr += myTbl[i];
      myStr += "<\/div>";
    }
    myStr += "<\/div>";

    return(myStr);
  };

  document.querySelector('body').innerHTML += tableCreate();
})();
