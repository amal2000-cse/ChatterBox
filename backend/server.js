import dotenv from "dotenv";
import express from "express";
import path from "path";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
import connectToMongoDB from "./db/connectToDB.js";
import cookieParser from "cookie-parser";
import { app, server } from "./socket/socket.js";
dotenv.config();
// console.log(process.env);

const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

app.use(express.json()); //to parse the imcoming requests with JSON payloaads (from req.body)
app.use(cookieParser()); //to use cookie parser
// app.get("/", (req, res) => {
//   res.send("Welcome to ChatApp 2.0!");
// });

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

server.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server is running on port ${PORT}`);
});
