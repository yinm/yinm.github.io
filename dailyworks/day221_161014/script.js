'use strict';

function add(x, y) {
  return x + y;
}

const add200 = add.bind(null, 200);
console.log(add200(300));
