import { AppHelper } from './common/appHelper';

import { EventEmitter } from 'events';

// https://www.tutorialspoint.com/nodejs/nodejs_event_emitter.htm

export const run = () => {

  const eventEmitter = new EventEmitter();

  // first action event
  const action = () => {
    AppHelper.consoleWrite('first action event', 'fire go go go...');
  };
  const actionName1 = 'actionName1';

  eventEmitter.addListener(actionName1, action);
  eventEmitter.on(actionName1, action);
  eventEmitter.emit(actionName1);


  // first fun event
  const fun1 = (obj) => {
    AppHelper.consoleWrite('first fun event', obj);
  };
  const funName1 = 'actionName2';
  const params1 = {
    name: 'bibby',
    age: 30,
  };
  eventEmitter.on(funName1, fun1);
  eventEmitter.emit(funName1, params1);

  // first fun event with callback
  const fun2 = (obj, cb) => {
    AppHelper.consoleWrite('first fun event with callback', obj);
    cb(obj);
  };
  const cb = (obj) => {
    AppHelper.consoleWrite('first fun event with callback => callback', obj);
  };
  const funName2 = 'actionName3';
  const params2 = {
    name: 'bibby',
    age: 30,
  };
  eventEmitter.on(funName2, fun2);
  eventEmitter.emit(funName2, params2, cb);



};
