export class AppHelper {

    static consoleWrite(title: string, obj: any) {

        console.log(`===========${title}===========`);
        console.log(obj);
        console.log(`======================`);

    }

    static getUUID() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });

    }

    static getRandomCode() {
        
        //http://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < 5; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }

}