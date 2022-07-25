const express=require("express");
const { connection } = require("./config/db");
const authRouter=require("./routes/auth")
const postRouter=require("./routes/post")

const app=express()
const PORT=8080;
app.use(express.json())
app.use("/auth",authRouter)
app.use("/post",postRouter)
app.get("/",(req,res)=>{
    res.send("Welcome")
})
app.listen(PORT,async()=>{
    await connection;
    console.log(`Server started on ${PORT}`)
})
