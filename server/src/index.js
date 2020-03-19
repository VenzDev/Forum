import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to node js & Express" });
});
app.get("/info", (req, res) => {
  res.status(200).json({ message: "Working!" });
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Listening on port 3000");
});
