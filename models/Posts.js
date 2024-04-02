import {model, Schema} from "mongoose";

export const PostSchema = new Schema(
  {
    title:{type: String, required:true},
    body:{type:String, required:true},
    createdAt:{type: Date, default:Date.now},
    updatedAt:{type: Date, default:Date.now},
  }
);

export const PostModel = model('post', PostSchema)