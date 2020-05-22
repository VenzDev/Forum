import express from "express";
import { createForum } from "../controllers/forum/createForum";
import { getForums } from "../controllers/forum/getForums";
import { deleteForum } from "../controllers/forum/deleteForum";
import { editForum } from "../controllers/forum/editForum";
const forumRouter = express.Router();

forumRouter.post("/createForum", createForum);
forumRouter.get("/getForums", getForums);
forumRouter.get("/deleteForum", deleteForum);
forumRouter.post("/editForum", editForum);
export default forumRouter;
