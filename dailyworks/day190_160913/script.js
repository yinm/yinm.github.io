(function() {
  'use strict';

  // example 1
  function fuzzyPlural(single) {
    var result = single.replace(/o/g, 'e');
    if (single === 'kangaroo') {
      result += 'se';
    }
    return result
  }

  var words = ["foot", "goose", "moose", "kangaroo"];
  console.log(words.map(fuzzyPlural));

  // example 2
  var numbers = [1, 4, 9];
  var roots = numbers.map(Math.sqrt);
  console.log("numbers:" + numbers);
  console.log("roots:" + roots);

  // example 3
  var map = Array.prototype.map
  var a = map.call("Hello World", function(x) {
     return x.charCodeAt(0);
  })
  console.log(a);

})();
