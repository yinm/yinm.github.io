'use strict';

let frammableTrashBox = [],
    nonflammableTrashBox = [];

const Rubbish = function(name, type) {
  this.name = name;
  this.type = type;
};

function repeat(arr, fn) {
    let i = 0,
        len = arr.length;
    for (; i < len; i++) {
      fn.call(arr[i]);
    }
}

repeat([
  new Rubbish('チラシ', 'flammable'),
  new Rubbish('空き缶', 'nonflammable'),
  new Rubbish('紙くず', 'flammable')
  ], 
  function() {
    if (this.type === 'flammable') {
      frammableTrashBox.push(this);
    } else {
      nonflammableTrashBox.push(this);
    }
  });

console.log(frammableTrashBox);
console.log(nonflammableTrashBox);
