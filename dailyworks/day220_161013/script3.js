'use strict';

const obj = {
  _a: false,
  get a() { return this._a },
  set a(n) {
    if (n === false || n === true) {
      this._a = n;
    }
  },
};

obj.a = true;
console.log(obj.a);

obj.a = "aiueo";
console.log(obj.a);
