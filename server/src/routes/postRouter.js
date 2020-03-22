import express from "express";
import { createPost } from "../controllers/post/createPost";
const postRouter = express.Router();

postRouter.post("/createPost", createPost);

export default postRouter;
