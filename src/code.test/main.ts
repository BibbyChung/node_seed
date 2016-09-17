import * as assert from "assert";
import {MyUnitOfWork} from "./../code/myUnitOfWork";
import {funcAsync} from "./../code/main";

let prepareToRun = (_self, tag: string) => {

    let myDb: MyUnitOfWork;

    _self.Before({ tags: [tag] }, async (scenario: any) => {

        let connectionString = "mongodb://bbtest:1234@ds030827.mlab.com:30827/testmongodb";
        myDb = new MyUnitOfWork();
        await myDb.connectAsync(connectionString);

    });
    _self.After({ tags: [tag] }, async (scenario) => {

        await myDb.closeAsync();

    });
};

export = function () {

    prepareToRun(this, "@abcd");

    this.Then(/^run$/, async function () {

        await funcAsync();

    });

}