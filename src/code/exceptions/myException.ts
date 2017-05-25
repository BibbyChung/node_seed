
export enum MyExceptionTypeEnum {
  notImplement,
  badRequest,
}

export class MyException extends Error {
  constructor(msg: string, public type: MyExceptionTypeEnum) {
    super(msg);
    Object.setPrototypeOf(this, MyException.prototype);
  }
}
