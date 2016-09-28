/// <reference path="./../../typings/index.d.ts" />

//myUnitOfWork.ts
import {UnitOfWorkBase} from "mongoose-adapter";
import {PersonRepository, IPerson, IAddress} from "./repository";

export class MyUnitOfWork extends UnitOfWorkBase {

    constructor() {
        super();
    }

    reps = {
        personRep: new PersonRepository(this)
    };

}