(function() {
  'use strict'

  window.onload = function() {
    var countdown = function(goal) {
      var now = new Date();
      var rest = goal.getTime() - now.getTime();
      var hours = Math.floor(rest / 1000 / 60 / 60);

      return hours;
    }

    var goal = new Date(2016, 11, 31);
    var hour = countdown(goal);
    document.getElementById('timer').textContent = hour;
  }
})();
