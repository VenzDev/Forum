import express from "express";
import { createForum } from "../controllers/forum/createForum";
import { getForums } from "../controllers/forum/getForums";
const forumRouter = express.Router();

forumRouter.post("/createForum", createForum);
forumRouter.get("/getForums", getForums);

export default forumRouter;
