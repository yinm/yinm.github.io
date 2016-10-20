'use strict'

let x = 0;
console.log(typeof z);

function a() {
  let y = 2;

  console.log(x, y);

  function b() {
    x = 3;
    y = 4;
    let z = 5;
    console.log(`${x}, ${y}, ${z}`);
  }

  b();
  console.log(x, y);
}

a();
console.log(x);
console.log(typeof y);

