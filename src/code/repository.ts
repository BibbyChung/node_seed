/// <reference path="./../../typings/index.d.ts" />

import * as mongoose from "mongoose";
import {UnitOfWorkBase, RepositoryBase} from "mongoose-adapter";


export class PersonRepository extends RepositoryBase<IPerson>{

    constructor(unitOfWork: UnitOfWorkBase) {
        super(unitOfWork);
    }

    getDocumentName() {
        return "Person";
    }

    getSchema() {

        let schema = {
            _id: { type: String, index: { unique: true } },
            name: [{ type: String }],
            age: { type: Number },
            content: { type: String },
            dtCreated: { type: Date }
        };
        let s = new mongoose.Schema(schema);
        return s;

    }

}

export interface IPerson extends mongoose.Document {

    name: string,
    age: number;
    birthday: Date;
    Address: IAddress[];

}

export interface IAddress extends mongoose.Document {

    country: string,
    city: string,
    detailAddress: string;

}
