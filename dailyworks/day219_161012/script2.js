'use strict';

function fn(arg1, arg2) { return arguments };

console.log(fn.call({}, 'foo', 'bar'));
console.log(fn.apply({}, ['foo', 'bar']));

