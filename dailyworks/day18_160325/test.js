const app = angular.module("app", []);

class MyAppCtrl {
}

app.component("myApp", {
  template: `<greeting name="'World'"></greeting>`,
  controller: MyAppCtrl
});

class GreetingCtrl {

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
