function Dog(name, cry) {
  this.name = name;
  this.bark = function() {
    console.log(cry);
  };
}

var dog = new Dog('きなこ', 'わんわん');
console.log(dog.name);
dog.bark();
