import Queue from 'bull';
import path from 'path';
import { EmailJob } from './EmailProcessor';
import queueConfig from './queueConfig';

const ext = path.extname(__filename);

const emailQueue = new Queue<EmailJob>('emailQueue', queueConfig);

emailQueue.process(__dirname + '/EmailProcessor' + ext);

export default { emailQueue };
