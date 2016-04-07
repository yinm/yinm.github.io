'use strict';

    var myQA = [
      "ul", "箇条書きリスト",
      "ol", "番号付きリスト",
      "p", "段落",
      "hr", "区切り線"
    ];
    var myNowCnt = 0;
    var myLastCnt = myQA.length / 2;
    var myA;

    function myQues() {
      myA = prompt("\n問題：" + myQA[myNowCnt * 2], "");
      if (myA !== null) {
        if (myA === myQA[myNowCnt * 2 + 1]) {
          myNowCnt = (myNowCnt === myLastCnt - 1) ? 0 : myNowCnt + 1;
        }
        else {
          alert("はずれ！ 答えは" + myQA[myNowCnt * 2 + 1] + "です！");
        }
        myQues();
      }
    }

    window.onload = function() {
      var input = document.getElementById('input');
      input.addEventListener('click', myQues);
    };
