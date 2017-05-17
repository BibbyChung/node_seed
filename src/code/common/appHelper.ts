export class AppHelper {

  static consoleWrite(title: string, obj: any) {

    console.log(`===========${title}===========`);
    console.log(obj);
    console.log(`======================`);

  }

  static getUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = Math.random() * 16 | 0;
      const v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

}
