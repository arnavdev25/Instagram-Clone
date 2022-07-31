const express= require("express")
const User = require("../models/user.model")
const router=express.Router()
const bcrypt = require('bcrypt');
const saltRounds = 10;
require('dotenv').config()

const jwt = require('jsonwebtoken');
const authentication=require("../middlewares/auth")
router.post("/signup",(req,res,next)=>{
    const {name,email,password,username}=req.body
     if(!name || !email || !password || !username){
       return res.status(404).json({error:"Please fill all the fields properly"})
     }
    
     User.findOne({email:email}).then((user)=>{
        if(user){
            return res.status(404).json({error:"User already exists"})
        }
        bcrypt.hash(password,saltRounds).then((hashpass)=>{
            const u=new User({...req.body,password:hashpass})
            u.save().then((r)=>{
                const {_id,name,username,email}=r
                const token=jwt.sign({_id:u.id},process.env.JWT_SECRET)
                return res.json({token,user:{_id,name,username,email}})
               }).catch((e)=>next(e))
         })
     }).catch((e)=>next(e))
})
router.post("/login",(req,res,next)=>{
    const {email,password}=req.body;
    if(!email || !password){
        return res.status(500).json({error:"Please fill the details properly"})
    }
    User.findOne({email:email}).then((user)=>{
        if(!user){
            return res.status(404).json({error:"Invalid username or password"})
        }
        bcrypt.compare(password,user.password).then((r)=>{
           if(r){
            // return res.json("Succesfully Logged in")
            const {_id,name,username,email}=user
            const token=jwt.sign({_id:user.id},process.env.JWT_SECRET)
            return res.json({token,user:{_id,name,username,email}})
           }
           else{
            return res.status(404).json({error:"Invalid username or password"})

           }
        }).catch((e)=>next(e))
    })
})
router.post("/signup/dob",authentication,(req,res,next)=>{
    const user=User.findByIdAndUpdate(req.user._id,{
        dob:req.body
    }).then(()=>res.send("Success"))
    .catch((e)=>next(e))
})
router.get("/profile",authentication,(req,res,next)=>{
    res.send("Hello")
})
module.exports=router;