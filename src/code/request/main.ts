import * as request from 'request';
import { AppHelper } from '../common/appHelper';
import * as iconv from 'iconv-lite';
import * as moment from 'moment';

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






  const startAt = moment('2017-08-10').unix();
  const endAt = moment('2017-08-11').unix();
  const host = 'https://bmqb-production.cn-shanghai.log.aliyuncs.com';
  const query = 'mobile';
  const resource = `/logstores/bmqb-nginx-access?type=log&topic=groupA&from=${startAt}&to=${endAt}&query=${query}`;
  const url = `${host}${resource}`;


  const VERB = "GET";
  const DATE = (new Date()).toUTCString();// moment().toDate().toString();
  const CanonicalizedLOGHeaders = `x-log-apiversion:0.6.0\nx-log-bodyrawsize:0\nx-log-signaturemethod:hmac-sha1`;
  const CanonicalizedResource = resource;

  AppHelper.consoleWrite('DATE', DATE);



  const SignString = `${VERB}\n\n\n${DATE}\n${CanonicalizedLOGHeaders}\n${CanonicalizedResource}`;

  AppHelper.consoleWrite('SignString', SignString);

  //GET\n\n\nMon, 09 Nov 2015 06:11:16 GMT\nx-log-apiversion:0.6.0\nx-log-signaturemethod:hmac-sha1\n/logstores?logstoreName=&offset=0&size=1000

  const accessKey = '';
  const secretKey = '';

  const Signature = AppHelper.getBase64(AppHelper.getHmacSha1(SignString, secretKey));
  const Authorization = `LOG ${accessKey}:${Signature}`;

  AppHelper.consoleWrite('Authorization', Authorization);

  //base64(hmac-sha1(UTF8-Encoding-Of(SignString)，AccessKeySecret))
  //Authorization:LOG <AccessKeyId>:<Signature>

  AppHelper.consoleWrite('url', url);

  const headers: { [key: string]: string } = {};
  //headers["User-Agent"] = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.11; rv:44.0) Gecko/20100101 Firefox/44.0";
  //headers["Accept"] = "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8";
  headers["Authorization"] = Authorization;
  headers["x-log-date"] = DATE;
  headers["x-log-bodyrawsize"] = '0';
  headers["x-log-apiversion"] = '0.6.0';
  headers["x-log-signaturemethod"] = 'hmac-sha1';


  //华东二


  const requestAdapter = new MyRequest();
  const content = await requestAdapter.getStrAsync(url, "UTF-8", headers);

  AppHelper.consoleWrite("content", content);

};