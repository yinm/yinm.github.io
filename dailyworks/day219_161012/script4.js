'use strict'

function CellPhone(number) {
  this.phoneNumber = number;
}

function SmartPhone(number, wifispots) {
  this.wifispots = wifispots;
  CellPhone.call(this, number);
}
SmartPhone.prototype = new CellPhone();

const myPhone = new SmartPhone('0901234432', ['Home', 'StarBucksWifi']);
console.log(myPhone);
