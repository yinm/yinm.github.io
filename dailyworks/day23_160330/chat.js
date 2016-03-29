angular.module("chatApp", [])
  .controller("chatCtrl", function($scope) {
    // milkcocoaを使用できるようにする。
    var milkcocoa = new MilkCocoa("eggimdylhhq.mlkcca.com");
    // 利用するデータベース名の指定
    $scope.myApp = milkcocoa.dataStore('ng-test');

    $scope.user = "";
    $scope.msgBoxes = "";

    $scope.readMes = function() {
      $scope.myApp.stream().next(function(err, data) {
        $scope.msgBoxes = data;
        $scope.$apply();
      });
    }

    $scope.sendMes = function() {
      $scope.myApp.push({name: $scope.user, text: $scope.msg});
      $scope.msg = "";
    }

    $scope.deleteMes = function(num) {
      $scope.myApp.remove($scope.msgBoxes[num].id);
    }

    // メッセージを送信(push)したタイミングで実行（readMesを呼び出す。）
    $scope.myApp.on('push', function(event) {
      $scope.readMes();
    })

    $scope.myApp.on('remove', function(event) {
      $scope.readMes();
    })

  });
