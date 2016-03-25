var app = angular.module("app", []);
var MyAppCtrl = (function () {
    function MyAppCtrl() {
    }
    return MyAppCtrl;
}());
app.component("myApp", {
    template: "<greeting name=\"'World'\"></greetin>",
    controller: MyAppCtrl
});
var GreetingCtrl = (function () {
    function GreetingCtrl() {
    }
    Object.defineProperty(GreetingCtrl.prototype, "upperName", {
        get: function () {
            return this.name.toUpperCase();
        },
        enumerable: true,
        configurable: true
    });
    return GreetingCtrl;
}());
app.component("greeting", {
    bindings: {
        name: "="
    },
    template: "<h1>Hello {{$ctrl.upperName}}!</h1>",
    controller: GreetingCtrl
});
angular.bootstrap(document.body, [app.name]);
