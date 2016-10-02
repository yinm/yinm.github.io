const fs = require('fs');
const data = fs.readFileSync('foobar_sync.txt', 'utf-8');
console.log('file have just been readable!');
console.log(data);
console.log('end');

