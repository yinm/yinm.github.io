function childController($scope) {
  $scope.$watch("num", function(newVal) {
    this.num = newVal;
  }.bind(this));
}

function childDirective() {
  var ddo = {
    restrict: "E",
    scope: {
      num: "=prop1"
    },
    controller: childController,
    controllerAs: "child",
    template: [
      "<div style='background-color: #d0d0d0'>",
        "<span>num: {{child.num}} in child </span>",
      "</div>"
    ].join("")
  };
  return ddo;
}

angular.module("myApp").directive("childDirective", childDirective);
