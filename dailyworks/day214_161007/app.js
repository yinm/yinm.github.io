const fs = require('fs');
const server = require('http').createServer((req, res)=> {
  res.writeHead(200, {"Content-Type":"text/html"});
  const output = fs.readFileSync('./index.html', 'utf-8');
  res.end(output);
}).listen(8080);
const io = require('socket.io').listen(server);

let userHash = {};

io.sockets.on('connection', (socket)=> {
  socket.on('connected', (name)=> {
    const msg = name + 'が入室しました';
    userHash[socket.id] = name;
    io.sockets.emit("publish", {value: msg});
  });

  socket.on('publish', (data)=> {
    io.sockets.emit('publish', {value:data.value});
  });

  socket.on('disconnect', ()=> {
    if (userHash[socket.id]) {
      var msg = userHash[socket.id] + 'が退出しました';
      delete userHash[socket.id];
      io.sockets.emit('publish', {value: msg});
    }
  });

});

