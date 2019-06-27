import nodemailer, { Transporter, SendMailOptions } from 'nodemailer';

export class EmailService {
  private transporter: Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: process.env.SMTP_SERVICE,
      secure: true,
      pool: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }

  public async send(options: SendMailOptions) {
    return this.transporter.sendMail(options);
  }
}

export default new EmailService();
