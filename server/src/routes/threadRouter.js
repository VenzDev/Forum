import express from "express";
import { createThread } from "../controllers/thread/createThread";
import { findThread } from "../controllers/thread/findThread";
import { findUserThreads } from "../controllers/thread/findUserThreads";
const threadRouter = express.Router();

threadRouter.post("/createThread", createThread);
threadRouter.get("/findThread", findThread);
threadRouter.get("/findUserThreads", findUserThreads);

export default threadRouter;
