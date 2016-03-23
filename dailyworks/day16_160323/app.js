/// <reference path="./typings/main.d.ts" />
var SampleCtrl = (function () {
    function SampleCtrl() {
        this.init();
    }
    SampleCtrl.prototype.init = function () {
        this.firstName = 'John';
        this.lastName = 'Doe';
    };
    SampleCtrl.prototype.getFullName = function () {
        return this.firstName + ' ' + this.lastName;
    };
    return SampleCtrl;
}());
angular.module('MyAngularJS', [])
    .controller('SampleCtrl', [SampleCtrl]);
