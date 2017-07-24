import { AppHelper } from './common/appHelper';
import { config } from './config';
const nodemailer = require('nodemailer');

export class MailSender {

  private mailer = null;

  constructor() {
    this.mailer = nodemailer.createTransport(config.smtp);
  }

  async sendTest() {
    const body = {
      from: '"BB 👻" <service@mail.bmjr.com>', // sender address
      to: 'bibby@bmqb.com, bibbynet@gmail.com', // list of receivers
      subject: 'Hello ✔', // Subject line
      text: 'Hello world ?', // plain text body
      html: '<b>--Hello world ?---</b>', // html body
    };

    const info = await this.send(body.from, body.to, body.subject, body.text, body.html);
    AppHelper.consoleWrite('info', info);
  }

  send(from, to, subject, text, html) {
    const mailOptions = {
      from, // sender address
      to, // list of receivers
      subject, // Subject line
      text, // plain text body
      html, // html body
    };

    const p = new Promise((resolve, reject) => {
      this.mailer.sendMail(mailOptions, (error, info) => {
        if (error) {
          reject(error);
        }
        resolve(info);
      });
    });
    return p;
  }

}
