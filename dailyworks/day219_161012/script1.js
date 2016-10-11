'use strict'

function fn() { return this; }
console.log(fn());
console.log(fn.call({}));
console.log(fn.apply({}));
