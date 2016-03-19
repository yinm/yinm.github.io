angular.module('App', [])
  .controller('MainController', ['$scope', function($scope) {
    this.todos = [];

    this.addTodo = function() {
      this.todos.push({
        title: this.newTitle,
        done: false
      });
    };

    this.newTitle = '';

    // フィルタ条件
    this.filter = {
      done: {done: true},
      remaining: {done: false}
    };

    // 現在のフィルタの状態
    this.currentFilter = null;

    // フィルタ条件を変更するメソッド
    this.changeFilter = function(filter) {
      this.currentFilter = filter;
    };

  }]);
