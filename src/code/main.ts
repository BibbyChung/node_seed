import { AppHelper } from './common/appHelper';
import { promiseRun } from './promise/main';
import { objectAssignRun } from "./objectAssign/main";
import { collectionRun } from './collection/main';

export let fun = async() => {

    // objectAssignRun();
    // collectionRun();
    promiseRun();

    await AppHelper.sleep(500);
}