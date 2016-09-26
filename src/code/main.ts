import * as _ from "lodash";
import {AppHelper} from "./appHelper";

export var fn = () => {

    let users = [
        { name: 'barney', age: 36, birthday: new Date(1981, 1, 20) },
        { name: 'fred', age: 40, birthday: new Date(1933, 4, 3) },
        { name: 'pebbles', age: 18, birthday: new Date(1990, 5, 10) },
        { name: 'Mary', age: 36, birthday: new Date(1993, 6, 10) }
    ];

    //map
    let userName = _.chain(users)
        .map(user => user.name)
        .join(",")
        .value();
    AppHelper.consoleWrite("user name with ,", userName);

    let newObjectArr = _.chain(users)
        .filter(a => a.age >= 36)
        .map(a => {
            return {
                name: a.name, age: a.age
            };
        })
        .value();
    AppHelper.consoleWrite("newObject", newObjectArr);

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


    //first
    let firstUser = _.chain(users)
        .filter(a => a.age == 40)
        .value()[0];
    AppHelper.consoleWrite("first user", firstUser);

    let firstUserEmpty = _.chain(users)
        .filter(a => a.age == 41)
        .value()[0];
    AppHelper.consoleWrite("first user is empty", firstUserEmpty)
    AppHelper.consoleWrite("first user is empty(boolean)", firstUserEmpty == undefined)


    //group
    let group = _.chain(users)
        .groupBy(a => a.age) //return dictionary
        .value();
    AppHelper.consoleWrite("group", group);
    for (let k in group) {
        var v = group[k];
        AppHelper.consoleWrite("k,v", v);
    }

};

