import { QueueOptions } from 'bull';
import dotenv from 'dotenv';

dotenv.config();

const queueConfig: QueueOptions = {
  redis: {
    port: parseInt(process.env.REDIS_PORT),
    host: process.env.REDIS_HOST,
    password: process.env.REDIS_PASSWORD,
  },
};

export default queueConfig;
