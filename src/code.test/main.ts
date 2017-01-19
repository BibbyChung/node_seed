
import * as assert from "assert";
import { abc } from "./../code/main"

let prepareToRun = (_self, tag: string) => {

    _self.Before({ tags: [tag] }, async (scenario: any) => {

    });
    _self.After({ tags: [tag] }, async (scenario) => {

    });
};

export = function () {

    prepareToRun(this, "@abcd");

    let input;
    this.Given(/^the input is "([^"]*)"$/, function (arg1) {
        input = arg1;
    });

    let act;
    this.When(/^run the method getResult$/, function () {

        var obj = new abc();
        act = obj.getResult(input)

    });

    this.Then(/^the result is "([^"]*)"$/, function (exp) {

        assert.equal(act, exp);

    });

}

