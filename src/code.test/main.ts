
import * as assert from 'assert';
import { run } from '../code/main';


// tslint:disable-next-line:variable-name
const prepareToRun = (_self, tag: string) => {

  _self.Before({ tags: [tag] }, async (scenario: any) => {

  });
  _self.After({ tags: [tag] }, async (scenario) => {

  });
};

export = function () {

  prepareToRun(this, '@abcd');

  this.When(/^run$/, async () => {

    await run();

    assert.equal(true, true);

  });

};

