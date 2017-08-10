import * as request from 'request';
import { AppHelper } from '../common/appHelper';
import * as iconv from 'iconv-lite';

class MyRequest {

  private timeout = 5000;
  private delay = 500;

  async getStrAsync(url: string, encoding: string, headers: { [key: string]: string }) {
    const option: request.CoreOptions = {
      headers: headers,
      method: "GET",
      encoding: null,
      timeout: this.timeout
    };

    const result = await this.getResult(url, encoding, option);
    //await AppHelper.sleepAsync(this.delay);
    return result;
  }

  async postStrAsync(url: string, encoding: string, formData: Object, headers: { [key: string]: string }) {
    const option: request.CoreOptions = {
      headers: headers,
      method: "POST",
      form: formData,
      encoding: null,
      timeout: this.timeout
    };

    const result = await this.getResult(url, encoding, option);
    //await AppHelper.sleepAsync(this.delay);
    return result;
  }

  private getResult(url: string, encoding: string, option: request.CoreOptions) {
    const p = new Promise<string>((resolve, reject) => {
      request(url, option, (err, res, body) => {
        if (err) {
          reject(err);
        }
        let str = iconv.decode(body, encoding);
        resolve(str);
      });
    });
    return p;
  }

}

export let requestRun = async () => {

  const headers: { [key: string]: string } = {};
  headers["User-Agent"] = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.11; rv:44.0) Gecko/20100101 Firefox/44.0";
  headers["Accept"] = "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8";

  const url = 'https://github.com';

  const requestAdapter = new MyRequest();
  const content = await requestAdapter.getStrAsync(url, "big5", headers);

  AppHelper.consoleWrite("content", content);

};