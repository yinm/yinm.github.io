'use strict';

function Man(name) {
  this.name = name;
  this.greet = function() {
    console.log("Hello, my name is " + this.name);
  };
}

function Cat(name) {
  this.name = name;
}

const steve = new Man("Steve");
steve.greet();

const tama = new Cat("Tama");
const tamaGreet = steve.greet.bind(tama);
tamaGreet();
