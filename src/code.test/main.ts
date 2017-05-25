import * as assert from 'assert';
import { run } from '../code/main';

const prepareToRun = (self, tag: string) => {

  self.Before({ tags: [tag] }, async (scenario: any) => {

  });
  self.After({ tags: [tag] }, async (scenario) => {

  });
};

export = function () {

  prepareToRun(this, '@abcd');

  this.Then(/^run$/, () => {

    run();
    assert.equal(true, true);

  });

};

