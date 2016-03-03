angular.module('myApp', [])
  .controller('myCtrl', [function() {
    this.favs = [];

    this.click = function() {
      this.favs.push(this.iineInput);
      this.iineInput = '';
    }
  }]);
