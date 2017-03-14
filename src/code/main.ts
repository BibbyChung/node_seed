import { AppHelper } from './common/appHelper';

export class abc {

    getResult(arg: string) {
        return arg + arg;
    }

}

let obj = new abc();
let r = obj.getResult("Bibby");
AppHelper.consoleWrite("result", r);
