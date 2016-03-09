angular.module('myApp', [])
  .controller('myCtrl',
  ['$scope', '$interval', function($scope, $interval) {
    $scope.count = 5;

    var timer = $interval(function() {
      $scope.count--;
      if ($scope.count === 0) {
        $interval.cancel(timer);
        $scope.count = "Hello World!";
      }
    }, 1000);
  }]);
