
import * as assert from 'assert';
import { abc } from './../code/main';

// tslint:disable-next-line:variable-name
const prepareToRun = (_self, tag: string) => {

  _self.Before({ tags: [tag] }, async (scenario: any) => {

  });
  _self.After({ tags: [tag] }, async (scenario) => {

  });
};

export = function () {

  prepareToRun(this, '@abcd');

  let input;
  this.Given(/^the input is "([^"]*)"$/, (arg1) => {
    input = arg1;
  });

  let act;
  this.When(/^run the method getResult$/, () => {

    const obj = new abc();
    act = obj.getResult(input);

  });

  this.Then(/^the result is "([^"]*)"$/, (exp) => {

    assert.equal(act, exp);

  });

};

