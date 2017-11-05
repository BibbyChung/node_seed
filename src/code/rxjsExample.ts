import {
  Observable, Observer, Subject, BehaviorSubject,
  ReplaySubject, AsyncSubject, Scheduler,
} from 'rxjs/Rx';

import { map, take, filter } from 'rxjs/operators';

// import { Observer } from 'rxjs/Observer';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/observable/from';
// import 'rxjs/add/observable/fromEvent';
// import 'rxjs/add/observable/f';
// import 'rxjs/add/observable/map';
// import 'rxjs/add/observable/filter';
// import 'rxjs/add/operator/distinct';

import * as fetch from 'node-fetch';
import { EventEmitter } from 'events';
import { AppHelper } from './common/appHelper';

// http://ithelp.ithome.com.tw/articles/10189028
class MyObserver implements Observer<number> {

  constructor(private tag: string = '') { }

  closed?: boolean;
  next(value: any) {
    console.log(`${this.tag} - next:`, value);
  }
  error(err: any) {
    console.log('error', err);
  }
  complete() {
    console.log('complete', 'done');
  }
}

const log = (title, cb) => {
  console.log(`====== ${title} ======`);
  cb();
  console.log(`======================`);
};

export class RxjsExample {

  async run() {

    const numberArr = [1, 3, 5, 6, 6];

    // const run0 = () => {
    //   const obs = Observable.of(...numberArr);
    //   obs.subscribe(new MyObserver());
    // };
    // log('observable.of', run0);

    // const run1 = () => {
    //   const obs = Observable.from(numberArr);
    //   obs.subscribe(new MyObserver());
    // };
    // log('observable.from', run1);

    // const run2 = () => {
    //   const obs = Observable.from('今天天氣很好！');
    //   obs.subscribe(new MyObserver());
    // };
    // log('observable.from', run2);

    // const run3 = () => {
    //   const obs = Observable.fromPromise(new Promise((resolve, reject) => {
    //     setTimeout(() => resolve('promise test'), 500);
    //   }));
    //   obs.subscribe(new MyObserver('fromPromise'));
    // };
    // log('observable.fromPromise', run3);

    // const run4 = () => {
    //   const e1 = new EventEmitter();
    //   const clickName = 'click';
    //   e1.on(clickName, () => {
    //     console.log('click emit');
    //   });
    //   const obs = Observable.fromEvent(e1, clickName);
    //   obs.subscribe(new MyObserver());
    //   e1.emit(clickName);
    // };
    // log('observable.fromEvent', run4);

    // const run5 = () => {
    //   const obs = Observable.interval(100);
    //   const sub = obs.subscribe(new MyObserver('interval'));
    //   setTimeout(() => sub.unsubscribe(), 400);
    // };
    // log('observable.interval', run5);

    // const run6 = () => {
    //   const obs = Observable.from(numberArr)
    //     .filter(a => a >= 5)
    //     .distinct()
    //     .map(a => a);
    //   obs.subscribe(new MyObserver());
    // };
    // log('observable => filter, map', run6);

    // const run7 = () => {
    //   const clickName = 'click';
    //   const event1 = new EventEmitter();
    //   event1.on(clickName, () => {
    //     console.log('click event');
    //   });
    //   const obs = Observable.interval(10);
    //   const obs1 = Observable.fromEvent(event1, clickName);
    //   const mixObs = obs.takeUntil(obs1);
    //   mixObs.subscribe(new MyObserver('takeUntil'));
    //   setTimeout(() => event1.emit(clickName), 50);

    // };
    // log('observable => takeUntil', run7);

    // const run8 = () => {
    //   const obs1 = Observable.interval(100).take(5);
    //   const obs2 = Observable.interval(50).take(2);
    //   const obs3 = Observable.interval(200).take(1);
    //   const obsResult = Observable.of(obs1, obs2, obs3).concatAll();
    //   obsResult.subscribe(new MyObserver('concatAll'));
    // };
    // log('observable => concatAll', run8);

    // const run9 = () => {
    //   const source = Observable.interval(10).take(3);
    //   const source2 = Observable.of(3);
    //   const source3 = Observable.of(4, 5, 6);
    //   const obsResult = Observable.concat(source, source2, source3);
    //   // const obsResult = source.concat(source2, source3);
    //   obsResult.subscribe(new MyObserver('concat'));
    // };
    // log('observable => concat', run9);

    // const run10 = () => {
    //   const obs1 = Observable.interval(100).take(5);
    //   const obs2 = Observable.interval(50).take(2);
    //   const obs3 = Observable.interval(200).take(1);
    //   const obsResult = Observable.merge(obs1, obs2, obs3);
    //   // const obsResult = obs1.merge(obs2, obs3);
    //   // const obsResult = Observable.from([obs1, obs2, obs3]).mergeAll();
    //   obsResult.subscribe(new MyObserver('merge'));
    // };
    // log('observable => merge', run10);

    // const run11 = () => {
    //   const obs1 = Observable.of('aa1', 'aa2');
    //   const obs2 = Observable.of('bb1', 'bb2', 'bb3', 'bb4');
    //   const obsResult = Observable.combineLatest(obs1, obs2, (x, y) => `${x}, ${y}`);
    //   obsResult.subscribe(new MyObserver('combineLatest'));
    // };
    // log('observable => combineLatest', run11);

    // const run12 = () => {
    //   const obs1 = Observable.from('bibby');
    //   const obs2 = Observable.interval(10);

    //   const obsResult = Observable.zip(obs1, obs2, (x, y) => x);
    //   obsResult.subscribe(new MyObserver('zip'));
    // };
    // log('observable => zip', run12);

    // const run13 = () => {
    //   const main = Observable.from('hello').zip(Observable.interval(50), (x, y) => x);
    //   const some = Observable.from([0, 1, 0, 0, 0, 1]).zip(Observable.interval(30), (x, y) => x);
    //   const obsResult = main.withLatestFrom(some, (x, y) => y === 1 ? x.toUpperCase() : x);
    //   obsResult.subscribe(new MyObserver('withLatestFrom'));
    // };
    // log('observable => withLatestFrom', run13);

    // const run14 = () => {
    //   const source = Observable.from('hello').zip(Observable.interval(60), (x, y) => x);
    //   const obsResult = source.scan((origin, next) => origin + next, '');
    //   obsResult.subscribe(new MyObserver('scan'));
    // };
    // log('observable => scan', run14);

    // const run15 = () => {
    //   const clickName = 'click';

    //   const addBtn = new EventEmitter();
    //   addBtn.on(clickName, () => {
    //     console.log('addButton click');
    //   });
    //   const minusBtn = new EventEmitter();
    //   minusBtn.on(clickName, () => {
    //     console.log('minusButon click');
    //   });

    //   const addObs = Observable.fromEvent(addBtn, clickName).mapTo(1);
    //   const minusObs = Observable.fromEvent(minusBtn, clickName).mapTo(-1);
    //   const obsResult = Observable.empty().startWith(0)
    //     .merge(addObs, minusObs)
    //     .scan((origin: number, next: number) => origin + next, 0);

    //   obsResult.subscribe(new MyObserver('scan'));
    //   addBtn.emit(clickName);
    //   addBtn.emit(clickName);
    //   minusBtn.emit(clickName);
    // };
    // log('observable => scan', run15);

    // const run16 = () => {
    //   const obs = Observable.interval(30);
    //   const obsResult = obs.bufferTime(100);
    //   obsResult.subscribe(new MyObserver('bufferTime'));
    // };
    // log('observable => bufferTime', run16);

    // const run17 = () => {
    //   const obs = Observable.interval(30);
    //   const obsResult = obs.bufferCount(3);
    //   obsResult.subscribe(new MyObserver('bufferCount'));
    // };
    // log('observable => bufferCount', run17);

    // const run18 = () => {
    //   const obs = Observable.interval(30).take(5);
    //   const obsResult = obs.debounceTime(100);
    //   obsResult.subscribe(new MyObserver('debounceTime'));
    // };
    // log('observable => debounceTime', run18);

    // const run18 = () => {
    //   const obs = Observable.interval(30).take(5);
    //   const obsResult = obs.throttleTime(100);
    //   obsResult.subscribe(new MyObserver('throttleTime'));
    // };
    // log('observable => throttleTime', run18);

    // const run19 = () => {
    //   const obs = Observable.from(numberArr);
    //   const obsResult = obs.distinct();
    //   obsResult.subscribe(new MyObserver('distinct'));
    // };
    // log('observable => distinct', run19);

    // const run20 = () => {
    //   const sArr: any[] = ['a', 'b', 'c', 'd', 2];
    //   const obs = Observable.from(sArr).zip(Observable.interval(50), (x, y) => x);
    //   const obsResult = obs.map(a => a.toUpperCase())
    //     // .catch(error => Observable.of('h'));
    //     // .catch(error => Observable.empty());
    //     // .catch((error, obs) => obs); //error retry
    //     // .retry();
    //     // .retryWhen(obsErr => obsErr.delay(100));
    //     // .catch((error, obs) => ['h']);
    //     .catch((errors, original) => Observable.empty()
    //       .startWith('連線發生錯誤： 1秒後重連').concat(obs.delay(1000)));
    //   obsResult.subscribe(new MyObserver('catch'));
    // };
    // log('observable => catch', run20);

    // const run21 = () => {
    //   const e1 = new EventEmitter();
    //   const clickName = 'click';
    //   e1.on(clickName, () => {
    //     console.log('click emit');
    //   });
    //   const obs = Observable.fromEvent(e1, clickName);
    //   const obsResult = obs.map(a => Observable.interval(10))
    //     // .concatAll();
    //     // .switch();
    //     .mergeAll();
    //   obsResult.subscribe(new MyObserver('concatAll, switch, mergeAll'));
    //   e1.emit(clickName);
    //   setTimeout(() => e1.emit(clickName), 100);
    //   setTimeout(() => e1.emit(clickName), 500);
    // };
    // log('observable => concatAll, switch, mergeAll ', run21);

    // const run22 = () => {
    //   const getP = (param) => {
    //     return new Promise<string>((resolve, reject) => {
    //       setTimeout(() => {
    //         console.log(`promise ${param}`);
    //         const msg = `oooooo -> ${param}`;
    //         resolve(msg);
    //       }, 100);
    //     });
    //   };
    //   const e1 = new EventEmitter();
    //   const clickName = 'click';
    //   e1.on(clickName, (param) => {
    //     console.log(`click ${param}`);
    //   });
    //   const obs = Observable.fromEvent(e1, clickName);
    //   const obsResult = obs
    //     // .concatMap(a => Observable.fromPromise(getP(a)),
    //     .switchMap(a => Observable.fromPromise(getP(a)),
    //     // .mergeMap(a => Observable.fromPromise(getP(a)),
    //     (a, b, aIndex, bIndex) => `${b}.......${a}-${aIndex}-${bIndex}`);
    //   obsResult.subscribe(new MyObserver('concatAll, switch, mergeAll'));
    //   e1.emit(clickName, 'clickParam1');
    //   e1.emit(clickName, 'clickParam1');
    //   e1.emit(clickName, 'clickParam1');
    // };
    // log('observable.fromEvent', run22);


    // const run23 = () => {
    //   const people = [
    //     { name: 'Anna', score: 100, subject: 'English' },
    //     { name: 'Anna', score: 90, subject: 'Math' },
    //     { name: 'Anna', score: 96, subject: 'Chinese' },
    //     { name: 'Jerry', score: 80, subject: 'English' },
    //     { name: 'Jerry', score: 100, subject: 'Math' },
    //     { name: 'Jerry', score: 90, subject: 'Chinese' },
    //   ];
    //   const source = Observable.from(people)
    //     .zip(Observable.interval(30), (x, y) => x);

    //   const example = source
    //     .groupBy(person => person.name)
    //     .map(group => group.reduce((acc, curr) => ({
    //       name: curr.name,
    //       score: curr.score + acc.score,
    //     })))
    //     .mergeAll();
    //   example.subscribe(new MyObserver('groupby'));
    // };
    // log('observable => groupby ', run23);

    // const run24 = () => {
    //   const source = Observable.interval(100).take(3);

    //   const sub = new Subject();
    //   source.subscribe(sub);
    //   sub.subscribe(new MyObserver('A'));
    //   setTimeout(() => {
    //     sub.subscribe(new MyObserver('B'));
    //   }, 100);
    // };
    // log('observable => subject ', run24);

    // const run25 = () => {
    //   const subject = new BehaviorSubject(0);
    //   subject.subscribe(new MyObserver('A'));
    //   subject.next(1);
    //   subject.next(2);
    //   subject.next(3);

    //   setTimeout(() => {
    //     subject.subscribe(new MyObserver('B'));
    //   }, 300);
    // };
    // log('observable => BehaviorSubject ', run25);

    // const run26 = () => {
    //   const subject = new ReplaySubject(2);
    //   subject.subscribe(new MyObserver('A'));
    //   subject.next(1);
    //   subject.next(2);
    //   subject.next(3);

    //   setTimeout(() => {
    //     subject.subscribe(new MyObserver('B'));
    //   }, 300);
    // };
    // log('observable => ReplaySubject ', run26);

    // const run27 = () => {
    //   const subject = new AsyncSubject();
    //   subject.subscribe(new MyObserver('A'));
    //   subject.next(1);
    //   subject.next(2);
    //   subject.next(3);
    //   subject.complete();

    //   setTimeout(() => {
    //     subject.subscribe(new MyObserver('B'));
    //   }, 300);
    // };
    // log('observable => AsyncSubject ', run27);

    // const run28 = () => {
    //   const source = Observable.interval(80)
    //     .take(4)
    //     .multicast(new Subject());

    //   source.subscribe(new MyObserver('A'));
    //   source.connect();

    //   setTimeout(() => {
    //     source.subscribe(new MyObserver('B'));
    //   }, 200);

    // };
    // log('observable => multicast ', run28);

    // const run29 = () => {
    //   const source = Observable.interval(80)
    //     .take(4)
    //     // .publishBehavior(0)
    //     // .publishReplay(1)
    //     // .multicast(new Subject())
    //     // .publish()
    //     // .refCount()
    //     .share();
    //   source.subscribe(new MyObserver('A'));
    //   setTimeout(() => {
    //     source.subscribe(new MyObserver('B'));
    //   }, 200);
    // };
    // log('observable => publishBehavior, publishReplay, multicast, publish, refCount, share', run29);

    // const run30 = () => {
    //   const result = Observable.interval(1000).take(6)
    //     .map(x => Math.random()) // side-effect
    //     .multicast(new Subject())
    //     .refCount();

    //   result.subscribe(new MyObserver('A'));
    //   result.subscribe(new MyObserver('B'));
    // };
    // log('observable => map -> side-effect', run30);


    // const run31 = () => {
    //   const result = Observable.from(numberArr)
    //     .do(x => console.log(`debug => ${x}`))
    //     .observeOn(Scheduler.queue);
    //     // .observeOn(Scheduler.asap);
    //     // .observeOn(Scheduler.async);
    //   result.subscribe(new MyObserver());
    // };
    // log('observable => map -> side-effect', run31);

    // const run32 = () => {
    //   const op = obs => obs
    //     .take(10)
    //     .filter(a => a % 2 === 1)
    //     .map(a => a + 1);

    //   const myObs = Observable.interval(10);
    //   myObs.let(op)
    //     .subscribe(new MyObserver());
    // };
    // log('observable => let ', run32);

    const run33 = () => {
      const op = (obs: Observable<number>) => obs.pipe(
        take(10),
        filter(a => a % 2 === 1),
        map(a => a + 1),
      );

      const myObs = Observable.interval(10);
      myObs.let(op)
        .subscribe(new MyObserver());
    };
    log('observable => pipe, let ', run33);

    await this.sleep(1500);

  }

  async sleep(time: number) {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(), time);
    });
  }

}


