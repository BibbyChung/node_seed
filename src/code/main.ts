/// <reference path="./../../typings/index.d.ts" />

import {UnitOfWork} from "mongoose-adapter";
import {helper} from "./helper";
import {ArticleRepository, CommentRepository, IComment} from "./repository";

// ==== create data =====


export var funcAsync = async () => {

    let unitOfWork = new UnitOfWork();
    let aRep = new ArticleRepository(unitOfWork);
    let cRep = new CommentRepository(unitOfWork);

    //===create data===
    // let aEntity = aRep.createNewEntity();
    // aEntity._id = helper.getUUID();
    // aEntity.title = "articleTitle1";
    // aEntity.content = "articleContent1";
    // aEntity.dtCreated = new Date();
    // aRep.add(aEntity);

    // let cEntity1 = cRep.createNewEntity();
    // cEntity1._id = helper.getUUID();
    // cEntity1.article = aEntity._id;
    // cEntity1.content = "commentContent1";
    // cEntity1.dtCreated = new Date();
    // cRep.add(cEntity1);

    // let cEntity2 = cRep.createNewEntity();
    // cEntity2._id = helper.getUUID();
    // cEntity2.article = aEntity._id;
    // cEntity2.content = "commentContent2";
    // cEntity2.dtCreated = new Date();
    // cRep.add(cEntity2);

    // aEntity.comments = [
    //     cEntity1._id,
    //     cEntity2._id
    // ];

    // await unitOfWork.saveChangeAsync();


    // ===get data===
    // await aRep.getAll();
    // await cRep.getAll();

    // let articleData = await aRep.getAll()
    //     .find({})
    //     .populate({
    //         path: "comments",
    //         model: "Comment"
    //     })
    //     .exec();
    // console.log(JSON.stringify(articleData));

    // console.log("============");

    // let commentData = await cRep.getAll()
    //     .find({})
    //     .populate({
    //         path: "article",
    //         model: "Article"
    //     })
    //     .exec();
    // console.log(JSON.stringify(commentData));



    //===remove data===
    // let aData = await aRep.getAll()
    //     .find()
    //     .exec();
    // for (let a of aData) {
    //     aRep.remove(a);
    // }

    // let cData = await cRep.getAll()
    //     .find()
    //     .exec();
    // for (let c of cData) {
    //     cRep.remove(c);
    // }
    // await unitOfWork.saveChangeAsync();


}

