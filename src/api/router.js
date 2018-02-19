import express from 'express';
import { guestRouter } from './guests';
import { userRouter } from './users';
import { errorHandler } from './errorHandler';

const apiRouter = express.Router();

apiRouter.use('/guests', guestRouter);
apiRouter.use('/users', userRouter);
apiRouter.use(errorHandler);

export default apiRouter;
