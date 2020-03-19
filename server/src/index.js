import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import logger from "morgan";
import mongoose from "mongoose";
import helmet from "helmet";

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(helmet());
app.use(logger("dev"));

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to node js & Express" });
});
app.get("/info", (req, res) => {
  res.status(200).json({ message: "Working!" });
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Listening on port 3000");
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
