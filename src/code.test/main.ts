import * as assert from "assert";
import {UnitOfWork} from "mongoose-adapter";
import {funcAsync} from "./../code/main";

let prepareToRun = (_self, tag: string) => {

    let unitOfWork: UnitOfWork;

    _self.Before({ tags: [tag] }, async (scenario: any) => {

        let connectionString = "mongodb://bbtest:1234@ds030827.mlab.com:30827/testmongodb";
        unitOfWork = new UnitOfWork();
        await unitOfWork.connectAsync(connectionString);

    });
    _self.After({ tags: [tag] }, async (scenario) => {

        await unitOfWork.closeAsync();

    });
};

export = function () {

    prepareToRun(this, "@abcd");

    this.Then(/^run$/, async function () {

        await funcAsync();

    });

}