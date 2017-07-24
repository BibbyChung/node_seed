import { AppHelper } from './common/appHelper';
import { MailSender } from './mailSender';


export const run = async () => {

  const ms = new MailSender();
  await ms.sendTest();

  AppHelper.consoleWrite('test', 'test');

};
