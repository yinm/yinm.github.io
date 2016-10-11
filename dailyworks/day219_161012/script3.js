'use strict';

const Girl = function() {
  this.name = '女の子';
  this.enterToilet = function(){
    console.log(this.name + "が女子トイレに入る");
  };
};
const Boy = function() {
  this.name = '男の子';
};

new Girl().enterToilet();                // 女の子が女子トイレに入る
new Girl().enterToilet.call(new Boy());  // 男の子が女子トイレに入る
