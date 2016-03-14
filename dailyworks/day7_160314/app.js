'use strict';

// Animalクラス
class Animal {
  constructor(name) {
    this.name = name;
  }
  set name(name) {
    this._name = name;
  }
  get name() {
    return this._name;
  }
  walk() {
    console.log(this.name + 'が歩いています');
  }
}

class Cat extends Animal {
  constructor(name, color) {
    super(name);
    this.color = color;
  }
  get color() {
    return this._color;
  }
  set color(color) {
    this._color = color;
  }
  mew() {
    console.log(this.color + '色の' + this.name + 'がニャーと鳴いています');
  }
  walk() {
    super.walk();
    console.log('忍び足です。');
  }
}

var cat1 = new Cat('タマ', '茶');
console.log(cat1.name);
cat1.walk();
cat1.mew();

var cat2 = new Cat('コタロー', '黒');
console.log(cat2.name);
cat2.walk();
cat2.mew();
