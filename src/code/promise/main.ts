import { AppHelper } from './../common/appHelper';

export let promiseRun = async () => {

  const pArr = [];
  for (let i = 0; i < 3; i += 1) {
    const p = new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('promise inside...');
        resolve('promise done...');
      }, 0);
    });
    pArr.push(p);
  }

  await AppHelper.sleep(200);
  console.log('--- sleep 200 ---');

  Promise.all(pArr)
    .then((arr) => {
      AppHelper.consoleWrite('info', arr);
    });

}