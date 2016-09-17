/// <reference path="./../../typings/index.d.ts" />

//myUnitOfWork.ts
import {UnitOfWorkBase} from "mongoose-adapter";
import {ArticleRep, CommentRep} from "./repository";

export class MyUnitOfWork extends UnitOfWorkBase {

    constructor() {
        super();
    }

    reps = {
        articleRep: new ArticleRep(this),
        commentRep: new CommentRep(this)
    };

}