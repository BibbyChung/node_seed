
export enum MyExceptionTypeEnum {
  notImplement,
  badRequest,
}

export class MyException extends Error {
  constructor(public type: MyExceptionTypeEnum, m: string) {
    super(m);
    Object.setPrototypeOf(this, MyException.prototype);
  }
}
