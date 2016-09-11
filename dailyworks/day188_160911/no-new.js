function Dog(name, cry) {
  var self = {};
  self.name = name;
  self.bark = function() {
    console.log(cry);
  };
  return self;
}

var dog = new Dog('no-きなこ', 'no-わんわん');
console.log(dog.name);
dog.bark();
