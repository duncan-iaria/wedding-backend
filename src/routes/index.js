import express from 'express';
import guestRouter from './guests';
import userRouter from './users';

const apiRouter = express.Router();

apiRouter.use('/guests', guestRouter);
apiRouter.use('/users', userRouter);

export default apiRouter;
