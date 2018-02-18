const express = require('express');
const apiRouter = express.Router();
const guestRouter = require('./guests');
const userRouter = require('./users');

apiRouter.use('/guests', guestRouter);
apiRouter.use('/users', userRouter);

module.exports = apiRouter;
