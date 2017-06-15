import * as moment from "moment";
import { AppHelper } from '../common/appHelper';

export let momentRun = () => {

    let now = new Date();
    let m = moment(now);

    //format
    let dateISOFormat = m.format("YYYY-MM-DD HH:mm:ss")
    AppHelper.consoleWrite("dateISOFormat", dateISOFormat);

    //show weekday in the future
    let dateInfoArr = [];
    for (let i = 0; i < 7; i++) {
        let info = moment().add(i, "day").format("YYYY-MM-DD E");
        dateInfoArr.push(info);
    }
    let dateInfo = dateInfoArr.join(", ")
    AppHelper.consoleWrite("show weekday in the future", dateInfo);

    //show uinx
    const unixNow = m.unix();
    AppHelper.consoleWrite('dateTime To unix', unixNow);

    const unixToDateTime = moment.unix(unixNow).toDate();
    AppHelper.consoleWrite('unixToDateTime', unixToDateTime);

    //add seconds
    const after1Hour = m.add(3600, 'seconds').toDate();
    AppHelper.consoleWrite('after1Hour', after1Hour);

}