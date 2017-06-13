import { AppHelper } from './common/appHelper';
const AliMNS = require('ali-mns');

export const alimnsRun = async () => {

  const config = {
    // host: 'https://1156140399744548.mns.cn-shanghai.aliyuncs.com',
    account_id: 'xx',
    access_key_id: 'xx',
    access_key_secret: 'xx',
  };

  // tslint:disable-next-line:max-line-length
  const account = new AliMNS.Account(config.account_id, config.access_key_id, config.access_key_secret);
  const city = 'shanghai';
  const queueName = 'bmqb-queue';

  const mq = new AliMNS.MQ(queueName, account, city);

  const sendMsg = async (i) => {
    const obj = {
      now: new Date(),
      number: i,
    };
    const sMsg = await mq.sendP(JSON.stringify(obj));
    AppHelper.consoleWrite('sMsg', sMsg);
  };

  const getMsg = async () => {
    try {
      const gMsg = await mq.recvP(1);
      AppHelper.consoleWrite('gMsg', gMsg.Message.MessageBody);
      await mq.deleteP(gMsg.Message.ReceiptHandle);
      await getMsg();
    } catch (err) {
      if (err.Error && err.Error.Code === 'MessageNotExist') {
        AppHelper.consoleWrite('err.Error.Code', err.Error.Code);
        await getMsg();
      } else {
        throw err;
      }
    }
  };

  try {

    for (let i = 0; i < 10000; i = i + 1) {
      sendMsg(i);
    }

    getMsg();

  } catch (err) {

    AppHelper.consoleWrite('err', err);

  }

  // const mqBatch = new AliMNS.MQBatch(queueName, account, city);
  // const msgs = [];
  // for (let i = 0; i < 16; i = i + 1) {
  //   const msg = new AliMNS.Msg('BatchSend' + i, 8, 0);
  //   msgs.push(msg);
  // }
  // await mqBatch.sendP(msgs);

};
