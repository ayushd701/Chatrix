import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRoute from "./routes/auth.route.js";
import messageRoute from "./routes/message.route.js";
import { connectMongoDb } from "./lib/db.js";
import { app , server} from "./lib/socket.js"

dotenv.config();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use("/api/auth", authRoute);
app.use("/api/message", messageRoute);

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  connectMongoDb();
});
