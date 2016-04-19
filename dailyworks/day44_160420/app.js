(function() {
  'use strict';

  window.onload = function() {
    function calc() {
      var myNow = new Date();
      var myBirth = new Date(document.myF.myFy.value, document.myF.myFm.value-1, document.myF.myFd.value);
      var myMsec = myNow.getTime() - myBirth.getTime();
      var myDay = Math.floor(myMsec / (1000 * 60 * 60 * 24));
      document.myF.myFmes.value = "生まれてから" + (myDay + 1) + "日目になります";
    }

    document.myF.myFbtn.addEventListener('click', calc);
  };
})();
