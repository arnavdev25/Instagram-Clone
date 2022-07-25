const express= require("express")
const User = require("../models/user.model")
const router=express.Router()
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require("../config/keys");
const authentication=require("../middlewares/auth")
router.post("/signup",(req,res)=>{
    const {name,email,password}=req.body
     if(!name || !email || !password){
       return res.status(404).json({error:"Please fill all the fields properly"})
     }
    
     User.findOne({email:email}).then((user)=>{
        if(user){
            return res.status(404).json({error:"User already exists"})
        }
        bcrypt.hash(password,saltRounds).then((hashpass)=>{
            const u=new User({...req.body,password:hashpass})
            u.save().then(()=>res.json(u)).catch((e)=>console.log(e))
         })
     }).catch((e)=>console.log(e))
})
router.post("/login",(req,res)=>{
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
            const token=jwt.sign({_id:user.id},JWT_SECRET)
            return res.json({token})
           }
           else{
            return res.status(404).json({error:"Invalid username or password"})

           }
        }).catch((e)=>console.log(e))
    })
})
router.get("/profile",authentication,(req,res)=>{
    res.send("Hello")
})
module.exports=router;