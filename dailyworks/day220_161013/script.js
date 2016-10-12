'use strict';

const obj = (() => {
  let _a = false;
  return {
    get a() { return _a; },
    set a(n) {
      if (n === true || n === false) {
        _a = n;
      }
    }
  };
})();

obj.a = true;
console.log(obj.a);
// closureを使っているので、値保存用のプロパティを利用できるのは、Getter or Setterのみ。
obj._a = false;
console.log(obj.a);
