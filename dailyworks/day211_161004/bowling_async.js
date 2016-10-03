const EventEmitter = require('events').EventEmitter;

function Lane02() {
  this.display = console.log;
  this.detect = (n)=> {
    this.emit(n.toString() + 'pins');
  };

  this.on('10pins', ()=> {
    process.nextTick(this.display.bind(this, 'Strike! Congratulations!'));
  });
  this.on('0pins', ()=> {
    process.nextTick(this.display.bind(this, 'Gutter...Don\'t mind...'));
  });
}
Lane02.prototype = new EventEmitter();

const lane02 = new Lane02();
lane02.detect(10);
lane02.detect(0);
console.log('Thanks to Play!');
