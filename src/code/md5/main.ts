import { AppHelper } from '../common/appHelper';

export let MD5Run = () => {

	let password = "ntFFh135";
	let hash = AppHelper.MD5(password);
	AppHelper.consoleWrite("hash", hash);

};