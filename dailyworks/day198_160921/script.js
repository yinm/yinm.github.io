'use strict';

(function() {
  console.log('start');

  function puts(str) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(str);
      }, 1000);
    });
  }

  puts('async')
    .then((result) => {
      console.log(result);
    });

  console.log('end');
})();

(function() {
  const treble = (number) => {
    return new Promise((resolve) => {
      resolve(number * 3);
    });
  };

  const dump = (number) => {
    console.log(number);
    return number;
  };

  treble(10)
    .then(treble)
    .then(dump)
    .then(treble)
    .then(dump);

})();

(function() {
  console.log('start');

  function puts(str) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(str);
      }, 1000);
    });
  }

  const promises = [
    puts(1),
    puts(2),
    puts(3)
  ];

  Promise.all(promises).then((results) => {
    console.log(results);
  });

  console.log('end');
})();
