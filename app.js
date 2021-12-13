var express = require('express');
var app = express();
app.use(express.static('public'));
var http = require('http').Server(app);
var port = process.env.PORT || 5000;

const res = [];

http.listen(port, function () {
  console.log('listening on port: ' + port);
});

var io = require('socket.io')(http);

io.on('connection', function (socket) {
  const clients = io.sockets.adapter.rooms.get('play');
  console.log(clients);
  console.log('new connection');
  socket.on('move', function (msg) {
    socket.join(msg.roomid);
    socket.broadcast.emit('move', msg);
  });
});
