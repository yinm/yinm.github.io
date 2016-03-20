'use strict';

class MainController {
  constructor($scope, $filter) {
    this.$scope = $scope;
    this.todos = [];

    this.newTitle = '';

    // フィルタ条件
    this.filter = {
      done: {done: true},
      remaining: {done: false}
    };

    // 現在のフィルタの状態
    // nullだと表示されないので、undefinedにしている。
    this.currentFilter = undefined;

    // 件数の取得
    this.where = $filter('filter');


    // イベントが発生したスコープ・オブジェクト（スコープ全体）を監視する場合は、第2引数に「scope」を引数に渡す。
    this.$scope.$watch('$ctrl.todos', (scope) => {
      var length = this.todos.length;

      this.allCount = length;
      this.doneCount = this.where(this.todos, this.filter.done).length;
      this.remainingCount = length - this.doneCount;
    }, true);


    MainController.$inject = ['$scope', '$filter'];
  }


//-----------------------------------------------
// クラスメソッド
// ----------------------------------------------
  addTodo() {
    this.todos.push({
      title: this.newTitle,
      done: false
    });

    this.newTitle = '';
  };

  // フィルタ条件を変更するメソッド
  changeFilter(filter) {
    this.currentFilter = filter;
  };

  // 全て完了/未了
  checkAll() {
    var state = !!this.remainingCount;

    angular.forEach(this.todos, (value) => {
      value.done = state;
    });
  }

  // 完了したToDoを全て削除
  removeDoneTodo() {
    this.todos = this.where(this.todos, this.filter.remaining);
  };

  // 任意のToDoを削除
  removeTodo(currentTodo) {
    this.todos = this.where(this.todos, function(todo) {
      return currentTodo !== todo;
    });
  };
}

angular.module('App', [])
  .component('todo', {
    controller: MainController,
    controllerAs: '$ctrl',
    templateUrl: 'todo.html'
  });
