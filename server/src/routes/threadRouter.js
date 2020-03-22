import express from "express";
import { createThread } from "../controllers/thread/createThread";
const threadRouter = express.Router();

threadRouter.post("/createThread", createThread);

export default threadRouter;
