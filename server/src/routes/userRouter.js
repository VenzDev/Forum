import express from "express";
import { login } from "../controllers/user/login";
import { register } from "../controllers/user/register";
import { auth } from "../controllers/user/auth";

const userRouter = express.Router();

userRouter.post("/login", login);
userRouter.post("/register", register);
userRouter.get("/auth", auth);

export default userRouter;
