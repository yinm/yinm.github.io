"use strict";

let show = (text) => {
  console.log(text);
}

show = text => {
  console.log(text);
}

show = (text) => text + " さようなら";
let text = show("こんにちは");
console.log(text);

// thisを束縛する
// const counter = {
//   count: 0,
//
//   start: function() {
//     setTimeout(() => {
//       this.count++;
//
//       console.log(this.count + " thisの束縛");
//     }, 10000);
//   }
// };
// counter.start();

// Promise.resolveメソッド
// Promise.resolve()
// .then(function() {
//   return new Promise(function(resolve, reject) {
//     console.log("1");
//     setTimeout(function() {
//       console.log("1 done");
//       resolve(1);
//     }, 100);
//   })
// })
// .then(function(value) {
//   return new Promise(function(resolve, reject) {
//     console.log("2");
//     setTimeout(function() {
//       console.log("2 done");
//       resolve(2);
//     }, 50);
//   });
// })
// .then(function(value) {
//   return new Promise(function(resolve, reject) {
//     console.log("3");
//     setTimeout(function() {
//       console.log("3 done");
//       resolve(3);
//     }, 10);
//   });
// })
// .then(function(value) {
//   console.log("all done");
// })
// .catch(function(err) {
//   console.log(err);
// })

// Promise.allメソッド
// Promise.all([
//   new Promise(function(resolve, reject) {
//     console.log("1");
//     setTimeout(function() {
//       console.log("1 done");
//       resolve(1);
//     }, 100);
//   }),
//
//   new Promise(function(resolve, reject) {
//     console.log("2");
//     setTimeout(function() {
//       console.log("2 done");
//       resolve(2);
//     }, 50);
//   }),
//
//   new Promise(function(resolve, reject) {
//     console.log("3");
//     setTimeout(function() {
//       console.log("3 done");
//       resolve(3);
//     }, 10);
//   })
// ]).then(
//   function(results) {
//     console.log("all done");
//     console.log(results);
//   },
//
//   function(err) {
//     console.log(err);
//   }
// );

// Promise.raceメソッド
Promise.race([
  new Promise(function(resolve, reject) {
    console.log("1");
    setTimeout(function() {
      console.log("1 done");
      resolve(1);
    }, 100);
  }),

  new Promise(function(resolve, reject) {
    console.log("2");
    setTimeout(function() {
      console.log("2 done");
      resolve(2);
    }, 50);
  }),

  new Promise(function(resolve, reject) {
    console.log("3");
    setTimeout(function() {
      console.log("3 done");
      resolve(3);
    }, 10);
  })
]).then(
  function(results) {
    console.log("first done");
  },

  function(err) {
    console.log(err);
  }
);
