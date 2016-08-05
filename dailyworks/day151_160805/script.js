'use strict';

function logArrayElements(element, index, array) {
  console.log("a[" + index + "] = " + element);
}
[2, 5, 9].forEach(logArrayElements);

// オブジェクトをコピーする関数
function copy(o) {
  var copy = Object.create( Object.getPrototypeOf(o) ),
      propNames = Object.getOwnPropertyNames(o);

  propNames.forEach(function(name) {
    var desc = Object.getOwnPropertyDescriptor(o, name);
    Object.defineProperty(copy, name, desc);
  });

  return copy;
}

var o1 = {a: 100, b: 2},
    o2 = copy(o1);

console.log(o1);
console.log(o2);
