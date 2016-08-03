'use strict';

let x = 100;
{
  let x = 200;
}
console.log(x);

if (true) {
  let x = 300;
}
console.log(x);

(function() {
  let x = 400;
}());
console.log(x);

// constの値変更
// objectの変更
const obj = {x: 100};
obj.x = 200;
obj.y = 300;
console.log(obj);

// 配列の変更
const ary = [100];
ary.push(200);
console.log(ary);

ary.shift();
console.log(ary);

// letを使う場面
const getEvens = nums => {
  let i = 0,
      evens = [];
  for (; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      evens.push(nums[i]);
    }
  }
  return evens;
}
console.log(getEvens([1, 2, 3, 4, 5, 6]));
