angular.module('myApp', [])
  .controller('CtrlLink', ['$scope', function($scope) {
    $scope.value = 'red';
  }])
  .directive('myLink', function() {
    return {
      template: '<div class="{{value}}"></div>',
      link: function(_scope, _element, _attars) {
        $(_element).hide().fadeIn(2500);
        _scope.value = 'blue';
      }
    };
  })

  .controller('CtrlCompile', ['$scope', function($scope) {
    $scope.value = 'red';
  }])
  .directive('myCompile', function() {
    return {
      template: '<div class="{{value}}"></div>',
      compile: function(_element, _attars) {
        $(_element).hide().fadeIn(2500);
        return function(_scope, _element, _attars) {
          _scope.value = 'blue';
        }
      }
    };
  })

  // loop処理
  .controller('CtrlLinkLoop', ['$scope', function($scope) {
    $scope.list = [
      {name: 'A'},
      {name: 'B'},
      {name: 'C'},
      {name: 'D'},
      {name: 'E'},
      {name: 'F'},
      {name: 'G'},
      {name: 'H'},
      {name: 'I'},
      {name: 'J'}
    ];
  }])
  .directive('myLinkLoop', function() {
    var _colors = ['red', 'green', 'blue'];
    return {
      template: '<div class="{{value}}"></div>',
      link: function(_scope, _element, _attars) {
        // ループ回数分、実行する
        $(_element).hide().fadeIn(2500);
        _scope.value = _colors[Math.floor(Math.random() * _colors.length)];
      }
    };
  })

  .controller('CtrlCompileLoop', ['$scope', function($scope) {
    $scope.list = [
      {name: 'a'},
      {name: 'b'},
      {name: 'c'},
      {name: 'd'},
      {name: 'e'},
      {name: 'f'},
      {name: 'g'},
      {name: 'h'},
      {name: 'i'},
      {name: 'j'}
    ];
  }])
  .directive('myCompileLoop', function() {
    var _colors = ['red', 'green', 'blue'];
    return {
      template: '<div class="{{value}}"></div>',
      compile: function(_element, _attars) {

        // 初回のみ実行する
        var _color = _colors[Math.floor(Math.random() * _colors.length)];

        return function(_scope, _element, _attars) {

          // ループ回数分、実行する
          $(_element).hide().fadeIn(2500);
          _scope.value = _color;
        }
      }
    };
  });
