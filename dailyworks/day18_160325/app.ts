/// <reference path="./typings/main.d.ts" />

const app = angular.module("app", []);

class MyAppCtrl {
}

app.component("myApp", {
  template: `<greeting name="'World'"></greetin>`,
  controller: MyAppCtrl
});

class GreetingCtrl {
  public name
  get upperName() {
    return this.name.toUpperCase();
  }
}

app.component("greeting", {
  bindings: {
    name: "="
  },
  template: `<h1>Hello {{$ctrl.upperName}}!</h1>`,
  controller: GreetingCtrl
});

angular.bootstrap(document.body, [app.name]);
