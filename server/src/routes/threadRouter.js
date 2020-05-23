import express from "express";
import { createThread } from "../controllers/thread/createThread";
import { findThread } from "../controllers/thread/findThread";
import { findUserThreads } from "../controllers/thread/findUserThreads";
import { closeThread } from "../controllers/thread/closeThread";
const threadRouter = express.Router();

threadRouter.post("/createThread", createThread);
threadRouter.get("/findThread", findThread);
threadRouter.get("/findUserThreads", findUserThreads);
threadRouter.get("/closeThread", closeThread);

export default threadRouter;
