const fs = require('fs');
fs.readFile('foobar.txt', 'utf-8', (err, data)=> {
  if (err) throw err;
  console.log('file have just been readable!');
  console.log(data);
});
console.log('end');
