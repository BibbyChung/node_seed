import * as _ from "lodash";
import {AppHelper} from "./appHelper";

export var fn = () => {

    let users = [
        { name: 'barney', age: 36, birthday: new Date(1981, 1, 20) },
        { name: 'fred', age: 40, birthday: new Date(1933, 4, 3) },
        { name: 'pebbles', age: 18, birthday: new Date(1990, 5, 10) }
    ];

    //map
    let userName = _.chain(users)
        .map(user => user.name)
        .join(",")
        .value();
    AppHelper.consoleWrite("user name with ,", userName);

    //where
    let oldUsers = _.chain(users)
        .filter(a => a.age >= 36)
        .value();
    AppHelper.consoleWrite("oldUsers", oldUsers);

    //sort (small to big)
    let sortUsers = _.chain(users)
        .sortBy(a => a.birthday)
        .reverse()
        .value();
    AppHelper.consoleWrite("sortUsers", sortUsers);




};

