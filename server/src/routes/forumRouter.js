import express from "express";
import { createForum } from "../controllers/forum/createForum";
const forumRouter = express.Router();

forumRouter.post("/createForum", createForum);

export default forumRouter;
