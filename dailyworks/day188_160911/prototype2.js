function Dog(cry) {
  this.cry = cry;
}
Dog.prototype.bark = function() {
  console.log(this.cry);
};

var chiwawa = new Dog('チワワだよ！');
chiwawa.bark();

var shiba = new Dog('しばですよ');
shiba.bark();
