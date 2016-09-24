'use strict';

(() => {
  const obj = {
    name: 'pikachu',

    say() {
      alert('I am ' + this.name);
    }
  };

  // "I am "のみ表示
  setTimeout(obj.say, 1000);

  // "I am pikachu"を表示
  setTimeout(obj.say.bind(obj), 1000);
  // bindの別表記
  setTimeout(() => {obj.say.apply(obj)}, 2000);
  setTimeout(() => {obj.say.call(obj)}, 3000);
})();


(() => {
  const obj = {
    name: 'pikachu',

    say() {
      alert('I am ' + this.name + ' with closure');
    }
  };

  function bind(f, o) {
    return () => f.apply(o);
  }

  const bound_say = bind(obj.say, obj);
  setTimeout(bound_say, 1000);
})();
