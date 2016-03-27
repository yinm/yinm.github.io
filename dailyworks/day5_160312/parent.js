angular.module("myApp", []);

function parentController() {
  this.num = 0;
  this.increment = function() {
    this.num++;
  }
}

function parentDirective() {
  var ddo = {
    restrict: "E",
    scope: {},
    controller: parentController,
    controllerAs: "parent",
    template: [
      "<div style='background-color: #f0f0f0'>",
        "<span>num: {{parent.num}} in parent </span>",
        "<button ng-click='parent.increment()'>+1</button>",
        "<child-directive prop1='parent.num'></child-directive>",
        "<p>参考：<a href='http://qiita.com/shinsukeimai/items/131780e2f0d82cbf799a'>AngularJS1.4とbindToController</a></p>",
      "</div>"
    ].join("")
  };
  return ddo;
}

angular.module("myApp").directive("parentDirective", parentDirective);