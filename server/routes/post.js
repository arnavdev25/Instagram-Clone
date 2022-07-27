const authentication=require("../middlewares/auth")
const express=require("express");
const Post = require("../models/post.model");
const router=express.Router();
router.get("/all",(req,res)=>{
  Post.find().populate("postedBy","_id name").then((r)=>{
    res.json(r)
  }).catch((e)=>console.log(e))
})
router.get("/mypost",authentication,(req,res)=>{
    Post.find({postedBy:req.user._id}).populate("postedBy","_id name").then((r)=>{
      res.json(r)
    }).catch((e)=>console.log(e))
  })
router.post("/createpost",authentication,(req,res)=>{
    const {photo,description}=req.body;
    if(!photo || !description){
        return res.status(403).json({error:"Please fill correct details"})
    }
    const post=new Post({...req.body,postedBy:req.user})
    post.save().then((r)=>{
        res.json(r)
    }).catch((e)=>console.log(e))
})
module.exports=router