import express from "express";
import { login } from "../controllers/user/login";
import { register } from "../controllers/user/register";
import { auth } from "../controllers/user/auth";
import { fetchProfil } from "../controllers/user/fetchProfil";
import { deleteNotifications } from "../controllers/user/deleteNotifications";
import { banUser } from "../controllers/user/banUser";

const userRouter = express.Router();

userRouter.post("/login", login);
userRouter.post("/register", register);
userRouter.get("/auth", auth);
userRouter.get("/fetchProfil", fetchProfil);
userRouter.get("/deleteNotifications", deleteNotifications);
userRouter.post("/banUser", banUser);

export default userRouter;
