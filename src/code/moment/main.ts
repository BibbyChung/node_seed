import * as moment from "moment";
import { AppHelper } from '../common/appHelper';

export let momentRun = () => {

    //format
    let m = moment();
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

}