import { AppHelper } from '../common/appHelper';
export let collectionRun = () => {

	//maps

	// let map = new Map([
	// 	["bibby", 20],
	// 	["molly", 30],
	// 	["Joe", 55], // trailing comma is ignored
	// ]);

	var map = new Map();
	map.set("bibby", 20);
	map.set("molly", 30);
	map.set("Joe", 55);

	AppHelper.consoleWrite("map result", [...map]);

	//for
	for (let [key, value] of map) {
		AppHelper.consoleWrite("map in for", { key, value });
	}

	//map to object
	let obj = {};
	for (let [key, value] of map) {
		obj[key.toString()] = value;
	}
	AppHelper.consoleWrite("map to obj", obj);

	//map has
	let hasBibby = map.has("bibby");
	AppHelper.consoleWrite("hasBibby", hasBibby);

	//map get
	let getBibby = map.get("bibby");
	AppHelper.consoleWrite("getBibby", getBibby);


}