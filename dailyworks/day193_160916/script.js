'use strict';

const obj = {
  normal() {
    console.log(this);
    (function() {
      console.log(this);
    })();
  },
  arrow() {
    console.log(this);
    (() => {
      console.log(this);
    })();
  }
};

obj.normal();
obj.arrow();
