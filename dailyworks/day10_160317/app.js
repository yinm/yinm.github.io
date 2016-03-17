'use strict';

class MainController {
  constructor($scope) {
    this.$scope = $scope;
    this.user = 'John';

    this.$scope.$watch('main.user', (newVal) => {
      console.log(newVal);
    });

    MainController.$inject = ['$scope'];
  }
}

function mainDDO() {
  return {
    restrict: 'E',
    controller: MainController,
    controllerAs: 'main',
    scope: {},
    template: [
      '<input type="text" ng-model="main.user"><p>Hello, {{main.user}}!</p>',
        '<p>参考：<a href="http://qiita.com/armorik83/items/5542daed0c408cb9f605">AngularJSモダンプラクティス</a></p>'
    ].join("")
  };
}

angular.module('myApp', []).directive('main', mainDDO);
