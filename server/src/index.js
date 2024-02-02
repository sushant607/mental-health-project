import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { userRouter } from "./routes/signup.js";
import { loginRouter } from "./routes/login.js";
import { blogRouter } from "./routes/blog.js";
import {blogDisplayRouter} from "./routes/display_blog.js";
import { deleteRouter } from "./routes/delete_blog.js";
import {updateRouter} from "./routes/update_blog.js"
import { personalinfoRouter } from "./routes/personal_info.js";
import {infoDisplayRouter} from "./routes/display_info.js";

const app = express();
app.use(cors())
app.use(express.json());

mongoose.connect(
  "mongodb+srv://prj:prj1122@mhn.7hkahbo.mongodb.net/?retryWrites=true&w=majority",
 // "mongodb://localhost:27017/megha&replicaSet=ReplicaSetName",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use(userRouter)
app.use(loginRouter)
app.use(blogRouter)
app.use(updateRouter)
app.use(deleteRouter)
app.use(blogDisplayRouter)
app.use(personalinfoRouter)
app.use(infoDisplayRouter)

app.listen(3001, () => console.log("Server started"));