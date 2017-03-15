import { AppHelper } from './common/appHelper';

export class abc {

    getResult(arg: string) {
        return `${arg}${arg}`;
    }

    getDataAsync() {

        let p = new Promise((resolve, reject) => {
            setTimeout(() => {
                let a = "yyyyy";
                resolve(`Bibby123${a}---111`);
            }, 1000);
        });
        return p

    }

}

let fun = async () => {
    let obj = new abc();
    let r = obj.getResult("Bibby");
    AppHelper.consoleWrite("result", r);

    let r1 = await obj.getDataAsync();
    AppHelper.consoleWrite("result1", r1);
};
fun();

