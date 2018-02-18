import express from 'express';
import apiRouter from './routes';
import mongoose from 'mongoose';

const server = express();
const serverPort = process.env.SERVER_PORT;
const dbUrl = process.env.DB_URL;

console.log(dbUrl);

mongoose.connect(dbUrl);

server.use('/api', apiRouter);
server.listen(3100, onServerStart);

function onServerStart() {
  console.log('server listening on port: ', 3100);
}

export default server;
