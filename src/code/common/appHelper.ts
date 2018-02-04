import * as uuidV1 from 'uuid/v1';
import { unescape, escape } from 'lodash';
let crypto = require('crypto');


export class AppHelper {

  static consoleWrite(title: string, obj: any) {

    console.log(`===========${title}===========`);
    console.log(obj);
    console.log(`======================`);

  }

  static getUUIDV1() {
    return uuidV1();
  }

  static getUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  static getHmacSha1(str: string, key: string) {
    return crypto.createHmac('sha1', key).update(str).digest('hex')
  }

  static getBase64(str: string) {
    return new Buffer(str).toString('base64')
  }

  static getRandomCode() {

    //http://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }

  static MD5(str: string) {

    let md5sum = crypto.createHash('md5');
    let hash = md5sum.update(str).digest('hex')
    return hash;

  }

  static getRandomArrayValue(array: string[]) {
    return array[Math.floor(Math.random() * array.length)];
  }

  static getHexByStr(str) {
    // utf8 to latin1
    const s = unescape(encodeURIComponent(str))
    let h = ''
    for (var i = 0; i < s.length; i++) {
      h += s.charCodeAt(i).toString(16)
    }
    return h
  }

  static getStrByHex(hex) {
    let str = ''
    for (let i = 0; i < hex.length; i += 2) {
      str += String.fromCharCode(parseInt(hex.substr(i, 2), 16))
    }
    return decodeURIComponent(escape(str))
  }
}