import * as assert from "assert";
import {fn} from "./../code/main"

let prepareToRun = (_self, tag: string) => {

    _self.Before({ tags: [tag] }, async (scenario: any) => {

    });
    _self.After({ tags: [tag] }, async (scenario) => {

    });
};

export = function () {

    prepareToRun(this, "@abcd");

    this.Then(/^result$/, function () {
        fn();
    });

}

