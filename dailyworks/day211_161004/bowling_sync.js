const EventEmitter = require('events').EventEmitter;

function Lane01() {
  this.display = console.log;
  this.detect = function(n) {
    this.emit(n.toString() + 'pins');
  };

  this.on('10pins', ()=> {
    this.display('Strike! Congratulations!');
  });
  this.on('0pins', ()=> {
    this.display('Gutter...Don\'t mind...');
  });
}
Lane01.prototype = new EventEmitter();

const lane01 = new Lane01();
lane01.detect(10);
lane01.detect(0);
console.log('Thanks to Play!');
