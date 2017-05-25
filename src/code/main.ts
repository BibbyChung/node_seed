import { AppHelper } from './common/appHelper';
import { MyException, MyExceptionTypeEnum } from './exceptions/myException';

class Person {
  name: string;
  getFullName() {
    throw new MyException('notImplement', MyExceptionTypeEnum.notImplement);
  }
}

export const run = () => {

  try {

    const p = new Person();
    p.getFullName();

  } catch (e) {

    const ex = e as MyException;
    if (ex.type === MyExceptionTypeEnum.notImplement)
      AppHelper.consoleWrite('MyExceptionTypeEnum', ex.type);

    AppHelper.consoleWrite('e', e);

  }
};
