import Queue from 'bull';
import path from 'path';
import queueConfig from './queueConfig';
import { EmailJob } from './EmailProcessor';

const ext = path.extname(__filename);

const emailQueue = new Queue<EmailJob>('emailQueue', queueConfig);

emailQueue.process(__dirname + '/EmailProcessor' + ext);

export default { emailQueue };
