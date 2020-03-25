import express from "express";
import { createThread } from "../controllers/thread/createThread";
import { findThread } from "../controllers/thread/findThread";
const threadRouter = express.Router();

threadRouter.post("/createThread", createThread);
threadRouter.get("/findThread", findThread);

export default threadRouter;
