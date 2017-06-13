import { AppHelper } from './common/appHelper';
import * as path from 'path';
import * as crypto from 'crypto-js';
import * as moment from 'moment';
import * as formData from 'form-data';

const fetch = require('node-fetch');

import { alimnsRun } from './ali-mns';

// http://armclr.incars.com.cn/Links/AliMNS?lang=zh-Hans

export const run = async () => {

  await alimnsRun();

};

run();
