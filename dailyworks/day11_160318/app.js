function SampleCtrl($timeout, $scope) {

  var self = this;

  $timeout(function() {
      self.name = 'A';
  }, 1000);
}

angular.module('sample', [])
  .directive('sampleDirective', function() {
    return {
      restrict: 'E',
      scope: {},
      controller: SampleCtrl,
      controllerAs: 'ctrl',
      bindToController: {
        num: '=',
        name: '='
      },
      transclude: true,
      link: function(scope, elem, attrs, ctrl, transclude) {
        transclude(scope, function(clone) {
          elem.append(clone);
        });
      }
    };
  });
