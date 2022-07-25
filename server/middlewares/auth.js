const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/keys');
const User = require('../models/user.model');

module.exports=(req,res,next)=>{
   const {authorization}=req.headers;
   if(!authorization){
    return res.status(404).json({error:"Need to Looged In"})
   }
   const token=authorization.replace("Bearer ","")
   jwt.verify(token,JWT_SECRET,(err,payload)=>{
    if(err){
        return res.status(404).json({error:"Need to Looged In"})

    }
    const {_id}=payload
    User.findById(_id).then((data)=>{
        req.user=data
        next()
    })
   
   })
}