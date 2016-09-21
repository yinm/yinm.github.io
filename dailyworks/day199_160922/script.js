'use strict';

console.log('通常' + [1, 2, 3].map(function(v) { return v * v }));

console.log('アロー関数：' + [1, 2, 3].map((v) => { return v * v }));
console.log('アロー関数：' + [1, 2, 3].map(v => { return v * v }));
console.log('アロー関数：' + [1, 2, 3].map(v => v * v));
