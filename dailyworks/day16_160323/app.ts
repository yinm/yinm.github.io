// 型定義ファイルの読み込み
/// <reference path="./typings/main.d.ts" />

class SampleCtrl {
  public firstName: string;
  public lastName: string;

  constructor () {
    this.init();
  }

  private init(){
    this.firstName = 'John';
    this.lastName = 'Doe';
  }

  public getFullName(): string{
    return this.firstName + ' ' + this.lastName;
  }
}

angular.module('MyAngularJS', [])
  .controller('SampleCtrl', [SampleCtrl]);
