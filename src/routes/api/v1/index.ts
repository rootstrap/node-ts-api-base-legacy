import bodyParser from 'body-parser';
import express from 'express';
import userRouter from '../../../user/UserRouter';

const apiRouter = express.Router();

apiRouter.use(bodyParser.json());

apiRouter.use('/users', userRouter.router);

export default apiRouter;
