// import { Observable, Observer } from 'rxjs/Rx';

import { Observer } from 'rxjs/Observer';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/map';
import 'rxjs/add/observable/filter';

import { AppHelper } from './common/appHelper';

class MyObserver implements Observer<number> {
  closed?: boolean;
  next(value: number) {
    console.log('next:', value);
  }
  error(err: any) {
    console.log('error', err);
  }
  complete() {
    console.log('complete', 'done');
  }
}

export class RxjsExample {

  run() {

    const numberArr = [1, 3, 5];

    // first example
    AppHelper.consoleWrite('first example', '');
    const subject0 = Observable.from(numberArr);
    subject0.subscribe(new MyObserver());
    subject0.subscribe(
      value => console.log('next:', value),
      err => console.log('error', err),
      () => console.log('complete', 'done'),
    );

    // second example
    AppHelper.consoleWrite('second example', '');
    const subject1: Observable<number> = Observable.create((os: Observer<number>) => {
      for (const item of numberArr) {
        os.next(item);
      }
      os.complete();
    });
    subject1.subscribe(new MyObserver());


  }

}


