function Dog(name, cry) {
  return {
    name: name,
    bark: function() {
      console.log(cry);
    }
  }
}

var dog = Dog('no2-きなこ', 'no2-わんわん');
console.log(dog.name);
dog.bark();
