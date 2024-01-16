import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { userRouter } from "./routes/signup.js";
import { loginRouter } from "./routes/login.js";
import { blogRouter } from "./routes/blog.js";

const app = express();
app.use(cors())
app.use(express.json());

mongoose.connect(
  "mongodb://localhost:27017/megha?replicaSet=ReplicaSetName",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use(userRouter)
app.use(loginRouter)
app.use(blogRouter)

app.listen(3001, () => console.log("Server started"));