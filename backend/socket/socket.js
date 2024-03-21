import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();
//here we have added the socket server on top of express server
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
  },
});

export const getReceiverSocketId = (receiverId) => {
  return userSocketMap[receiverId];
}

const userSocketMap={};
//here it will stored as a key value
// {userId : socketId}
//{key : value}

io.on("connection", (socket) => {
  console.log("A user connected", socket.id);

  //now to get the userId from the frontend
  const userId = socket.handshake.query.userId;
  if(userId !== "undefined") userSocketMap[userId] = socket.id;

  //io.emit() is used to send events to all the connected clients
  io.emit("getonlineUsers",Object.keys(userSocketMap));

  //socket.on() is used to listen to the events, can be used both on client and server side

  socket.on("disconnect", () => {
    console.log("User disconnected", socket.id);
    //afte when the user disconnect also we will send the number of users which are online
    //to the frontend
    delete userSocketMap[userId];
    io.emit("getonlineUsers",Object.keys(userSocketMap));

  });
});

export { app, io, server };
