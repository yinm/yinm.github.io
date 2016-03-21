angular.module('myApp', ['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
      // 「/」に対する処理
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })

      // 「/about」に対する処理
      .when('/about', {
        templateUrl: 'views/about.html',
        controllerAs: 'about'
      })

      // 「/articles/〜」に対する処理
      .when('/articles', {
        templateUrl: 'views/articles.html',
        controller: 'ArticlesController',
        controllerAs: 'article'
      })

      // それ以外のリクエストに対する処理
      .otherwise({
        redirectTo: '/'
      });
  });
