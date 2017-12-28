
import * as assert from "assert";
import { fun } from "./../code/main"

let prepareToRun = (_self, tag: string) => {

  _self.Before({ tags: [tag] }, async (scenario: any) => {

  });
  _self.After({ tags: [tag] }, async (scenario) => {

  });
};

export = function () {

  prepareToRun(this, "@abcd");

  this.Then(/^test$/, async function () {

    await fun();
    assert.equal(1, 1);

  });

}

