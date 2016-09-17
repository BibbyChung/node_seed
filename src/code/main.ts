/// <reference path="./../../typings/index.d.ts" />

import {helper} from "./helper";
import {MyUnitOfWork} from "./myUnitOfWork";
import {ArticleRep, CommentRep, IComment} from "./repository";

// ==== create data =====


export var funcAsync = async () => {

    let myDb = new MyUnitOfWork();

    //===create data===
    // let aEntity = myDb.reps.articleRep.createNewEntity();
    // aEntity._id = helper.getUUID();
    // aEntity.title = "articleTitle1";
    // aEntity.content = "articleContent1";
    // aEntity.dtCreated = new Date();
    // myDb.add(aEntity);

    // let cEntity1 = myDb.reps.commentRep.createNewEntity();
    // cEntity1._id = helper.getUUID();
    // cEntity1.article = aEntity._id;
    // cEntity1.content = "commentContent1";
    // cEntity1.dtCreated = new Date();
    // myDb.add(cEntity1);

    // let cEntity2 = myDb.reps.commentRep.createNewEntity();
    // cEntity2._id = helper.getUUID();
    // cEntity2.article = aEntity._id;
    // cEntity2.content = "commentContent2";
    // cEntity2.dtCreated = new Date();
    // myDb.add(cEntity2);

    // aEntity.comments = [
    //     cEntity1._id,
    //     cEntity2._id
    // ];

    // await myDb.saveChangeAsync();


    // ===get data===
    // let articleData = await myDb.reps.articleRep.getAll()
    //     .find({})
    //     .populate({
    //         path: "comments",
    //         model: "Comment"
    //     })
    //     .exec();
    // console.log(JSON.stringify(articleData));

    // console.log("============");

    // let commentData = await myDb.reps.commentRep.getAll()
    //     .find({})
    //     .populate({
    //         path: "article",
    //         model: "Article"
    //     })
    //     .exec();
    // console.log(JSON.stringify(commentData));



    //===remove data===
    // let aData = await myDb.reps.articleRep.getAll()
    //     .find()
    //     .exec();
    // for (let a of aData) {
    //     myDb.remove(a);
    // }

    // let cData = await myDb.reps.commentRep.getAll()
    //     .find()
    //     .exec();
    // for (let c of cData) {
    //     myDb.remove(c);
    // }
    // await myDb.saveChangeAsync();


}

