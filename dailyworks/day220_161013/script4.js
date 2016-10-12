'use strict';

const obj = {
  _a: 0,
  get a() {
    this._a++;
    console.log(this._a);
    return this._a;
  },
  set a(n) {
    this._a = n;
  },
};

obj.a = 3;
obj.a += 2;
obj.a;

// 値保存用のプロパティ(_a)を直接参照
obj._a = 10;
obj.a;
