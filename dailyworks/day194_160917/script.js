'use strict';

console.log("メソッド呼び出し");
(function() {
  var myObject = {
    value: 10,
    show: function() {
      console.log(this.value);
    }
  }
  myObject.show();
})();


console.log("関数呼び出し ex1");
(function() {
  function show() {
    console.log(this);
    // this.value = 1;
  }
  show();
})();

console.log("関数呼び出し ex2");
(function() {
  var myObject = {
    value: 1,
    show: function() {
      console.log(this.value);

      function show() {
        console.log(this.value);
      }
      // show();
    }
  };

  myObject.show();
})();

console.log("関数呼び出し ex2の解決版");
(function() {
  var myObject = {
    value: 1,
    show: function() {
      var self = this;
      console.log(self.value);

      function show() {
        console.log(self.value);
      }
      show();
    }
  };

  myObject.show();
})();


console.log("コンストラクタ呼び出し");
(function() {
  function MyObject(value) {
    this.value = value;
    this.increment = function() {
      this.value++;
    };
  }
  var myObject = new MyObject(0);
  console.log(myObject.value);

  myObject.increment();
  console.log(myObject.value);
})();


console.log("apply, call呼び出し ex1");
(function() {
  var myObject = {
    value: 1,
    show: function() {
      console.log(this.value);
    }
  };

  var yourObject = {
    value: 3
  };

  myObject.show();

  myObject.show.apply(yourObject);
  myObject.show.call(yourObject);
})();

console.log("apply, call呼び出し ex2");
(function() {
  var myObject = {
    add: function(value1, value2) {
      console.log(this.value + value1 + value2);
    }
  };

  var yourObject = {
    value: 3
  };

  myObject.add.apply(yourObject, [2, 10]);
  myObject.add.call(yourObject, 2, 10);
})();
