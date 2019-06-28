import { SendMailOptions } from 'nodemailer';
import emailService from '../mail/EmailService';
import logger from '../utils/logger';

export interface EmailJob {
  mailOptions: SendMailOptions;
};

export default async (job: EmailJob) => {
  logger.info('Sending email with options:', job.mailOptions);
  return emailService.send(job.mailOptions);
};
