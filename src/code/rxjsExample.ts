// import Rx from 'rxjs/Rx';
import { Observer } from 'rxjs/Observer';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';

import { AppHelper } from './common/appHelper';

export class RxjsExample {

  run() {

    const numberArr = [1, 3, 5];
    const subject = Observable.from(numberArr);

    subject.subscribe(new MyObserver());
    subject.subscribe(new MyObserver());

  }

}

class MyObserver implements Observer<number> {
  closed?: boolean;
  next(value: number) {
    AppHelper.consoleWrite('next:', value);
  }
  error(err: any) {
    AppHelper.consoleWrite('error', err);
  }
  complete() {
    AppHelper.consoleWrite('complete', 'done');
  }
}
