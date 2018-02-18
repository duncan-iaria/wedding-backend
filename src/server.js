const express = require('express');
const apiRouter = require('./routes');

const server = express();
server.use('/api', apiRouter);

server.listen(3000, onServerStart);

function onServerStart() {
  console.log('server listening on port 3000');
}
