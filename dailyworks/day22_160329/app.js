angular.module('myApp', [])
  .controller('mainCtrl', ['$http', function($http) {
    var vresults;
    this.doSearch = function() {
      var url = 'http://api.atnd.org/events/?format=jsonp&'
            + [
              'keyword=' +encodeURIComponent(this.query),
              'callback=JSON_CALLBACK'
            ].join('&');
      $http.jsonp(url).success(function(data) {
        this.results = data.events;
        console.log(this.results);
      });
    };
  }]);
