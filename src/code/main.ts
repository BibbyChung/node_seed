import * as _ from "lodash";
import { AppHelper } from './common/appHelper';

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
        .groupBy(a => a.age)
        .map((value: any[], key) => {
            return { key, value }
        })
        //.map((value, key) => ({ key, value }))
        .value();
    AppHelper.consoleWrite("group", group);

    //group-dictionary
    let groupDic = _.chain(users)
        .groupBy(a => a.age) //return dictionary
        .value();
    AppHelper.consoleWrite("groupDic", groupDic);
    for (let k in groupDic) {
        var v = groupDic[k];
        AppHelper.consoleWrite(`key_${k},value`, v);
    }

    //pairs
    let pairs = _.chain(users)
        .map(a => {
            //return [a.name, a.age]
            return [a.age, a.name];
        })
        .fromPairs()
        .value();
    AppHelper.consoleWrite("pairs", pairs);

};
