import { AppHelper } from './common/appHelper';

export class abc {

  getResult(arg: string) {
    return arg + arg;
  }

}

const obj = new abc();
const r = obj.getResult('Bibby');
AppHelper.consoleWrite('result', r);

const rr = AppHelper.getUUID();
AppHelper.consoleWrite('uuid',rr);
