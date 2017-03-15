import { AppHelper } from './common/appHelper';

export class abc {

    getResult(arg: string) {

        return `${arg} + ${arg}`;

    }

    // getDataAsync(){

    //     var p =new Promise((resolve,reject)=>{
    //         setTimeout(()=>{
    //             resolve(1000);
    //         },500)
    //     });
    //     return p;

    // }

}

let obj = new abc();
let r = obj.getResult("Bibby");
AppHelper.consoleWrite("result", r);

// let fun = async () => {
//     return await obj.getDataAsync();
// }

// AppHelper.consoleWrite("async", fun());
