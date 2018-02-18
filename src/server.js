const express = require('express');
const apiRouter = require('./routes');
const server = express();
const serverPort = process.env.SERVER_PORT;

server.use('/api', apiRouter);
server.listen(serverPort, onServerStart);

function onServerStart() {
  console.log('server listening on port: ', serverPort);
}

module.exports = server;
