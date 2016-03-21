angular.module('myApp')
  .controller('MainController', [function() {
    this.msg = 'Welcome your blog page :)';
  }])

  .controller('AboutController', [function() {
    this.name = '';
  }])

  .controller('ArticlesController', [function() {
    this.list = [];

    this.store = function() {
      this.item.date = Date.now();
      this.list.push(this.item);
      this.item = {};
    }
  }])
