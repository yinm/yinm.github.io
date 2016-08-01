"use strict";

// 定数
const NUM_LIST = [1, 2, 3];
NUM_LIST[0] = 5;
console.log(NUM_LIST);

// テンプレート
const str = `あ
い
う`;
console.log(str);

const name = "yinm";
const age = 26;

const introduction = `私の名前は${name}です。${age}歳です。`;
console.log(introduction);

// 分割代入
const [ary_name, ary_age] = ["ハル", 21];
console.log(ary_name, ary_age);

// 分割代入の値の入れ替え
let num1 = 10;
let num2 = 20;
console.log(num1, num2);

[num1, num2] = [num2, num1];
console.log(num1, num2);

// 関数で複数の値を一度に返す
function getFruit() {
  return ["りんご", "バナナ"];
}
const [fruit1, fruit2] = getFruit();

console.log(fruit1);
console.log(fruit2);

// ...演算子で、複数の値を一つの配列にまとめる
let [ary_name2, ary_age2, ...ary_fruit] = ["ハル", 21, "りんご", "みかん"];
console.log(ary_name2, ary_age2, ary_fruit);

// 配列の展開
let array = [1, 2, 3];
console.log(array);
console.log(...array);

// 最大値の取得
array = [1, 19, 5, 3, 44, 20];
let max = Math.max(...array);
console.log(max);

// 関数の引数の初期化
function show(name = "ハル") {
  console.log(name);
}
show();
show("はる");

// ...演算子で、複数の引数を一つの配列にまとめる
function ary_show(...args) {
  console.log(args);
}
ary_show(100, 200, 300);


// アロー関数
let arrow = (text) => {
  console.log(text);
};

arrow = text => {
  console.log(text);
};

arrow = (text) => text + " さようなら";

let text = arrow("こんにちは");
console.log(text);
