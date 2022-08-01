const express = require("express");
const http=require("http")
const { connection } = require("./config/db");
const authRouter = require("./routes/auth");
const postRouter = require("./routes/post");
const otpRouter = require("./routes/otp");
require("dotenv").config();
// console.log(process.env)
const cors = require("cors");
const app = express();

const cors=require("cors")
const app=express()
const http = require('http');
const server = http.createServer(app);
// socket.io
const messageRoutes = require("./routes/messages");
const socket = require("socket.io");
const server = http.createServer(app);

app.use(cors());
app.use(express.json());
app.use("/auth", authRouter);
app.use("/post", postRouter);
app.use("/otp", otpRouter);
app.use("/api/messages", messageRoutes);

app.get("/", (req, res) => {
  res.send("Welcome");
});

const io = socket(server, {
  cors: {
    origin: "http://localhost:3000",
    credentials: true,
  },
});

global.onlineUsers = new Map();
io.on("connection", (socket) => {
  global.chatSocket = socket;
  socket.on("add-user", (userId) => {
    onlineUsers.set(userId, socket.id);
  });

  socket.on("send-msg", (data) => {
    const sendUserSocket = onlineUsers.get(data.to);
    if (sendUserSocket) {
      socket.to(sendUserSocket).emit("msg-recieve", data.msg);
    }
  });
});

server.listen(process.env.PORT, async () => {
  await connection;
  console.log(`Server started on ${process.env.PORT}`);
});

// socket.io
