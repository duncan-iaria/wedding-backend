import express from 'express';
import apiRouter from './routes';
import setupMiddleware from './middleware';
import mongoose from 'mongoose';

const server = express();
const serverPort = process.env.SERVER_PORT;
const dbUrl = process.env.DB_URL;

mongoose.connect(dbUrl);

setupMiddleware(server);

server.use('/api', apiRouter);
server.listen(3100, onServerStart);

function onServerStart() {
  console.log('server listening on port: ', serverPort);
  console.log('database connection made at: ', dbUrl);
}

export default server;
