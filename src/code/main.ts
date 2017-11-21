import { lodashRun } from './lodash/main';
import { momentRun } from './moment/main';
import { MD5Run } from './md5/main';
import { requestRun } from './request/main';

import { AppHelper } from './common/appHelper';

export let testRun = async () => {

    lodashRun();
    // momentRun();
    // MD5Run();
    // await requestRun();

}
