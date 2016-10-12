'use strict';

const obj = {
  _a: 0,
  get a() { return this._a },
  set a(n) { this._a = n },
};

obj.a = 3;
console.log(obj.a);
