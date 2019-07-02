import dotenv from 'dotenv';
import express from 'express';
import 'reflect-metadata';
import { Connection } from 'typeorm';
import createConnection from './db';
import cors from './middlewares/cors';
import errorMiddleware from './middlewares/ErrorMiddleware';
import apiRouter from './routes';
import logger from './utils/logger';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const runApp = (connection: Connection) => {
  try {
    app.set('view engine', 'pug');
    app.use(cors);
    app.use('/api/v1', apiRouter);
    app.use(errorMiddleware);
    app.listen(port, () => {
      logger.info(`server started at port: ${port}`);
    });
  } catch (error) {
    logger.error('Server shutdown with error:', error);
    connection.close();
  }
};

createConnection()
  .then((connection) => {
    logger.info('Database connected sucessfuly');
    runApp(connection);
  })
  .catch(
    (error: Error) => logger.error('Failed to setup database connection', error),
  );
