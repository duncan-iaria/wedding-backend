import express from 'express';
import apiRouter from './routes';

const server = express();
const serverPort = process.env.SERVER_PORT;

server.use('/api', apiRouter);
server.listen(3100, onServerStart);

function onServerStart() {
  console.log('server listening on port: ', 3100);
}

export default server;
