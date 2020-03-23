import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import logger from "morgan";
import mongoose from "mongoose";
import helmet from "helmet";
import { handleError } from "./utils/error";
import userRouter from "./routes/userRouter";
import forumRouter from "./routes/forumRouter";
import threadRouter from "./routes/threadRouter";
import postRouter from "./routes/postRouter";
import { search } from "./controllers/search";

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(helmet());
app.use(logger("dev"));

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to node js & Express" });
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Listening on port 3000");
});
app.get("/search", search);
app.use("/", userRouter);
app.use("/", forumRouter);
app.use("/", threadRouter);
app.use("/", postRouter);

app.use((err, req, res, next) => {
  console.log(err); //development!
  handleError(err, res);
});

mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  err => {
    if (err) {
      console.log(err);
    } else {
      console.log(`Mongo database is running!`);
    }
  }
);
