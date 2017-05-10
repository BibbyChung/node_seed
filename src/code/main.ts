import { AppHelper } from './common/appHelper';

export let fun = () => {

    //=========Object.assign=========
    let target = {
        name: "bibby",
        age: 18
    };
    //let target = {};
    let source = {
        name: "Molly",
        birthday: new Date("2010-10-10")
    };

    Object.assign(target, source);

    AppHelper.consoleWrite("Object.assign", target);
    //{ name: 'Molly', age: 18, birthday: 2010-10-10T00:00:00.000Z }

}

