'use strict';

function closure() {
  let count = 0;

  return {
    increment: () => {
      count++;
    },
    show: () => {
      console.log(count);
    }
  };

}

let closure1 = closure();
let closure2 = closure();

closure1.show();
closure1.increment();
closure1.show();

closure2.show();
closure2.increment();
closure2.show();
console.log('closure2のみ、もう一度incrementする');
closure2.increment();
closure2.show();
