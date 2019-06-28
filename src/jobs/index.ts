import Queue from 'bull';
import path from 'path';
import connection from './connection';
import { EmailJob } from './EmailProcessor';

const ext = path.extname(__filename);

const emailQueue = new Queue<EmailJob>('emailQueue', connection);

emailQueue.process(__dirname + '/EmailProcessor' + ext);

export default { emailQueue };
