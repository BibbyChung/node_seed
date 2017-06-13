import { MQProducer, MQConsumer, MQMsg } from 'bmqb-mns';
import { AppHelper } from './common/appHelper';

export const bmqbRun = async () => {
  // -----------------------------------------------------------------------------------------------
  const queueName = 'bmqb-queue';
  const adapter = 'mns';
  const city = 'shanghai';
  const mnsConfig = {
    accountId: 'xx',
    accessKey: 'xx',
    secretKey: 'xx',
    region: city,
  };
  const producer = new MQProducer(adapter, mnsConfig);

  // 获取一个queue producer
  const queueProducer = producer.getQueueProducer(queueName);

  // send
  // 生成一个MQMsg对象
  // const msg = new MQMsg({
  //   adapter: 'mns', // 必填
  //   content: { foo: 'bar' }, // 必填
  //   // delay: 10, // 延迟十秒
  //   // priority: 'high', // 优先级, 默认为 'normal'
  // });

  // try {
  //   // 接收内容, pushMsg方法将返回一个Promise对象
  //   const message = await queueProducer.pushMsg(msg);
  //   AppHelper.consoleWrite('message', message);
  // } catch (err) {
  //   AppHelper.consoleWrite('err', err);
  // }


  // get 
  const consumer = new MQConsumer(adapter, mnsConfig);
  const queueConsumer = consumer.getQueueConsumer(queueName);

  try {
    const m = await new Promise((resolve, reject) => {
      queueConsumer.popMsg((err, message) => {
        if (err) {
          reject(err);
        }
        resolve(message);
      });
    });
    AppHelper.consoleWrite('m', m.data.msg.content);
    await queueConsumer.deleteMsg(m);
  } catch (err) {
    AppHelper.consoleWrite('err', err);
  }
};
