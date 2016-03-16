angular.module('myApp', [])
  .controller('Ctrl', ['$scope', function($scope) {
    $scope.msg = 'Hello world!';

    $scope.propA = 'PropertyA';
    $scope.propB = 'PropertyB';

    $scope.openAlert = function() {
      alert('openAlert');
    };
  }])

  // scope true or false
  .directive('myScopeTrue', function() {
    return {
      scope: true,
      template: '<p class="sample">{{msg}}</p>'
    };
  })
  .directive('myScopeFalse', function() {
    return {
      scope: false,
      template: '<p class="sample">{{msg}}</p>'
    };
  })

  // = | data bind
  .directive('myScopeEqual', function() {
    return {
      scope: {
        bind: '=prop'
      },
      template: '<p class="sample">{{bind}}</p>'
    };
  })

  // & | function
  .directive('myScopeAmp', function() {
    return {
      scope: {
        alert: '&openAlert'
      },
      template: '<p><a href ng-click="alert">アラートを出す</a></p>'
    };
  })

  // @ | interpolate
  .directive('myScopeAtmark', function() {
    return {
      scope: {
        txt: '@attribute'
      },
      template: '<p>{{txt}}</p>'
    };
  });
