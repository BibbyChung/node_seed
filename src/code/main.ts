import { AppHelper } from './common/appHelper';
import { MyUnitOfWork } from "./myUnitOfWork";
import { IPerson, IAddress } from "./repository";

export var funcAsync = async () => {

    let myDb = new MyUnitOfWork();

    //add a entity
    // let nEntity = myDb.reps.personRep.createNewEntity();
    // nEntity._id = AppHelper.getUUID();
    // nEntity.name = "Bibby";
    // nEntity.age = 28;
    // nEntity.birthday = new Date(1981, 0, 8);
    // nEntity.address = [
    //     {
    //         country: "Taiwan",
    //         city: "Taipei",
    //         detailAddress: "Taipei, Taiwan"
    //     },
    //     {
    //         country: "China",
    //         city: "Shangshi",
    //         detailAddress: "Shangshi, China"
    //     }
    // ];
    // myDb.add(nEntity);

    // let nEntity2 = myDb.reps.personRep.createNewEntity();
    // nEntity2._id = AppHelper.getUUID();
    // nEntity2.name = "Mary";
    // nEntity2.age = 18;
    // nEntity2.address = [
    //     {
    //         country: "Taiwan",
    //         city: "Taichung",
    //         detailAddress: null
    //     }
    // ];
    // myDb.add(nEntity2);

    //await myDb.saveChangeAsync();

    //search the master property
    let masterData = await myDb.reps.personRep.getAll()
        .find({ age: 28 })
        .exec();
    AppHelper.consoleWrite("masterData", masterData);

    //search the nest data
    let nestData = await myDb.reps.personRep.getAll()
        .find({ "address.city": "Taipei" })
        .exec();
    AppHelper.consoleWrite("nestData", nestData);

    //search the entity not existed
    let notExisted = await myDb.reps.personRep.getAll()
        .find({ birthday: { $exists: false } })
        .exec();
    AppHelper.consoleWrite("notExisted", notExisted);

    //search the property is null
    let nullProperty = await myDb.reps.personRep.getAll()
        .find({ "address.detailAddress": null })
        .exec();
    AppHelper.consoleWrite("nullProperty", nullProperty);

    //search the property is not null
    let notNullProperty = await myDb.reps.personRep.getAll()
        .find({ "address.detailAddress": { $ne: null } })
        .exec();
    AppHelper.consoleWrite("notNullProperty", notNullProperty);

    //search the name include array.
    let includedName = await myDb.reps.personRep.getAll()
        .find({ name: { $in: ["Bibby", "Mary"] } })
        .exec();
    AppHelper.consoleWrite("includedName", includedName);

    //search the name doesn't include array.
    let notIncludedName = await myDb.reps.personRep.getAll()
        .find({ name: { $not: { $in: ["Bibby"] } } })
        .exec();
    AppHelper.consoleWrite("notIncludedName", notIncludedName);

    //search the array is 2
    let array2 = await myDb.reps.personRep.getAll()
        .find({ address: { $size: 2 } })
        .exec();
    AppHelper.consoleWrite("array2", array2);

}
