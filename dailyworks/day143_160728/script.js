(function() {
  "use strict";

  (function(undefined) {
    console.log(typeof new Object());
    console.log(typeof new Array(100));
    console.log(new Object() instanceof Object);
    console.log(new Array(100) instanceof Array);

    console.log("-----------------------");
    console.log(typeof new String("hogehoge"));
    console.log(typeof "hogehoge");

    console.log(new String("hogehoge") instanceof Object);
    console.log(new String("hogehoge") instanceof String);
    console.log("hogehoge" instanceof Object);
    console.log("hogehoge" instanceof String);
  }).apply(this);
}());
