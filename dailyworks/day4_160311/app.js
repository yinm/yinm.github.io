angular.module('myApp', [])
  .controller('myCtrl', [function() {
    this.open = false;

    this.onclick = function() {
      // true・falseの変換
      this.open = !this.open;
    };
  }]);
