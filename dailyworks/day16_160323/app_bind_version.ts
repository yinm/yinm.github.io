/// <reference path="./typings/main.d.ts" />

class SampleCtrl {
  constructor (
    public $scope
  ) {
    this.init();
    this.$scope.getFullName = this.getFullName.bind(this);
  }

  private init()
  {
    this.$scope.firstName = 'John';
    this.$scope.lastName = 'Doe';
  }

  public getFullName(): string
  {
    return this.$scope.firstName + ' ' + this.$scope.lastName;
  }
}

angular.module('MyAngularJS', [])
  .controller('SampleCtrl', [
    '$scope',
    SampleCtrl
  ]);
