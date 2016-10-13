'use strict';

function add(x, y) {
  if (typeof y === 'undefined') {
    return (y) => {
      return x + y;
    };
  }
}

const add200 = add(200);
console.log(add200(300));
