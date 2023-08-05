const express = require('express');

const socketio = require('socket.io');

const http = require('http');

const router = require('./router');

const app = express();

const server = http.createServer(app);

const io = socketio(server);

app.use(router);

server.listen(3001, function () {
  console.log('listening on port 3001');
});
