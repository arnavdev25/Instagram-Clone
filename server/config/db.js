const mongoose=require("mongoose")
const { MONGOURI } = require("./keys")
const connection=mongoose.connect(MONGOURI).then(()=>console.log("connected to db")).catch(()=>console.log("error"))
module.exports=connection;

