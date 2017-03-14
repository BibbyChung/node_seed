/// <reference path="./../../typings/index.d.ts" />

import * as mongoose from "mongoose";
import {UnitOfWorkBase, RepositoryBase} from "mongoose-adapter";


export class PersonRepository extends RepositoryBase<IPerson>{
    getCollectionName(): string {
          return "Person";
    }

    constructor(unitOfWork: UnitOfWorkBase) {
        super(unitOfWork);
    }

    getSchema() {

        let schema = {
            _id: { type: String, index: { unique: true } },
            name: { type: String },
            age: { type: Number },
            birthday: { type: Date },
            address: [{
                country: String,
                city: String,
                detailAddress: String
            }]

        };
        let s = new mongoose.Schema(schema);
        return s;

    }

}

export interface IPerson extends mongoose.Document {

    _id: string,
    name: string,
    age: number;
    birthday: Date;
    address: IAddress[];

}

export interface IAddress {

    country: string,
    city: string,
    detailAddress: string;

}
