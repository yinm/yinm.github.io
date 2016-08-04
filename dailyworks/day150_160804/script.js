'use strict';

const o = Object.freeze({
  x: 1,
  y: 2
});
console.log(o);

// Object.freezeは、トップレベルしか有効じゃない例
const objChildren = Object.freeze({
  a: 1,
  b: {x: 2}
});
objChildren.b.x = 3;
console.log(objChildren);

// Object.freezeで子要素も凍結する例
const objChildrenFreeze = Object.freeze({
  a: 1,
  b: Object.freeze({x: 2})
});
objChildrenFreeze.b.x = 3;
console.log(objChildrenFreeze);
