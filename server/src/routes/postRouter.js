import express from "express";
import { createPost } from "../controllers/post/createPost";
import { deletePost } from "../controllers/post/deletePost";
import { editPost } from "../controllers/post/editPost";
const postRouter = express.Router();

postRouter.post("/createPost", createPost);
postRouter.post("/deletePost", deletePost);
postRouter.post("/editPost", editPost);

export default postRouter;
