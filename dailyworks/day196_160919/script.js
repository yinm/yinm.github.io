'use strict';

// normal function
(function() {
  const show = function(text) {
    console.log(text);
  }
  show('normal function');
})();

// arrow function
(function() {
  const show = (text) => {
    console.log(text);
  };
  show('arrow function');
})();

// arrow function short version
(function() {
  const show = (text) => text + ' さようなら';

  const check = show('こんにちは');
  console.log(check);
})();


// behaviour of this
// normal function
(function() {
  const counter = {
    count: 0,

    start: function() {
      const self = this;

      setTimeout(function() {
        console.log('normal' + self.count);
        self.count++;
        console.log('normal' + self.count);
      }, 1000);
    }
  };

  counter.start();
})();

// arrow function
(function() {
  const counter = {
    count: 0,

    start: function() {
      setTimeout(() => {
        console.log('arrow' + this.count);
        this.count++
        console.log('arrow' + this.count);
      }, 1000);
    }
  };

  counter.start();
})();
