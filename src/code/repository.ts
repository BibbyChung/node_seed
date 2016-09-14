import * as mongoose from "mongoose";
import {BaseRepository, IUnitOfWork} from "mongoose-adapter";

export class ArticleRepository extends BaseRepository<IArticle> {

    constructor(unitOfWork: IUnitOfWork) {
        super(unitOfWork);
    }

    getDocumentName() {
        return "Article";
    }

    getSchema() {

        let schema = {
            _id: { type: String, index: { unique: true } },
            comments: [{ type: String }],
            title: { type: String },
            content: { type: String },
            dtCreated: { type: Date }
        };
        let s = new mongoose.Schema(schema);
        return s;

    }

}

export interface IArticle extends mongoose.Document {
    _id: string;
    title: string,
    comments: [string | IComment],
    content: string,
    dtCreated: Date
}


export class CommentRepository extends BaseRepository<IComment> {

    constructor(unitOfWork: IUnitOfWork) {
        super(unitOfWork);
    }

    getDocumentName() {
        return "Comment";
    }

    getSchema() {

        let userSchema = {
            _id: { type: String, index: { unique: true } },
            article: { type: String },
            content: { type: String },
            dtCreated: { type: Date }
        };
        let s = new mongoose.Schema(userSchema);
        return s;

    }

}

export interface IComment extends mongoose.Document {
    _id: string;
    article: string | IArticle;
    content: string,
    dtCreated: Date
}