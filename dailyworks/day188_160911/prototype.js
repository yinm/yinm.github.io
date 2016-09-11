function Dog() {}
Dog.prototype.bark = function() {
  console.log('わんわん');
};

var dog = new Dog();
dog.bark();
