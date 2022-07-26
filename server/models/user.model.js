const { Schema, model } = require("mongoose");

const userSchema=new Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    username:{type:String,required:true},
    dob:{type:Object},
    profile_photo:{type:String,default:"https://www.bing.com/th?id=OIP.PNGQVIsPFaM41E60Zd0EdgHaHx&w=244&h=256&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2"}
})
const User=model("user",userSchema)
module.exports=User