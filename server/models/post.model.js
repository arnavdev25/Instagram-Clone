const { Schema, model } = require("mongoose");
const mongoose=require("mongoose")
const {ObjectId}=mongoose.Schema.Types
const postSchema=new Schema({
    description:{type:String,required:true},
    photo:{type:String,required:true},
    postedBy:{
    type:ObjectId,
    ref:"user"
    },
    likes:[{type:ObjectId,ref:"user"}],
    comments:[{type:ObjectId,ref:"user"}]
})
const Post=model("post",postSchema)
module.exports=Post