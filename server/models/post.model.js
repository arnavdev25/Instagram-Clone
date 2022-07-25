const { Schema, model } = require("mongoose");
const mongoose=require("mongoose")
const {ObjectId}=mongoose.Schema.Types
const postSchema=new Schema({
    title:{type:String,required:true},
    description:{type:String,required:true},
    photo:{type:String},
    postedBy:{
    type:ObjectId,
    ref:"user"
    }
})
const Post=model("post",postSchema)
module.exports=Post